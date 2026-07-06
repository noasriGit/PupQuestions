import type { ArticleSource } from "@/types/content";
import { cn } from "@/lib/cn";

type SourcesSectionProps = {
  sources: ArticleSource[];
  title?: string;
  className?: string;
};

export function SourcesSection({
  sources,
  title = "Sources & references",
  className,
}: SourcesSectionProps) {
  return (
    <section className={className} aria-labelledby="sources-section-heading">
      <h2
        id="sources-section-heading"
        className="text-xl font-bold tracking-tight text-stone-900"
      >
        {title}
      </h2>
      <ul className={cn("mt-4 space-y-3")}>
        {sources.map((source) => (
          <li
            key={`${source.title}-${source.organization ?? "source"}`}
            className="text-sm leading-relaxed text-stone-600"
          >
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amber-700 hover:text-amber-800 underline underline-offset-2"
              >
                {source.title}
              </a>
            ) : (
              <span className="font-medium text-stone-800">{source.title}</span>
            )}
            {source.organization ? (
              <span className="text-stone-500"> — {source.organization}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
