import { getIndexableArticles } from "@/data/articles";
import { getHubConfig } from "@/data/hubs";
import { sections } from "@/data/sections";
import { staticPages } from "@/data/static-pages";
import { trustPages } from "@/data/trust-pages";
import { getArticlePath } from "@/lib/articles";
import type { Article } from "@/types/content";
import type { SitemapContentType, SitemapRecord } from "@/types/sitemap";

function articleToSitemapRecord(
  article: Article,
  options: { featured?: boolean } = {},
): SitemapRecord {
  const section = sections.find((item) => item.slug === article.category);

  return {
    id: `article:${article.category}:${article.slug}`,
    title: article.title,
    url: getArticlePath(article),
    description: article.description,
    contentType: "article",
    category: article.category,
    categoryTitle: section?.title,
    updatedDate: article.lastUpdated,
    parentUrl: section?.href,
    featured: options.featured,
    sortPriority: 20,
  };
}

function buildFeaturedArticleIds(): Set<string> {
  const featuredIds = new Set<string>();

  for (const section of sections) {
    const hub = getHubConfig(section.slug as Article["category"]);
    if (!hub) {
      continue;
    }

    for (const slug of hub.featuredSlugs) {
      featuredIds.add(`article:${section.slug}:${slug}`);
    }
  }

  return featuredIds;
}

export function buildSitemapRecords(): SitemapRecord[] {
  const featuredArticleIds = buildFeaturedArticleIds();
  const records: SitemapRecord[] = [];

  for (const page of staticPages) {
    records.push({
      id: `static:${page.id}`,
      title: page.title,
      url: page.path,
      description: page.description,
      contentType: page.id === "home" ? "homepage" : "sitemap",
      featured: page.featured,
      sortPriority: page.sortPriority,
    });
  }

  for (const section of sections) {
    records.push({
      id: `hub:${section.slug}`,
      title: section.title,
      url: section.href,
      description: section.description,
      contentType: "hub",
      category: section.slug as Article["category"],
      categoryTitle: section.title,
      parentUrl: "/",
      featured: true,
      sortPriority: 10,
    });
  }

  for (const article of getIndexableArticles()) {
    records.push(
      articleToSitemapRecord(article, {
        featured: featuredArticleIds.has(
          `article:${article.category}:${article.slug}`,
        ),
      }),
    );
  }

  for (const page of trustPages) {
    records.push({
      id: `trust:${page.path.slice(1)}`,
      title: page.title,
      url: page.path,
      description: page.description,
      contentType: "trust",
      parentUrl: "/",
      sortPriority: 80,
    });
  }

  return records;
}

export function getSitemapRecordContentTypes(): SitemapContentType[] {
  return ["homepage", "hub", "article", "trust", "sitemap"];
}
