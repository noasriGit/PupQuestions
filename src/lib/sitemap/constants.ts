/** Canonical HTML sitemap route. */
export const HTML_SITEMAP_PATH = "/sitemap";

/** Routes excluded from the HTML sitemap and their exclusion reasons. */
export const SITEMAP_EXCLUDED_ROUTES: ReadonlyArray<{
  path: string;
  reason: string;
}> = [
  { path: "/search", reason: "noindex search results page" },
  { path: "/ads.txt", reason: "non-HTML utility route" },
];

export const SITEMAP_RECENT_ENTRY_LIMIT = 15;

/** Minimum article count before rendering an A–Z index. */
export const SITEMAP_AZ_MIN_ENTRIES = 20;

/** Entries per paginated category page when pagination is enabled. */
export const SITEMAP_CATEGORY_PAGE_SIZE = 75;
