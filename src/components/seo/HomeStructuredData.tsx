import { JsonLd } from "@/components/seo/JsonLd";
import { buildHomeSchema } from "@/lib/schema";

export function HomeStructuredData() {
  return <JsonLd schema={buildHomeSchema()} />;
}
