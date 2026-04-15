const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

/**
 * Resolve an image reference to a usable URL.
 * - Absolute URLs (http/https) → returned as-is
 * - Paths starting with "/" → returned as-is (public/ assets)
 * - Anything else → treated as an object path in the "content" storage bucket
 */
export function img(path: string | null | undefined): string {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/")) return path;
  return `${SUPABASE_URL}/storage/v1/object/public/content/${path}`;
}
