import {
  ArticleBlockContent,
  ArticleSection,
  BreedEntryList,
  BreedTopicBadge,
} from "@/components/articles/breed-list/BreedListSections";
import { EditorialNoteAside } from "@/components/articles/shared/ArticleContentBlocks";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleHeader } from "@/components/ui/ArticleHeader";
import { Container } from "@/components/ui/Container";
import { FaqSection } from "@/components/ui/FaqSection";
import { QuickAnswerBox } from "@/components/ui/QuickAnswerBox";
import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import { SourcesSection } from "@/components/ui/SourcesSection";
import { TrustNote } from "@/components/ui/TrustNote";
import { getSectionBySlug } from "@/data/sections";
import {
  formatLastUpdated,
  formatReadingTime,
  resolveRelatedQuestions,
} from "@/lib/articles";
import type { BreedListArticle } from "@/types/content";

type BreedListArticlePageProps = {
  article: BreedListArticle;
};

export function BreedListArticlePage({ article }: BreedListArticlePageProps) {
  const section = getSectionBySlug(article.category)!;
  const relatedQuestions = resolveRelatedQuestions(article.relatedQuestions);

  return (
    <>
      <ArticleHeader
        title={article.title}
        description={article.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: section.title, href: section.href },
          { label: article.title },
        ]}
        meta={
          <>
            <BreedTopicBadge topic={article.listTopic} />
            <span aria-hidden="true">·</span>
            <span>{formatReadingTime(article.readingTime)}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {formatLastUpdated(article.lastUpdated)}</span>
            {article.subcategory ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{article.subcategory}</span>
              </>
            ) : null}
          </>
        }
      />

      <Container size="narrow">
        <QuickAnswerBox variant="neutral" label="Quick summary" className="mt-8">
          {article.quickAnswer}
        </QuickAnswerBox>

        <ArticleBody>
          <p>{article.intro}</p>

          <ArticleSection heading="Selection criteria">
            <ArticleBlockContent {...article.selectionCriteria} />
          </ArticleSection>

          <ArticleSection heading="Breeds to consider">
            <BreedEntryList entries={article.breedEntries} className="mt-4" />
          </ArticleSection>

          <ArticleSection heading="Important caveats">
            <ArticleBlockContent {...article.importantCaveats} />
          </ArticleSection>
        </ArticleBody>

        {article.editorialNote ? (
          <EditorialNoteAside className="mb-8">{article.editorialNote}</EditorialNoteAside>
        ) : null}

        <TrustNote title="Every dog is an individual">
          Breed tendencies are starting points, not guarantees. Temperament, training,
          socialization, health, and daily care shape behavior far more than breed labels
          alone. Meet individual dogs and ask about their history before deciding.
        </TrustNote>

        {article.sources && article.sources.length > 0 ? (
          <SourcesSection sources={article.sources} className="mb-10 mt-8" />
        ) : null}

        {relatedQuestions.length > 0 ? (
          <RelatedQuestions
            questions={relatedQuestions}
            title="Related breed questions"
            className="mb-12 mt-8"
          />
        ) : null}

        {article.faqs.length > 0 ? (
          <FaqSection items={article.faqs} className="mb-12" />
        ) : null}
      </Container>
    </>
  );
}
