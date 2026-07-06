import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleHeader } from "@/components/ui/ArticleHeader";
import { Container } from "@/components/ui/Container";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { FaqSection } from "@/components/ui/FaqSection";
import { QuickAnswerBox } from "@/components/ui/QuickAnswerBox";
import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import { SourcesSection } from "@/components/ui/SourcesSection";
import { TrustNote } from "@/components/ui/TrustNote";
import {
  EmergencyNote,
  FoodSafetyBlockContent,
  FoodSafetySection,
  SafetyStatusBadge,
} from "@/components/articles/food-safety/FoodSafetySections";
import { getSectionBySlug } from "@/data/sections";
import {
  formatLastUpdated,
  formatReadingTime,
  resolveRelatedQuestions,
} from "@/lib/articles";
import {
  getSafetyQuickAnswerLabel,
  safetyLevelToQuickAnswerVariant,
} from "@/lib/food-safety";
import type { FoodSafetyArticle } from "@/types/content";

type FoodSafetyArticlePageProps = {
  article: FoodSafetyArticle;
};

export function FoodSafetyArticlePage({ article }: FoodSafetyArticlePageProps) {
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
            <SafetyStatusBadge level={article.safetyLevel} />
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
        <QuickAnswerBox
          variant={safetyLevelToQuickAnswerVariant(article.safetyLevel)}
          label={getSafetyQuickAnswerLabel(article.safetyLevel)}
          className="mt-8"
        >
          {article.quickAnswer}
        </QuickAnswerBox>

        <ArticleBody>
          <p>{article.intro}</p>

          <FoodSafetySection heading={`Can dogs eat ${article.foodName}?`}>
            <FoodSafetyBlockContent {...article.directAnswer} />
          </FoodSafetySection>

          {article.benefits ? (
            <FoodSafetySection heading="Benefits">
              <FoodSafetyBlockContent {...article.benefits} />
            </FoodSafetySection>
          ) : null}

          <FoodSafetySection heading="Risks">
            <FoodSafetyBlockContent {...article.risks} />
          </FoodSafetySection>

          <FoodSafetySection heading="How much can dogs have?">
            <FoodSafetyBlockContent {...article.servingGuidance} />
          </FoodSafetySection>

          <FoodSafetySection heading="How to serve it safely">
            <FoodSafetyBlockContent {...article.safePreparation} />
          </FoodSafetySection>

          <FoodSafetySection heading="When to avoid it">
            <FoodSafetyBlockContent {...article.avoidIf} />
          </FoodSafetySection>

          <FoodSafetySection heading="What to do if your dog ate too much">
            <FoodSafetyBlockContent {...article.tooMuch} />
          </FoodSafetySection>

          <FoodSafetySection heading="When to call a vet">
            <FoodSafetyBlockContent {...article.whenToCallVet} />
          </FoodSafetySection>

          {article.emergencyNote ? (
            <EmergencyNote className="mt-8">{article.emergencyNote}</EmergencyNote>
          ) : null}
        </ArticleBody>

        <TrustNote className="mb-8">
          Food safety guidance on PupQuestions is general information only. Individual
          dogs may react differently based on health, size, and ingredients. When in
          doubt, ask your veterinarian before sharing human foods.
        </TrustNote>

        <DisclaimerBox className="mb-10">
          PupQuestions provides general educational information only. It is not a
          substitute for professional veterinary advice, diagnosis, or treatment.
          {article.editorialNote ? (
            <>
              {" "}
              <span className="mt-2 block text-amber-900/90">
                {article.editorialNote}
              </span>
            </>
          ) : null}
        </DisclaimerBox>

        {article.sources && article.sources.length > 0 ? (
          <SourcesSection sources={article.sources} className="mb-10" />
        ) : null}

        {relatedQuestions.length > 0 ? (
          <RelatedQuestions
            questions={relatedQuestions}
            title="Related food questions"
            className="mb-12"
          />
        ) : null}

        {article.faqs.length > 0 ? (
          <FaqSection items={article.faqs} className="mb-12" />
        ) : null}
      </Container>
    </>
  );
}
