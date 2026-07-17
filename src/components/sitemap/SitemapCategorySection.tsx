import Link from "next/link";

import { SitemapEntryList } from "@/components/sitemap/SitemapEntryList";
import { Card } from "@/components/ui/Card";
import type { SitemapCategoryGroup } from "@/types/sitemap";

type SitemapCategorySectionProps = {
  group: SitemapCategoryGroup;
};

export function SitemapCategorySection({ group }: SitemapCategorySectionProps) {
  return (
    <Card padding="lg" className="scroll-mt-24" aria-labelledby={`sitemap-category-${group.category}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <h2
            id={`sitemap-category-${group.category}`}
            className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl"
          >
            <Link
              href={group.hubUrl}
              className="rounded-sm transition hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              {group.title}
            </Link>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base">
            {group.description}
          </p>
        </div>
        <p className="shrink-0 text-sm font-medium text-stone-500">
          {group.entries.length}{" "}
          {group.entries.length === 1 ? "guide" : "guides"}
        </p>
      </div>

      <SitemapEntryList
        entries={group.entries}
        className="mt-6 border-t border-stone-200 pt-6"
        listClassName="grid gap-4 sm:grid-cols-2"
      />
    </Card>
  );
}
