import Link from "next/link";

import { SearchResultCard } from "@/components/search/SearchResultCard";
import { CardGrid } from "@/components/ui/CardGrid";
import type { SearchResult } from "@/lib/search";
import { buildSearchHref } from "@/lib/search";
import { sections } from "@/data/sections";
import type { ContentCategory } from "@/types/content";

type SearchResultsProps = {
  query: string;
  category?: ContentCategory;
  results: SearchResult[];
};

export function SearchResults({ query, category, results }: SearchResultsProps) {
  const trimmedQuery = query.trim();
  const activeSection = category
    ? sections.find((section) => section.slug === category)
    : undefined;

  if (!trimmedQuery && !category) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-10 text-center">
        <h2 className="text-lg font-semibold text-stone-900">
          Search published dog guides
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
          Enter a question above to search titles, quick answers, categories,
          tags, and keywords from our published guides.
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white px-6 py-10 text-center">
        <h2 className="text-lg font-semibold text-stone-900">No results found</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
          {trimmedQuery ? (
            <>
              We couldn&apos;t find published guides matching{" "}
              <span className="font-medium text-stone-800">
                &ldquo;{trimmedQuery}&rdquo;
              </span>
              {activeSection ? (
                <>
                  {" "}
                  in{" "}
                  <span className="font-medium text-stone-800">
                    {activeSection.title}
                  </span>
                </>
              ) : null}
              . Try a shorter phrase, a different keyword, or browse a category
              below.
            </>
          ) : (
            <>
              No published guides are available in{" "}
              <span className="font-medium text-stone-800">
                {activeSection?.title}
              </span>{" "}
              yet. Try another category or search all topics.
            </>
          )}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {trimmedQuery ? (
            <Link
              href={buildSearchHref(trimmedQuery)}
              className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
            >
              Search all topics
            </Link>
          ) : null}
          <Link
            href="/"
            className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-stone-600">
        {results.length} {results.length === 1 ? "result" : "results"}
        {trimmedQuery ? (
          <>
            {" "}
            for{" "}
            <span className="font-medium text-stone-800">
              &ldquo;{trimmedQuery}&rdquo;
            </span>
          </>
        ) : null}
        {activeSection ? (
          <>
            {" "}
            in{" "}
            <span className="font-medium text-stone-800">
              {activeSection.title}
            </span>
          </>
        ) : null}
      </p>
      <CardGrid columns={2} className="mt-6">
        {results.map((result) => (
          <li key={result.href}>
            <SearchResultCard result={result} />
          </li>
        ))}
      </CardGrid>
    </div>
  );
}
