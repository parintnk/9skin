import { getContent } from "@/lib/content/get";
import LandingClient from "./_landing/LandingClient";

export const revalidate = 60;
export const dynamic = "force-static";

export default async function Page() {
  const content = await getContent("published");
  return <LandingClient content={content} previewMode={false} />;
}
