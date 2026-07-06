import Link from "next/link";

import { ArticleCard } from "@/components/hubs/ArticleCard";
import { CardGrid } from "@/components/ui/CardGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Article } from "@/types/content";

type HubFeaturedArticlesProps = {
  articles: Article[];
  categoryTitle: string;
};

export function HubFeaturedArticles({
  articles,
  categoryTitle,
}: HubFeaturedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="hub-featured-heading">
      <SectionHeading
        eyebrow="Start here"
        title="Featured questions"
        description={`Popular ${categoryTitle.toLowerCase()} guides with clear answers you can read in a few minutes.`}
      />
      <CardGrid columns={articles.length >= 3 ? 3 : 2}>
        {articles.map((article) => (
          <li key={article.slug}>
            <ArticleCard article={article} showMeta={false} />
          </li>
        ))}
      </CardGrid>
    </section>
  );
}

type HubRecentArticlesProps = {
  articles: Article[];
  categoryTitle: string;
};

export function HubRecentArticles({
  articles,
  categoryTitle,
}: HubRecentArticlesProps) {
  return (
    <section aria-labelledby="hub-recent-heading">
      <SectionHeading
        eyebrow="Latest"
        title="Recently added"
        description={
          articles.length > 0
            ? `The newest published guides in ${categoryTitle}.`
            : `No articles are published in ${categoryTitle} yet. Topic groups below show what's coming.`
        }
      />

      {articles.length > 0 ? (
        <ul className="space-y-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50/80 p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-800">
            Articles coming soon
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
            This section is set up and ready for content. Browse the planned
            topic groups below, or explore other categories while guides are
            added here.
          </p>
          <p className="mt-4">
            <Link
              href="/"
              className="text-sm font-medium text-amber-700 hover:text-amber-800"
            >
              Browse all categories →
            </Link>
          </p>
        </div>
      )}
    </section>
  );
}
