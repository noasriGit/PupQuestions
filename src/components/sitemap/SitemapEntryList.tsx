import Link from "next/link";

import { cn } from "@/lib/cn";
import { formatLastUpdated } from "@/lib/articles";
import type { SitemapRecord } from "@/types/sitemap";

type SitemapEntryListProps = {
  entries: SitemapRecord[];
  showDescription?: boolean;
  showCategory?: boolean;
  showUpdatedDate?: boolean;
  className?: string;
  listClassName?: string;
};

export function SitemapEntryList({
  entries,
  showDescription = false,
  showCategory = false,
  showUpdatedDate = false,
  className,
  listClassName,
}: SitemapEntryListProps) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <ul className={cn("space-y-3", listClassName, className)}>
      {entries.map((entry) => (
        <li key={entry.id}>
          <article>
            <h3 className="text-base font-semibold text-stone-900">
              <Link
                href={entry.url}
                className="rounded-sm transition hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                {entry.title}
              </Link>
            </h3>
            {showCategory && entry.categoryTitle ? (
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-700">
                {entry.categoryTitle}
              </p>
            ) : null}
            {showDescription && entry.description ? (
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                {entry.description}
              </p>
            ) : null}
            {showUpdatedDate && entry.updatedDate ? (
              <p className="mt-1 text-xs text-stone-500">
                Updated {formatLastUpdated(entry.updatedDate)}
              </p>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}
