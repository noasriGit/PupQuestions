import {
  ArticleBlockContent,
  ArticleSection,
  BehaviorTopicBadge,
  NormalVsConcerningSection,
} from "@/components/articles/behavior/BehaviorSections";
import { EditorialNoteAside } from "@/components/articles/shared/ArticleContentBlocks";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleHeader } from "@/components/ui/ArticleHeader";
import { Container } from "@/components/ui/Container";
import { FaqSection } from "@/components/ui/FaqSection";
import { QuickAnswerBox } from "@/components/ui/QuickAnswerBox";
import { SourcesSection } from "@/components/ui/SourcesSection";
import { TrustNote } from "@/components/ui/TrustNote";
import { ArticleRelatedContent } from "@/components/articles/ArticleRelatedContent";
import { getSectionBySlug } from "@/data/sections";
import {
  formatLastUpdated,
  formatReadingTime,
} from "@/lib/articles";
import type { BehaviorArticle } from "@/types/content";

type BehaviorArticlePageProps = {
  article: BehaviorArticle;
};

export function BehaviorArticlePage({ article }: BehaviorArticlePageProps) {
  const section = getSectionBySlug(article.category)!;

  return (
    <>
      <ArticleHeader
        headingId="article-title"
        category={article.category}
        title={article.title}
        description={article.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: section.title, href: section.href },
          { label: article.title },
        ]}
        meta={
          <>
            <BehaviorTopicBadge topic={article.questionTopic} />
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

      <Container size="narrow" as="article" aria-labelledby="article-title">
        <QuickAnswerBox variant="neutral" label="Quick answer" className="mt-8">
          {article.quickAnswer}
        </QuickAnswerBox>

        <ArticleBody>
          <p>{article.intro}</p>

          <ArticleSection heading={article.questionTopic}>
            <ArticleBlockContent {...article.overview} />
          </ArticleSection>

          <ArticleSection heading="Common reasons">
            <ArticleBlockContent {...article.commonReasons} />
          </ArticleSection>

          <NormalVsConcerningSection block={article.normalVsConcerning} />

          <ArticleSection heading="What owners can do">
            <ArticleBlockContent {...article.whatOwnersCanDo} />
          </ArticleSection>

          <ArticleSection heading="When to call a vet or trainer">
            <ArticleBlockContent {...article.whenToCallVetOrTrainer} />
          </ArticleSection>
        </ArticleBody>

        {article.editorialNote ? (
          <EditorialNoteAside className="mb-8">{article.editorialNote}</EditorialNoteAside>
        ) : null}

        <TrustNote title="Behavior guidance note">
          Behavior information on PupQuestions is general and educational. Dogs vary widely
          in temperament and history. Contact your veterinarian for health concerns and a
          qualified trainer for persistent or worrisome behavior patterns.
        </TrustNote>

        {article.sources && article.sources.length > 0 ? (
          <SourcesSection sources={article.sources} className="mb-10 mt-8" />
        ) : null}

        <ArticleRelatedContent
          article={article}
          relatedTitle="Related behavior questions"
          className="mb-12 mt-8"
        />

        {article.faqs.length > 0 ? (
          <FaqSection items={article.faqs} className="mb-12" />
        ) : null}
      </Container>
    </>
  );
}
