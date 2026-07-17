import { articles } from "@/data/articles";
import { SITEMAP_EXCLUDED_ROUTES } from "@/lib/sitemap/constants";
import { buildSitemapRecords } from "@/lib/sitemap/entries";
import { groupRecordsByCategory } from "@/lib/sitemap/groups";
import { isArticleIndexable } from "@/lib/indexing";
import type {
  SitemapRecord,
  SitemapValidationIssue,
  SitemapValidationResult,
} from "@/types/sitemap";

function isValidInternalUrl(url: string): boolean {
  return url.startsWith("/") && !url.includes("?") && !url.includes("#");
}

function hasTrailingSlash(url: string): boolean {
  return url.length > 1 && url.endsWith("/");
}

export function validateSitemapRecords(
  records: SitemapRecord[] = buildSitemapRecords(),
): SitemapValidationResult {
  const issues: SitemapValidationIssue[] = [];
  const seenIds = new Map<string, string>();
  const seenUrls = new Map<string, string>();

  for (const record of records) {
    if (!record.id.trim()) {
      issues.push({
        code: "missing-id",
        message: "Sitemap record is missing an ID.",
        url: record.url,
      });
    } else if (seenIds.has(record.id)) {
      issues.push({
        code: "duplicate-id",
        message: `Duplicate sitemap ID "${record.id}".`,
        recordId: record.id,
        url: record.url,
      });
    } else {
      seenIds.set(record.id, record.url);
    }

    if (!record.title.trim()) {
      issues.push({
        code: "missing-title",
        message: "Sitemap record is missing a title.",
        recordId: record.id,
        url: record.url,
      });
    }

    if (!record.url.trim()) {
      issues.push({
        code: "missing-url",
        message: "Sitemap record is missing a URL.",
        recordId: record.id,
      });
      continue;
    }

    if (!isValidInternalUrl(record.url)) {
      issues.push({
        code: "invalid-url",
        message: `Invalid internal URL "${record.url}".`,
        recordId: record.id,
        url: record.url,
      });
    }

    if (hasTrailingSlash(record.url)) {
      issues.push({
        code: "trailing-slash",
        message: `URL "${record.url}" uses a trailing slash, which conflicts with site conventions.`,
        recordId: record.id,
        url: record.url,
      });
    }

    if (seenUrls.has(record.url)) {
      issues.push({
        code: "duplicate-url",
        message: `Duplicate sitemap URL "${record.url}".`,
        recordId: record.id,
        url: record.url,
      });
    } else {
      seenUrls.set(record.url, record.id);
    }

    if (record.contentType === "article" && !record.category) {
      issues.push({
        code: "missing-category",
        message: `Article sitemap record "${record.id}" is missing a category.`,
        recordId: record.id,
        url: record.url,
      });
    }
  }

  for (const group of groupRecordsByCategory(records)) {
    if (group.entries.length === 0) {
      issues.push({
        code: "empty-category",
        message: `Category group "${group.category}" has no entries.`,
      });
    }
  }

  for (const excluded of SITEMAP_EXCLUDED_ROUTES) {
    if (seenUrls.has(excluded.path)) {
      issues.push({
        code: "excluded-route-leak",
        message: `Excluded route "${excluded.path}" (${excluded.reason}) appears in the sitemap.`,
        url: excluded.path,
      });
    }
  }

  const excludedCounts = {
    draftArticles: articles.filter((article) => article.status === "draft").length,
    noindexArticles: articles.filter((article) => article.noindex === true).length,
    nonIndexableArticles: articles.filter((article) => !isArticleIndexable(article))
      .length,
    excludedUtilityRoutes: SITEMAP_EXCLUDED_ROUTES.length,
    searchPage: 1,
  };

  return {
    valid: issues.length === 0,
    entryCount: records.length,
    issues,
    excludedCounts,
  };
}

export function assertValidSitemapRecords(
  records: SitemapRecord[] = buildSitemapRecords(),
): SitemapValidationResult {
  const result = validateSitemapRecords(records);

  if (!result.valid) {
    const summary = result.issues
      .map((issue) => `- [${issue.code}] ${issue.message}`)
      .join("\n");
    throw new Error(`HTML sitemap validation failed:\n${summary}`);
  }

  return result;
}
