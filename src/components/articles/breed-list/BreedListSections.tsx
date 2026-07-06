import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { BreedEntry } from "@/types/content";

type BreedTopicBadgeProps = {
  topic: string;
  className?: string;
};

export function BreedTopicBadge({ topic, className }: BreedTopicBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-900",
        className,
      )}
    >
      {topic}
    </span>
  );
}

type BreedEntryCardProps = {
  entry: BreedEntry;
};

function BreedDetailList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
        {label}
      </p>
      <ul className="mt-1.5 space-y-1 text-sm text-stone-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function BreedEntryCard({ entry }: BreedEntryCardProps) {
  return (
    <Card padding="md" variant="muted" className="h-full">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {entry.rank ? (
          <span className="text-sm font-bold text-teal-700">#{entry.rank}</span>
        ) : null}
        <h3 className="text-lg font-semibold text-stone-900">{entry.name}</h3>
        {entry.group ? (
          <span className="text-xs font-medium text-stone-500">{entry.group}</span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-stone-700">{entry.summary}</p>
      {(entry.pros && entry.pros.length > 0) ||
      (entry.cons && entry.cons.length > 0) ||
      (entry.bestFor && entry.bestFor.length > 0) ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entry.pros && entry.pros.length > 0 ? (
            <BreedDetailList label="Pros" items={entry.pros} />
          ) : null}
          {entry.cons && entry.cons.length > 0 ? (
            <BreedDetailList label="Cons" items={entry.cons} />
          ) : null}
          {entry.bestFor && entry.bestFor.length > 0 ? (
            <BreedDetailList label="Best for" items={entry.bestFor} />
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}

type BreedEntryListProps = {
  entries: BreedEntry[];
  className?: string;
};

export function BreedEntryList({ entries, className }: BreedEntryListProps) {
  return (
    <ol className={cn("grid gap-5 sm:gap-6", className)}>
      {entries.map((entry) => (
        <li key={entry.name}>
          <BreedEntryCard entry={entry} />
        </li>
      ))}
    </ol>
  );
}

export {
  ArticleBlockContent,
  ArticleSection,
} from "@/components/articles/shared/ArticleContentBlocks";
