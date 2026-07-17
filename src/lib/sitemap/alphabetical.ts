import { SITEMAP_AZ_MIN_ENTRIES } from "@/lib/sitemap/constants";
import type { SitemapAlphabetGroup, SitemapRecord } from "@/types/sitemap";

function getAlphabeticalSortKey(title: string): string {
  return title.trim();
}

function getAlphabetLetter(title: string): string {
  const normalized = getAlphabeticalSortKey(title);
  const firstCharacter = normalized.charAt(0).toUpperCase();

  if (/[A-Z]/.test(firstCharacter)) {
    return firstCharacter;
  }

  return "#";
}

export function shouldRenderAlphabeticalIndex(entryCount: number): boolean {
  return entryCount >= SITEMAP_AZ_MIN_ENTRIES;
}

export function groupRecordsAlphabetically(
  records: SitemapRecord[],
): SitemapAlphabetGroup[] {
  const articleRecords = records
    .filter((record) => record.contentType === "article")
    .sort((left, right) =>
      getAlphabeticalSortKey(left.title).localeCompare(
        getAlphabeticalSortKey(right.title),
        undefined,
        { sensitivity: "base" },
      ),
    );

  const groups = new Map<string, SitemapRecord[]>();

  for (const record of articleRecords) {
    const letter = getAlphabetLetter(record.title);
    const existing = groups.get(letter) ?? [];
    existing.push(record);
    groups.set(letter, existing);
  }

  const letters = [...groups.keys()].sort((left, right) => {
    if (left === "#") {
      return 1;
    }
    if (right === "#") {
      return -1;
    }
    return left.localeCompare(right);
  });

  return letters.map((letter) => ({
    letter,
    entries: groups.get(letter) ?? [],
  }));
}

export function getAlphabetJumpLetters(groups: SitemapAlphabetGroup[]): string[] {
  return groups.map((group) => group.letter);
}
