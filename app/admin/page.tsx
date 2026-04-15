import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { SECTION_KEYS, SECTION_LABELS, UNEDITABLE_SECTIONS, type SectionKey } from "@/lib/content/types";
import { signOut } from "./actions";

export const dynamic = "force-dynamic";

type Group = { title: string; blurb: string; keys: SectionKey[] };

const GROUPS: Group[] = [
  { title: "Hero & Intro", blurb: "Opening impression", keys: ["s1_hero", "s2_concerns", "s3_problems"] },
  { title: "Value & Method", blurb: "Why 9skin works", keys: ["s4_three_keys", "s5_why_choose", "s6_skin_care", "s7_transformation"] },
  { title: "Brand Story", blurb: "Mission & system", keys: ["s8_mission", "s9_system"] },
  { title: "Results & CTA", blurb: "Social proof + booking", keys: ["s10_results", "s10b_cta", "s11_kol", "s13_environment"] },
  { title: "Global", blurb: "Footer & site-wide", keys: ["footer"] },
];

function formatRelative(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return d.toLocaleDateString();
}

export default async function AdminHome() {
  const supabase = await createClient();
  const { data: rows } = await supabase.from("sections").select("key, draft, updated_at");
  const draftMap = new Map<string, boolean>();
  const updatedMap = new Map<string, string>();
  rows?.forEach(r => {
    draftMap.set(r.key, r.draft != null);
    updatedMap.set(r.key, r.updated_at);
  });

  const editableSet = new Set(SECTION_KEYS.filter(k => !UNEDITABLE_SECTIONS.includes(k as string)));
  const draftCount = Array.from(draftMap.entries()).filter(([k, v]) => v && editableSet.has(k as SectionKey)).length;

  return (
    <div>
      <header className="sticky top-0 z-10 border-b" style={{ background: "rgba(245,241,234,0.85)", backdropFilter: "blur(10px)", borderColor: "var(--a-border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <h1 className="text-lg font-light tracking-[0.2em]">9SKIN</h1>
            <span className="text-[10px] tracking-[0.3em]" style={{ color: "var(--a-text-muted)" }}>ADMIN</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/example1" target="_blank" className="a-btn a-btn-ghost text-xs">
              <span>View site</span>
              <span aria-hidden>↗</span>
            </Link>
            <form action={signOut}>
              <button className="a-btn a-btn-ghost text-xs">Sign out</button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-1">Content sections</h2>
          <p className="text-sm" style={{ color: "var(--a-text-muted)" }}>
            Edit any section on the landing page. Changes autosave as draft; publish when ready.
            {draftCount > 0 && <> · <span style={{ color: "var(--a-amber)" }}>{draftCount} unpublished draft{draftCount === 1 ? "" : "s"}</span></>}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {GROUPS.map(group => (
            <section key={group.title}>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-sm font-medium tracking-wide">{group.title}</h3>
                <span className="text-[11px]" style={{ color: "var(--a-text-muted)" }}>{group.blurb}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {group.keys.filter(k => editableSet.has(k)).map(key => {
                  const hasDraft = draftMap.get(key) ?? false;
                  const updated = updatedMap.get(key);
                  return (
                    <Link key={key} href={`/admin/${key}`} className="a-card a-card-hover p-4 flex items-center justify-between gap-3 group">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--a-accent-soft)", color: "var(--a-text-muted)" }}>
                            {key}
                          </span>
                          {hasDraft && <span className="a-badge a-badge-draft">● draft</span>}
                        </div>
                        <div className="font-medium text-sm truncate">{SECTION_LABELS[key]}</div>
                        <div className="text-[11px] mt-1" style={{ color: "var(--a-text-muted)" }}>
                          {updated ? `Updated ${formatRelative(updated)}` : "Not yet saved"}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition text-lg" style={{ color: "var(--a-text-muted)" }}>→</div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
