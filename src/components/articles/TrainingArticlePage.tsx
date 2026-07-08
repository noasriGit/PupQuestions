import {

  ArticleBlockContent,

  ArticleSection,

  TrainingTopicBadge,

} from "@/components/articles/training/TrainingSections";

import { EditorialNoteAside } from "@/components/articles/shared/ArticleContentBlocks";

import { ArticleAdLayout } from "@/components/ads/ArticleAdLayout";

import { InArticleAd1AfterSection } from "@/components/ads/InArticleAd1AfterSection";

import { InArticleAdSlot } from "@/components/ads/InArticleAdSlot";

import { ArticleBody } from "@/components/ui/ArticleBody";

import { ArticleHeader } from "@/components/ui/ArticleHeader";

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

import type { TrainingArticle } from "@/types/content";



type TrainingArticlePageProps = {

  article: TrainingArticle;

};



export function TrainingArticlePage({ article }: TrainingArticlePageProps) {
  const section = getSectionBySlug(article.category)!;
  const totalMainSections = article.toolsAndSetup ? 5 : 4;



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

            <TrainingTopicBadge topic={article.trainingTopic} />

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

          <QuickAnswerBox variant="neutral" label="Training summary" className="mt-8">

            {article.quickAnswer}

          </QuickAnswerBox>

        }

        afterBody={

          <>

            {article.editorialNote ? (

              <EditorialNoteAside className="mb-8">{article.editorialNote}</EditorialNoteAside>

            ) : null}



            <TrustNote title="Humane training reminder">

              PupQuestions favors positive reinforcement and force-free methods. Avoid

              punishment-based tools or techniques that cause fear or pain. For aggression,

              severe reactivity, or safety concerns, work with a qualified professional

              trainer.

            </TrustNote>



            {article.sources && article.sources.length > 0 ? (

              <SourcesSection sources={article.sources} className="mb-10 mt-8" />

            ) : null}



            <ArticleRelatedContent

              article={article}

              relatedTitle="Related training questions"

              className="mb-12 mt-8"

            />



            {article.faqs.length > 0 ? (

              <FaqSection items={article.faqs} className="mb-12" />

            ) : null}

          </>

        }

      >

        <ArticleBody>

          <p>{article.intro}</p>



          <ArticleSection heading="Why this happens">

            <ArticleBlockContent {...article.whyItHappens} />

          </ArticleSection>



          <ArticleSection heading="Step-by-step training approach">

            <ArticleBlockContent {...article.trainingSteps} />

          </ArticleSection>



          <ArticleSection heading="Common mistakes">

            <ArticleBlockContent {...article.commonMistakes} />

          </ArticleSection>



          <InArticleAd1AfterSection

            sectionIndex={3}

            totalMainSections={totalMainSections}

          />



          <ArticleSection heading="When to get professional help">

            <ArticleBlockContent {...article.whenToGetProfessionalHelp} />

          </ArticleSection>



          {article.toolsAndSetup ? (

            <ArticleSection heading="Helpful tools and setup">

              <ArticleBlockContent {...article.toolsAndSetup} />

            </ArticleSection>

          ) : null}



          <InArticleAdSlot placement={2} />

        </ArticleBody>

      </ArticleAdLayout>

    </>

  );

}

