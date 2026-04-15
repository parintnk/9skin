"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SECTION_KEYS, type SectionKey } from "@/lib/content/types";
import { schemas } from "@/lib/content/schema";
import { randomUUID } from "crypto";

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");
  const { data: admin } = await supabase.from("admins").select("user_id").eq("user_id", user.id).maybeSingle();
  if (!admin) throw new Error("Not an admin");
  return { supabase, user };
}

export async function signIn(formData: FormData): Promise<void> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirect") ?? "/admin");
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    const url = new URL("/admin/login", "http://x");
    url.searchParams.set("error", error.message);
    if (redirectTo) url.searchParams.set("redirect", redirectTo);
    redirect(url.pathname + url.search);
  }
  redirect(redirectTo);
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function saveDraft(key: SectionKey, data: unknown) {
  if (!SECTION_KEYS.includes(key)) throw new Error("Unknown section");
  const schema = (schemas as Record<string, { parse: (d: unknown) => unknown }>)[key];
  const parsed = schema.parse(data);
  const { supabase, user } = await requireAdmin();
  const { error } = await supabase.from("sections").update({ draft: parsed, updated_by: user.id }).eq("key", key);
  if (error) throw error;
  return { ok: true };
}

export async function publishDraft(key: SectionKey) {
  const { supabase, user } = await requireAdmin();
  const { data: row, error: readErr } = await supabase.from("sections").select("draft").eq("key", key).maybeSingle();
  if (readErr) throw readErr;
  if (!row?.draft) return { ok: false, message: "No draft to publish" };
  const { error } = await supabase.from("sections").update({ published: row.draft, draft: null, updated_by: user.id }).eq("key", key);
  if (error) throw error;
  revalidatePath("/example1");
  return { ok: true };
}

export async function discardDraft(key: SectionKey) {
  const { supabase } = await requireAdmin();
  await supabase.from("sections").update({ draft: null }).eq("key", key);
  return { ok: true };
}

export async function uploadImage(key: SectionKey, file: File): Promise<{ path: string }> {
  await requireAdmin();
  const admin = createAdminClient();
  const ext = (file.name.split(".").pop() ?? "bin").toLowerCase();
  const path = `${key}/${randomUUID()}.${ext}`;
  const bytes = new Uint8Array(await file.arrayBuffer());
  const { error } = await admin.storage.from("content").upload(path, bytes, { contentType: file.type, upsert: false });
  if (error) throw error;
  return { path };
}
