import { useId } from "react";

import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { cn } from "@/lib/cn";
import type { ProductEntry } from "@/types/content";

type ProductCategoryBadgeProps = {
  category: string;
  className?: string;
};

export function ProductCategoryBadge({ category, className }: ProductCategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-900",
        className,
      )}
    >
      {category}
    </span>
  );
}

type ProductEntryCardProps = {
  entry: ProductEntry;
};

export function ProductEntryCard({ entry }: ProductEntryCardProps) {
  const watchForTitleId = useId();

  return (
    <Card padding="md" variant="default" className="h-full">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="text-base font-semibold text-stone-900">{entry.name}</h3>
        {entry.category ? (
          <span className="text-xs font-medium text-stone-600">{entry.category}</span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-stone-700">{entry.summary}</p>
      {entry.bestFor && entry.bestFor.length > 0 ? (
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-600">
            Best for
          </p>
          <ul className="mt-1.5 space-y-1 text-sm text-stone-700">
            {entry.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {entry.watchFor && entry.watchFor.length > 0 ? (
        <div
          className="mt-3 rounded-lg border border-amber-100 bg-amber-50/50 p-3"
          role="note"
          aria-labelledby={watchForTitleId}
        >
          <p id={watchForTitleId} className="text-xs font-semibold uppercase tracking-wide text-amber-900">
            Watch for
          </p>
          <ul className="mt-1.5 space-y-1 text-sm text-amber-950">
            {entry.watchFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </Card>
  );
}

type ProductEntryGridProps = {
  entries: ProductEntry[];
  className?: string;
};

export function ProductEntryGrid({ entries, className }: ProductEntryGridProps) {
  return (
    <CardGrid columns={2} className={className}>
      {entries.map((entry) => (
        <li key={entry.name}>
          <ProductEntryCard entry={entry} />
        </li>
      ))}
    </CardGrid>
  );
}

export {
  ArticleBlockContent,
  ArticleSection,
} from "@/components/articles/shared/ArticleContentBlocks";
