import { JsonLd } from "@/components/seo/JsonLd";
import { buildHubSchema } from "@/lib/schema";
import type { ContentCategory } from "@/types/content";

type HubStructuredDataProps = {
  category: ContentCategory;
};

export function HubStructuredData({ category }: HubStructuredDataProps) {
  return <JsonLd schema={buildHubSchema(category)} />;
}
