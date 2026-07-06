import type { Metadata } from "next";

import { SearchCategoryFilter } from "@/components/search/SearchCategoryFilter";
import { SearchResults } from "@/components/search/SearchResults";
import { Container } from "@/components/ui/Container";
import { SearchForm } from "@/components/ui/SearchForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { searchArticles } from "@/lib/search";
import type { ContentCategory } from "@/types/content";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

const VALID_CATEGORIES = new Set<ContentCategory>([
  "can-dogs-eat",
  "dog-health",
  "dog-behavior",
  "dog-training",
  "dog-breeds",
  "puppy-care",
  "dog-products",
  "dog-grooming",
]);

function parseCategory(value?: string): ContentCategory | undefined {
  if (!value || !VALID_CATEGORIES.has(value as ContentCategory)) {
    return undefined;
  }

  return value as ContentCategory;
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";

  return createPageMetadata({
    title: query ? `Search: ${query}` : "Search",
    description: query
      ? `Search PupQuestions for published dog guides matching “${query}”.`
      : "Search published PupQuestions guides on nutrition, health, behavior, training, breeds, and more.",
    path: "/search",
    noindex: true,
  });
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const category = parseCategory(params.category);
  const results = searchArticles({ query, category });

  return (
    <section>
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Search"
            title="Find answers fast"
            description="Search published PupQuestions guides by question, topic, tag, or keyword."
          />
          <SearchForm
            key={`${query}-${category ?? "all"}`}
            defaultQuery={query}
            defaultCategory={category}
            className="mx-auto mt-8 max-w-xl text-left"
            showHint
          />
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <SearchCategoryFilter
            query={query}
            activeCategory={category}
            className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5"
          />
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <SearchResults query={query} category={category} results={results} />
        </div>
      </Container>
    </section>
  );
}
