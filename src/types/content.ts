/**
 * Placeholder types for future content models (Phase 1+).
 */

export type ContentStatus = "draft" | "published";

export type BaseContent = {
  slug: string;
  title: string;
  description: string;
  status: ContentStatus;
  updatedAt: string;
};
