import type { Metadata } from "next";

import { SitemapAlphabeticalIndex } from "@/components/sitemap/SitemapAlphabeticalIndex";
import { SitemapCategorySection } from "@/components/sitemap/SitemapCategorySection";
import { SitemapEntryList } from "@/components/sitemap/SitemapEntryList";
import { SitemapFeaturedSection } from "@/components/sitemap/SitemapFeaturedSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HTML_SITEMAP_PATH } from "@/lib/sitemap/constants";
import {
  buildSitemapRecords,
  getAlphabetJumpLetters,
  getFeaturedSitemapRecords,
  getRecentSitemapRecords,
  getTrustRecords,
  groupRecordsAlphabetically,
  groupRecordsByCategory,
  shouldRenderAlphabeticalIndex,
  assertValidSitemapRecords,
} from "@/lib/sitemap";
import { createPageMetadata } from "@/lib/metadata";
import { buildSitemapPageSchema } from "@/lib/schema";

const SITEMAP_DESCRIPTION =
  "Browse every published PupQuestions page by topic, including dog care guides, category hubs, and site information.";

export const metadata: Metadata = createPageMetadata({
  title: "Sitemap",
  description: SITEMAP_DESCRIPTION,
  path: HTML_SITEMAP_PATH,
});

export default function HtmlSitemapPage() {
  const records = buildSitemapRecords();
  assertValidSitemapRecords(records);

  const featuredEntries = getFeaturedSitemapRecords(records);
  const recentEntries = getRecentSitemapRecords(records);
  const categoryGroups = groupRecordsByCategory(records);
  const trustEntries = getTrustRecords(records);
  const alphabeticalGroups = groupRecordsAlphabetically(records);
  const jumpLetters = getAlphabetJumpLetters(alphabeticalGroups);
  const showAlphabeticalIndex = shouldRenderAlphabeticalIndex(
    records.filter((record) => record.contentType === "article").length,
  );

  return (
    <>
      <JsonLd schema={buildSitemapPageSchema(records)} />
      <Container className="py-12 sm:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Sitemap" },
          ]}
          className="mb-6"
        />

        <SectionHeading
          as="h1"
          eyebrow="Site map"
          title="Browse all PupQuestions pages"
          description={SITEMAP_DESCRIPTION}
        />

        <div className="space-y-10">
          <SitemapFeaturedSection entries={featuredEntries} />

          <section aria-labelledby="sitemap-topics-heading">
            <SectionHeading
              as="h2"
              id="sitemap-topics-heading"
              title="Topics"
              description="Each category hub links to its published guides."
            />
            <div className="space-y-6">
              {categoryGroups.map((group) => (
                <SitemapCategorySection key={group.category} group={group} />
              ))}
            </div>
          </section>

          {recentEntries.length > 0 ? (
            <section aria-labelledby="sitemap-recent-heading">
              <Card padding="lg">
                <h2
                  id="sitemap-recent-heading"
                  className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl"
                >
                  Recently updated guides
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
                  The latest published guide updates across all topics.
                </p>
                <SitemapEntryList
                  entries={recentEntries}
                  showCategory
                  showUpdatedDate
                  className="mt-6 border-t border-stone-200 pt-6"
                  listClassName="grid gap-4 sm:grid-cols-2"
                />
              </Card>
            </section>
          ) : null}

          {trustEntries.length > 0 ? (
            <section aria-labelledby="sitemap-trust-heading">
              <Card padding="lg">
                <h2
                  id="sitemap-trust-heading"
                  className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl"
                >
                  About PupQuestions
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
                  Editorial, contact, privacy, and accessibility information.
                </p>
                <SitemapEntryList
                  entries={trustEntries}
                  showDescription
                  className="mt-6 border-t border-stone-200 pt-6"
                />
              </Card>
            </section>
          ) : null}

          {showAlphabeticalIndex ? (
            <SitemapAlphabeticalIndex
              groups={alphabeticalGroups}
              jumpLetters={jumpLetters}
            />
          ) : null}
        </div>
      </Container>
    </>
  );
}
