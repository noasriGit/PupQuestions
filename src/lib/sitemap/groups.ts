import { sections } from "@/data/sections";
import type { ContentCategory } from "@/types/content";
import type { SitemapCategoryGroup, SitemapRecord } from "@/types/sitemap";

export function groupRecordsByCategory(
  records: SitemapRecord[],
): SitemapCategoryGroup[] {
  return sections
    .map((section) => {
      const category = section.slug as ContentCategory;
      const entries = records
        .filter(
          (record) =>
            record.contentType === "article" && record.category === category,
        )
        .sort((left, right) =>
          left.title.localeCompare(right.title, undefined, { sensitivity: "base" }),
        );

      return {
        category,
        title: section.title,
        description: section.description,
        hubUrl: section.href,
        entries,
      };
    })
    .filter((group) => group.entries.length > 0);
}

export function getTrustRecords(records: SitemapRecord[]): SitemapRecord[] {
  return records
    .filter((record) => record.contentType === "trust")
    .sort((left, right) => (left.sortPriority ?? 0) - (right.sortPriority ?? 0));
}
