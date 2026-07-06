import Link from "next/link";

import { HubFeaturedArticles, HubRecentArticles } from "@/components/hubs/HubArticleSections";
import { HubTopicGroups } from "@/components/hubs/HubTopicGroups";
import { HubStructuredData } from "@/components/seo/HubStructuredData";
import { ArticleHeader } from "@/components/ui/ArticleHeader";
import { Container } from "@/components/ui/Container";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { PopularDogQuestions } from "@/components/ui/PopularDogQuestions";
import { TrustNote } from "@/components/ui/TrustNote";
import { getHubConfigOrThrow } from "@/data/hubs";
import { getSectionBySlug } from "@/data/sections";
import {
  getHubArticleCount,
  getHubFeaturedArticles,
  getHubRecentArticles,
  groupHubArticlesByTopic,
} from "@/lib/hubs";
import type { ContentCategory } from "@/types/content";

type CategoryHubPageProps = {
  category: ContentCategory;
};

export function CategoryHubPage({ category }: CategoryHubPageProps) {
  const section = getSectionBySlug(category)!;
  const hub = getHubConfigOrThrow(category);
  const articleCount = getHubArticleCount(category);
  const featuredArticles = getHubFeaturedArticles(category, hub);
  const recentArticles = getHubRecentArticles(category).filter(
    (article) => !hub.featuredSlugs.includes(article.slug),
  );
  const topicGroups = groupHubArticlesByTopic(category, hub);

  return (
    <>
      <HubStructuredData category={category} />
      <ArticleHeader
        title={section.title}
        description={hub.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: section.title },
        ]}
        meta={
          <>
            <span>Category hub</span>
            <span aria-hidden="true">·</span>
            <span>
              {articleCount === 0
                ? "Articles coming soon"
                : `${articleCount} published ${articleCount === 1 ? "guide" : "guides"}`}
            </span>
          </>
        }
      />

      <Container className="py-10 sm:py-12">
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-stone-600 sm:text-lg">
          {hub.overview}
        </p>

        {hub.trustNote ? (
          <TrustNote title={hub.trustNote.title} className="mb-10">
            {hub.trustNote.content}
          </TrustNote>
        ) : null}

        {hub.showHealthDisclaimer ? (
          <DisclaimerBox className="mb-10">
            PupQuestions provides general educational information only. It is
            not a substitute for professional veterinary advice, diagnosis, or
            treatment. Always contact your veterinarian for health concerns
            specific to your dog.
          </DisclaimerBox>
        ) : null}

        <div className="space-y-14 sm:space-y-16">
          <HubFeaturedArticles
            articles={featuredArticles}
            categoryTitle={section.title}
          />

          {recentArticles.length > 0 || articleCount === 0 ? (
            <HubRecentArticles
              articles={recentArticles}
              categoryTitle={section.title}
            />
          ) : null}

          <HubTopicGroups groups={topicGroups} />
        </div>

        <div className="mt-14 border-t border-stone-200 pt-8 sm:mt-16">
          <PopularDogQuestions title="Popular dog questions" />
          <Link
            href="/"
            className="mt-8 inline-block text-sm font-medium text-amber-700 hover:text-amber-800"
          >
            ← Back to home
          </Link>
        </div>
      </Container>
    </>
  );
}
