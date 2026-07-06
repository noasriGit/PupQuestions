import type { MetadataRoute } from "next";

import { sections } from "@/data/sections";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionEntries = sections.map((section) => ({
    url: `${SITE_URL}${section.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sectionEntries,
  ];
}
