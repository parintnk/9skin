import { createClient } from "@supabase/supabase-js";
import { defaults } from "../lib/content/defaults.ts";
import { SECTION_KEYS, SECTION_LABELS } from "../lib/content/types.ts";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });

async function main() {
  const rows = SECTION_KEYS.map(key => ({
    key,
    title: SECTION_LABELS[key],
    published: (defaults as Record<string, unknown>)[key],
    draft: null,
  }));

  const { error } = await supabase.from("sections").upsert(rows, { onConflict: "key" });
  if (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
  console.log(`Seeded ${rows.length} sections.`);

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminEmail && adminPassword) {
    const { data: created, error: createErr } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
    });
    if (createErr && !/already/i.test(createErr.message)) {
      console.error("Admin user create failed:", createErr);
      process.exit(1);
    }
    let userId = created?.user?.id;
    if (!userId) {
      const { data: list } = await supabase.auth.admin.listUsers();
      userId = list?.users.find(u => u.email === adminEmail)?.id;
    }
    if (userId) {
      const { error: adminErr } = await supabase.from("admins").upsert({ user_id: userId });
      if (adminErr) console.error("admins insert failed:", adminErr);
      else console.log(`Admin ${adminEmail} ready.`);
    }
  }
}

main();
