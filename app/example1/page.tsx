import { getContent } from "@/lib/content/get";
import Example1Client from "./Example1Client";

export const revalidate = 60;

export default async function Page({ searchParams }: { searchParams: Promise<{ preview?: string }> }) {
  const sp = await searchParams;
  const previewMode = sp?.preview === "1";
  const content = await getContent(previewMode ? "draft" : "published");
  return <Example1Client content={content} previewMode={previewMode} />;
}
