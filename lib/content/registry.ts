import type { SectionKey } from "./types";
import { SECTION_KEYS, SECTION_LABELS } from "./types";

export { SECTION_KEYS, SECTION_LABELS };
export type { SectionKey };

// Sections that get a custom per-section editor. All others fall back to a
// JSON tree editor generated from the zod schema.
export const SECTION_HAS_CUSTOM_EDITOR: Partial<Record<SectionKey, boolean>> = {
  s1_hero: true,
};
