import type { ContentCategory } from "@/types/content";

export type SitemapContentType =
  | "homepage"
  | "hub"
  | "article"
  | "trust"
  | "sitemap";

export type SitemapRecord = {
  id: string;
  title: string;
  url: string;
  description?: string;
  contentType: SitemapContentType;
  category?: ContentCategory;
  categoryTitle?: string;
  updatedDate?: string;
  featured?: boolean;
  parentUrl?: string;
  sortPriority?: number;
};

export type SitemapCategoryGroup = {
  category: ContentCategory;
  title: string;
  description: string;
  hubUrl: string;
  entries: SitemapRecord[];
};

export type SitemapAlphabetGroup = {
  letter: string;
  entries: SitemapRecord[];
};

export type SitemapValidationIssue = {
  code: string;
  message: string;
  recordId?: string;
  url?: string;
};

export type SitemapValidationResult = {
  valid: boolean;
  entryCount: number;
  issues: SitemapValidationIssue[];
  excludedCounts: Record<string, number>;
};
