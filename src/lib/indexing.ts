import type { Article } from "@/types/content";

/**
 * Whether an article should be indexed by search engines and included in the sitemap.
 * Draft articles and articles with explicit noindex are excluded.
 */
export function isArticleIndexable(article: Article): boolean {
  return article.status === "published" && article.noindex !== true;
}
