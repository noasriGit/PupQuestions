import type { MetadataRoute } from "next";

import { getIndexableArticles } from "@/data/articles";
import { sections } from "@/data/sections";
import { trustPages } from "@/data/trust-pages";
import { getArticlesByCategory, getArticlePath } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";
import type { ContentCategory } from "@/types/content";

function getHubLastModified(category: ContentCategory): Date {
  const articles = getArticlesByCategory(category);

  if (articles.length === 0) {
    return new Date();
  }

  return new Date(
    Math.max(...articles.map((article) => new Date(article.lastUpdated).getTime())),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const indexableArticles = getIndexableArticles();

  const sectionEntries = sections.map((section) => ({
    url: `${SITE_URL}${section.href}`,
    lastModified: getHubLastModified(section.slug as ContentCategory),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articleEntries = indexableArticles.map((article) => ({
    url: `${SITE_URL}${getArticlePath(article)}`,
    lastModified: new Date(article.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const homepageLastModified =
    indexableArticles.length > 0
      ? new Date(
          Math.max(
            ...indexableArticles.map(
              (article) => new Date(article.lastUpdated).getTime(),
            ),
          ),
        )
      : new Date();

  const trustPageEntries = trustPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: homepageLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sectionEntries,
    ...articleEntries,
    ...trustPageEntries,
  ];
}
