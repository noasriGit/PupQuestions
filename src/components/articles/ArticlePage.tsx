import type { ReactNode } from "react";

import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleHeader } from "@/components/ui/ArticleHeader";
import { Container } from "@/components/ui/Container";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { FaqSection } from "@/components/ui/FaqSection";
import { QuickAnswerBox } from "@/components/ui/QuickAnswerBox";
import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import { SourcesSection } from "@/components/ui/SourcesSection";
import { TrustNote } from "@/components/ui/TrustNote";
import { getSectionBySlug } from "@/data/sections";
import {
  formatLastUpdated,
  formatReadingTime,
  getArticlePath,
  isFoodSafetyArticle,
  isHealthArticle,
  resolveRelatedQuestions,
  safetyLevelToQuickAnswerVariant,
  type QuickAnswerVariant,
} from "@/lib/articles";
import type { Article, ArticleSection } from "@/types/content";

type ArticlePageProps = {
  article: Article;
};

function ArticleSections({ sections }: { sections: ArticleSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          {section.listItems ? (
            <ul>
              {section.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}

function getQuickAnswerVariant(article: Article): QuickAnswerVariant {
  if (isFoodSafetyArticle(article)) {
    return safetyLevelToQuickAnswerVariant(article.safetyLevel);
  }
  return "neutral";
}

function getQuickAnswerLabel(article: Article): string {
  if (isFoodSafetyArticle(article)) {
    const labels: Record<string, string> = {
      safe: "Generally safe",
      caution: "Use caution",
      unsafe: "Not safe",
      toxic: "Toxic — avoid",
    };
    return labels[article.safetyLevel] ?? "Quick answer";
  }
  if (isHealthArticle(article)) {
    const labels: Record<string, string> = {
      routine: "Quick answer",
      monitor: "Monitor closely",
      urgent: "Seek veterinary care",
    };
    return labels[article.urgencyLevel] ?? "Quick answer";
  }
  return "Quick answer";
}

function getTrustNote(article: Article): ReactNode | null {
  if (isFoodSafetyArticle(article)) {
    return (
      <>
        Food safety guidance on PupQuestions is general information only. Individual
        dogs may react differently based on health, size, and ingredients. When in
        doubt, ask your veterinarian before sharing human foods.
      </>
    );
  }
  if (isHealthArticle(article)) {
    if (article.urgencyLevel === "urgent") {
      return (
        <>
          If your dog shows severe or worsening symptoms, contact a veterinarian or
          emergency clinic immediately. PupQuestions does not provide diagnosis or
          emergency care.
        </>
      );
    }
    return (
      <>
        Health information here is educational, not a substitute for professional
        veterinary advice. Contact your veterinarian for diagnosis, treatment, and
        urgent symptoms.
      </>
    );
  }
  return null;
}

function shouldShowDisclaimer(article: Article): boolean {
  return (
    isFoodSafetyArticle(article) ||
    isHealthArticle(article) ||
    article.template === "puppy-care"
  );
}

export function ArticlePage({ article }: ArticlePageProps) {
  const section = getSectionBySlug(article.category)!;
  const relatedQuestions = resolveRelatedQuestions(article.relatedQuestions);
  const trustNote = getTrustNote(article);

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
          variant={getQuickAnswerVariant(article)}
          label={getQuickAnswerLabel(article)}
          className="mt-8"
        >
          {article.quickAnswer}
        </QuickAnswerBox>

        <ArticleBody>
          <p>{article.intro}</p>
          <ArticleSections sections={article.sections} />
        </ArticleBody>

        {trustNote ? (
          <TrustNote className="mb-8">{trustNote}</TrustNote>
        ) : null}

        {shouldShowDisclaimer(article) ? (
          <DisclaimerBox className="mb-10">
            PupQuestions provides general educational information only. It is not a
            substitute for professional veterinary advice, diagnosis, or treatment.
            {article.editorialNote ? (
              <>
                {" "}
                <span className="block mt-2 text-amber-900/90">
                  {article.editorialNote}
                </span>
              </>
            ) : null}
          </DisclaimerBox>
        ) : article.editorialNote ? (
          <aside className="mb-10 rounded-xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-stone-600">
            {article.editorialNote}
          </aside>
        ) : null}

        {article.sources && article.sources.length > 0 ? (
          <SourcesSection sources={article.sources} className="mb-10" />
        ) : null}

        {relatedQuestions.length > 0 ? (
          <RelatedQuestions
            questions={relatedQuestions}
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

export function getArticleMetadataFields(article: Article) {
  return {
    title: article.title,
    description: article.description,
    path: getArticlePath(article),
  };
}
