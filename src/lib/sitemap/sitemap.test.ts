import { describe, expect, it } from "vitest";

import { buildSitemapRecords } from "@/lib/sitemap/entries";
import {
  getAlphabetJumpLetters,
  groupRecordsAlphabetically,
  shouldRenderAlphabeticalIndex,
} from "@/lib/sitemap/alphabetical";
import { getFeaturedSitemapRecords } from "@/lib/sitemap/featured";
import { groupRecordsByCategory } from "@/lib/sitemap/groups";
import { getRecentSitemapRecords } from "@/lib/sitemap/recent";
import {
  assertValidSitemapRecords,
  validateSitemapRecords,
} from "@/lib/sitemap/validate";

describe("buildSitemapRecords", () => {
  it("includes homepage, hubs, articles, trust pages, and the HTML sitemap", () => {
    const records = buildSitemapRecords();
    const contentTypes = new Set(records.map((record) => record.contentType));

    expect(contentTypes.has("homepage")).toBe(true);
    expect(contentTypes.has("hub")).toBe(true);
    expect(contentTypes.has("article")).toBe(true);
    expect(contentTypes.has("trust")).toBe(true);
    expect(contentTypes.has("sitemap")).toBe(true);
    expect(records.some((record) => record.url === "/sitemap")).toBe(true);
  });
});

describe("validateSitemapRecords", () => {
  it("passes for the live content registry", () => {
    const result = assertValidSitemapRecords();
    expect(result.valid).toBe(true);
    expect(result.entryCount).toBeGreaterThan(70);
    expect(result.issues).toHaveLength(0);
  });

  it("detects duplicate URLs", () => {
    const records = buildSitemapRecords();
    const duplicated = [
      ...records,
      {
        ...records[0],
        id: "duplicate-test",
      },
    ];

    const result = validateSitemapRecords(duplicated);
    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.code === "duplicate-url")).toBe(
      true,
    );
  });

  it("detects trailing slashes", () => {
    const records = buildSitemapRecords();
    const invalid = records.map((record, index) =>
      index === 0 ? { ...record, url: "/sitemap/" } : record,
    );

    const result = validateSitemapRecords(invalid);
    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.code === "trailing-slash")).toBe(
      true,
    );
  });
});

describe("sitemap grouping helpers", () => {
  const records = buildSitemapRecords();

  it("groups articles into non-empty category sections", () => {
    const groups = groupRecordsByCategory(records);
    expect(groups.length).toBeGreaterThan(0);
    expect(groups.every((group) => group.entries.length > 0)).toBe(true);
    expect(groups.every((group) => group.hubUrl.startsWith("/"))).toBe(true);
  });

  it("returns featured hubs and highlighted articles", () => {
    const featured = getFeaturedSitemapRecords(records);
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.some((entry) => entry.contentType === "hub")).toBe(true);
    expect(featured.some((entry) => entry.contentType === "article")).toBe(true);
  });

  it("returns recent articles sorted by updated date", () => {
    const recent = getRecentSitemapRecords(records, 5);
    expect(recent).toHaveLength(5);

    for (let index = 0; index < recent.length - 1; index += 1) {
      const left = new Date(recent[index].updatedDate!).getTime();
      const right = new Date(recent[index + 1].updatedDate!).getTime();
      expect(left).toBeGreaterThanOrEqual(right);
    }
  });

  it("builds an alphabetical article index with jump letters", () => {
    const articleCount = records.filter(
      (record) => record.contentType === "article",
    ).length;

    expect(shouldRenderAlphabeticalIndex(articleCount)).toBe(true);

    const groups = groupRecordsAlphabetically(records);
    const letters = getAlphabetJumpLetters(groups);

    expect(groups.length).toBeGreaterThan(0);
    expect(letters.length).toBe(groups.length);
    expect(
      groups.reduce((total, group) => total + group.entries.length, 0),
    ).toBe(articleCount);
  });
});
