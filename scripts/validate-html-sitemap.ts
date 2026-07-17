import { assertValidSitemapRecords } from "@/lib/sitemap/validate";

const result = assertValidSitemapRecords();

console.log(
  `HTML sitemap validation passed (${result.entryCount} indexable entries).`,
);
