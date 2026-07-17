import { SITEMAP_RECENT_ENTRY_LIMIT } from "@/lib/sitemap/constants";
import type { SitemapRecord } from "@/types/sitemap";

export function getRecentSitemapRecords(
  records: SitemapRecord[],
  limit = SITEMAP_RECENT_ENTRY_LIMIT,
): SitemapRecord[] {
  return records
    .filter(
      (record) => record.contentType === "article" && Boolean(record.updatedDate),
    )
    .sort((left, right) => {
      const leftTime = new Date(left.updatedDate!).getTime();
      const rightTime = new Date(right.updatedDate!).getTime();
      return rightTime - leftTime;
    })
    .slice(0, limit);
}
