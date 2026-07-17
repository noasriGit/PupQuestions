import type { SitemapRecord } from "@/types/sitemap";

export function getFeaturedSitemapRecords(
  records: SitemapRecord[],
): SitemapRecord[] {
  const featured = records.filter((record) => record.featured);

  const priority = (record: SitemapRecord): number => {
    switch (record.contentType) {
      case "homepage":
        return 0;
      case "hub":
        return 1;
      case "article":
        return 2;
      default:
        return 3;
    }
  };

  return [...featured].sort((left, right) => {
    const priorityDiff = priority(left) - priority(right);
    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return left.title.localeCompare(right.title, undefined, {
      sensitivity: "base",
    });
  });
}
