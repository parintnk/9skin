import { createClient } from "@/lib/supabase/server";
import { defaults } from "./defaults";
import { SECTION_KEYS, type AllContent, type SectionKey } from "./types";

export type ContentMode = "published" | "draft";

export async function getContent(mode: ContentMode = "published"): Promise<AllContent> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("sections")
      .select("key, published, draft")
      .in("key", SECTION_KEYS as unknown as string[]);

    if (error || !data) return defaults;

    const out: AllContent = { ...defaults };
    for (const row of data) {
      const key = row.key as SectionKey;
      const value = mode === "draft" ? (row.draft ?? row.published) : row.published;
      if (value) {
        // Shallow merge so partially-saved drafts still fall back to published/defaults per field
        (out as Record<string, unknown>)[key] = { ...((defaults as Record<string, unknown>)[key] as object), ...(value as object) };
      }
    }
    return out;
  } catch {
    return defaults;
  }
}

export async function getSection<K extends SectionKey>(
  key: K,
  mode: ContentMode = "published",
): Promise<AllContent[K]> {
  const all = await getContent(mode);
  return all[key];
}
