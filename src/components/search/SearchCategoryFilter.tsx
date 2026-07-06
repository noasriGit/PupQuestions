import Link from "next/link";

import { cn } from "@/lib/cn";
import { buildSearchHref } from "@/lib/search";
import { sections } from "@/data/sections";
import type { ContentCategory } from "@/types/content";

type SearchCategoryFilterProps = {
  query: string;
  activeCategory?: ContentCategory;
  className?: string;
};

export function SearchCategoryFilter({
  query,
  activeCategory,
  className,
}: SearchCategoryFilterProps) {
  const trimmedQuery = query.trim();

  return (
    <div className={className}>
      <p className="text-sm font-medium text-stone-700">Filter by category</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          href={buildSearchHref(trimmedQuery)}
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm font-medium transition",
            !activeCategory
              ? "border-amber-300 bg-amber-50 text-amber-900"
              : "border-stone-200 bg-white text-stone-600 hover:border-amber-200 hover:text-amber-800",
          )}
          aria-current={!activeCategory ? "page" : undefined}
        >
          All topics
        </Link>
        {sections.map((section) => (
          <Link
            key={section.slug}
            href={buildSearchHref(trimmedQuery, section.slug as ContentCategory)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition",
              activeCategory === section.slug
                ? "border-amber-300 bg-amber-50 text-amber-900"
                : "border-stone-200 bg-white text-stone-600 hover:border-amber-200 hover:text-amber-800",
            )}
            aria-current={activeCategory === section.slug ? "page" : undefined}
          >
            {section.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
