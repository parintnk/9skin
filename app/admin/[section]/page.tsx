import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SECTION_KEYS, SECTION_LABELS, UNEDITABLE_SECTIONS, type SectionKey } from "@/lib/content/types";
import { defaults } from "@/lib/content/defaults";
import SectionEditor from "../components/SectionEditor";

export const dynamic = "force-dynamic";

export default async function EditorPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!SECTION_KEYS.includes(section as SectionKey)) notFound();
  if (UNEDITABLE_SECTIONS.includes(section as typeof UNEDITABLE_SECTIONS[number])) notFound();

  const key = section as SectionKey;
  const supabase = await createClient();
  const { data: row } = await supabase.from("sections").select("published, draft").eq("key", key).maybeSingle();

  const initial = row?.draft ?? row?.published ?? (defaults as Record<string, unknown>)[key];

  return (
    <SectionEditor
      sectionKey={key}
      title={SECTION_LABELS[key]}
      initialValue={initial}
      hasDraft={!!row?.draft}
    />
  );
}
