import { JsonLd } from "@/components/seo/JsonLd";
import { buildArticleSchema } from "@/lib/schema";
import type { Article } from "@/types/content";

type ArticleStructuredDataProps = {
  article: Article;
};

export function ArticleStructuredData({ article }: ArticleStructuredDataProps) {
  return <JsonLd schema={buildArticleSchema(article)} />;
}
