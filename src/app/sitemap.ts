import type { MetadataRoute } from "next";

import { getAllArticles } from "@/data/articles";
import { sections } from "@/data/sections";
import { getArticlePath } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionEntries = sections.map((section) => ({
    url: `${SITE_URL}${section.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articleEntries = getAllArticles().map((article) => ({
    url: `${SITE_URL}${getArticlePath(article)}`,
    lastModified: new Date(article.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sectionEntries,
    ...articleEntries,
  ];
}
