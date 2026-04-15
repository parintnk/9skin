import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { SECTION_KEYS, SECTION_LABELS, UNEDITABLE_SECTIONS, type SectionKey } from "@/lib/content/types";
import { signOut } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  const supabase = await createClient();
  const { data: rows } = await supabase.from("sections").select("key, draft, updated_at");
  const draftMap = new Map<string, boolean>();
  const updatedMap = new Map<string, string>();
  rows?.forEach(r => {
    draftMap.set(r.key, r.draft != null);
    updatedMap.set(r.key, r.updated_at);
  });

  const editable = SECTION_KEYS.filter(k => !UNEDITABLE_SECTIONS.includes(k as typeof UNEDITABLE_SECTIONS[number]));

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium">9skin Admin</h1>
        <form action={signOut}><button className="text-sm text-neutral-600 hover:text-neutral-900">Sign out</button></form>
      </div>
      <p className="text-sm text-neutral-600 mb-6">เลือก section ที่ต้องการแก้ไข</p>
      <ul className="flex flex-col gap-2">
        {editable.map(key => (
          <li key={key}>
            <Link href={`/admin/${key}`} className="flex items-center justify-between px-4 py-3 bg-white rounded-lg border hover:border-neutral-400 transition">
              <span>
                <span className="text-xs text-neutral-500 mr-2">{key}</span>
                <span className="font-medium">{SECTION_LABELS[key as SectionKey]}</span>
              </span>
              {draftMap.get(key) && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">draft</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
