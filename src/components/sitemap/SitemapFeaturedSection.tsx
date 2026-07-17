import { SitemapEntryList } from "@/components/sitemap/SitemapEntryList";
import { Card } from "@/components/ui/Card";
import type { SitemapRecord } from "@/types/sitemap";

type SitemapFeaturedSectionProps = {
  entries: SitemapRecord[];
};

export function SitemapFeaturedSection({ entries }: SitemapFeaturedSectionProps) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="sitemap-featured-heading">
      <Card padding="lg" variant="accent">
        <h2
          id="sitemap-featured-heading"
          className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl"
        >
          Start here
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Category hubs and highlighted guides that cover the most common dog owner
          questions on PupQuestions.
        </p>
        <SitemapEntryList
          entries={entries}
          showDescription
          className="mt-6 border-t border-amber-200/80 pt-6"
          listClassName="grid gap-4 sm:grid-cols-2"
        />
      </Card>
    </section>
  );
}
