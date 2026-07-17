import { SitemapEntryList } from "@/components/sitemap/SitemapEntryList";
import { Card } from "@/components/ui/Card";
import type { SitemapAlphabetGroup } from "@/types/sitemap";

type SitemapAlphabeticalIndexProps = {
  groups: SitemapAlphabetGroup[];
  jumpLetters: string[];
};

export function SitemapAlphabeticalIndex({
  groups,
  jumpLetters,
}: SitemapAlphabeticalIndexProps) {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="sitemap-az-heading">
      <Card padding="lg">
        <h2
          id="sitemap-az-heading"
          className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl"
        >
          A–Z guide index
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Jump to published guides alphabetically by title.
        </p>

        <nav aria-label="Alphabetical jump links" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {jumpLetters.map((letter) => (
              <li key={letter}>
                <a
                  href={`#sitemap-letter-${letter}`}
                  className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-stone-200 bg-white px-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                >
                  {letter}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 space-y-8">
          {groups.map((group) => (
            <section
              key={group.letter}
              id={`sitemap-letter-${group.letter}`}
              aria-labelledby={`sitemap-letter-heading-${group.letter}`}
              className="scroll-mt-24 border-t border-stone-200 pt-8 first:border-t-0 first:pt-0"
            >
              <h3
                id={`sitemap-letter-heading-${group.letter}`}
                className="text-lg font-bold text-stone-900"
              >
                {group.letter}
              </h3>
              <SitemapEntryList
                entries={group.entries}
                showCategory
                className="mt-4"
                listClassName="grid gap-3 sm:grid-cols-2"
              />
            </section>
          ))}
        </div>
      </Card>
    </section>
  );
}
