import { getContent } from "@/lib/content/get";
import LandingClient from "./_landing/LandingClient";

export const revalidate = 60;

export default async function Page({ searchParams }: { searchParams: Promise<{ preview?: string }> }) {
  const sp = await searchParams;
  const previewMode = sp?.preview === "1";
  const content = await getContent(previewMode ? "draft" : "published");
  return <LandingClient content={content} previewMode={previewMode} />;
}
