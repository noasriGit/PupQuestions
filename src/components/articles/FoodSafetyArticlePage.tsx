import { Fragment } from "react";

import { ArticleAdLayout } from "@/components/ads/ArticleAdLayout";
import { InArticleAd1AfterSection } from "@/components/ads/InArticleAd1AfterSection";
import { InArticleAdSlot } from "@/components/ads/InArticleAdSlot";

import { ArticleBody } from "@/components/ui/ArticleBody";

import { ArticleHeader } from "@/components/ui/ArticleHeader";

import { DisclaimerBox } from "@/components/ui/DisclaimerBox";

import { FaqSection } from "@/components/ui/FaqSection";

import { QuickAnswerBox } from "@/components/ui/QuickAnswerBox";

import { SourcesSection } from "@/components/ui/SourcesSection";

import { TrustNote } from "@/components/ui/TrustNote";

import { ArticleRelatedContent } from "@/components/articles/ArticleRelatedContent";

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

  const mainSections = [
    {
      heading: `Can dogs eat ${article.foodName}?`,
      block: article.directAnswer,
    },
    ...(article.benefits
      ? [{ heading: "Benefits", block: article.benefits }]
      : []),
    { heading: "Risks", block: article.risks },
    { heading: "How much can dogs have?", block: article.servingGuidance },
    { heading: "How to serve it safely", block: article.safePreparation },
    { heading: "When to avoid it", block: article.avoidIf },
    {
      heading: "What to do if your dog ate too much",
      block: article.tooMuch,
    },
    { heading: "When to call a vet", block: article.whenToCallVet },
  ];

  const totalMainSections = mainSections.length;



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



      <ArticleAdLayout

        topArea={

          <QuickAnswerBox

            variant={safetyLevelToQuickAnswerVariant(article.safetyLevel)}

            label={getSafetyQuickAnswerLabel(article.safetyLevel)}

            className="mt-8"

          >

            {article.quickAnswer}

          </QuickAnswerBox>

        }

        afterBody={

          <>

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

                  <span className="mt-2 block text-amber-950">

                    {article.editorialNote}

                  </span>

                </>

              ) : null}

            </DisclaimerBox>



            {article.sources && article.sources.length > 0 ? (

              <SourcesSection sources={article.sources} className="mb-10" />

            ) : null}



            <ArticleRelatedContent

              article={article}

              relatedTitle="Related food questions"

              className="mb-12"

            />



            {article.faqs.length > 0 ? (

              <FaqSection items={article.faqs} className="mb-12" />

            ) : null}

          </>

        }

      >

        <ArticleBody>

          <p>{article.intro}</p>



          {mainSections.map((sectionItem, index) => (

            <Fragment key={sectionItem.heading}>

              <FoodSafetySection heading={sectionItem.heading}>

                <FoodSafetyBlockContent {...sectionItem.block} />

              </FoodSafetySection>



              <InArticleAd1AfterSection

                sectionIndex={index + 1}

                totalMainSections={totalMainSections}

              />

            </Fragment>

          ))}



          <InArticleAdSlot placement={2} />



          {article.emergencyNote ? (

            <EmergencyNote className="mt-8">{article.emergencyNote}</EmergencyNote>

          ) : null}

        </ArticleBody>

      </ArticleAdLayout>

    </>

  );

}

