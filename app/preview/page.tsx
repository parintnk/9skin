import { getContent } from "@/lib/content/get";
import LandingClient from "../_landing/LandingClient";

export const dynamic = "force-dynamic";

export default async function PreviewPage() {
  const content = await getContent("draft");
  return <LandingClient content={content} previewMode={true} />;
}
