import { getIndexableArticles } from "@/data/articles";
import { getSectionBySlug } from "@/data/sections";
import { getArticleHref } from "@/lib/articles";
import type { Article, ContentCategory } from "@/types/content";

export type SearchResult = {
  title: string;
  description: string;
  category: ContentCategory;
  categoryTitle: string;
  href: string;
};

export type SearchOptions = {
  query?: string;
  category?: ContentCategory;
  limit?: number;
};

function normalizeSearchText(value: string): string {
  return value.toLowerCase().trim();
}

function tokenizeQuery(query: string): string[] {
  return normalizeSearchText(query)
    .split(/\s+/)
    .filter(Boolean);
}

function getArticleSearchText(article: Article): string {
  const section = getSectionBySlug(article.category);

  return [
    article.title,
    article.description,
    article.quickAnswer,
    article.category,
    section?.title,
    article.subcategory,
    ...article.tags,
    article.primaryKeyword,
    ...article.secondaryKeywords,
  ]
    .filter(Boolean)
    .map((value) => normalizeSearchText(String(value)))
    .join(" ");
}

function articleMatchesQuery(article: Article, terms: string[]): boolean {
  if (terms.length === 0) {
    return false;
  }

  const searchText = getArticleSearchText(article);
  return terms.every((term) => searchText.includes(term));
}

function articleToSearchResult(article: Article): SearchResult {
  const section = getSectionBySlug(article.category);

  return {
    title: article.title,
    description: article.description,
    category: article.category,
    categoryTitle: section?.title ?? article.category,
    href: getArticleHref(article.category, article.slug),
  };
}

/** Search published, indexable articles from the local registry. */
export function searchArticles({
  query = "",
  category,
  limit,
}: SearchOptions = {}): SearchResult[] {
  const terms = tokenizeQuery(query);
  let results = getIndexableArticles();

  if (category) {
    results = results.filter((article) => article.category === category);
  }

  if (terms.length > 0) {
    results = results.filter((article) => articleMatchesQuery(article, terms));
  }

  results = [...results].sort((left, right) =>
    left.title.localeCompare(right.title, undefined, { sensitivity: "base" }),
  );

  if (typeof limit === "number") {
    results = results.slice(0, limit);
  }

  return results.map(articleToSearchResult);
}

export function buildSearchHref(query?: string, category?: ContentCategory): string {
  const params = new URLSearchParams();

  if (query?.trim()) {
    params.set("q", query.trim());
  }

  if (category) {
    params.set("category", category);
  }

  const queryString = params.toString();
  return queryString ? `/search?${queryString}` : "/search";
}
