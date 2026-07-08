import { ArticleStructuredData } from "@/components/seo/ArticleStructuredData";

import { BehaviorArticlePage } from "@/components/articles/BehaviorArticlePage";

import { BreedListArticlePage } from "@/components/articles/BreedListArticlePage";

import { FoodSafetyArticlePage } from "@/components/articles/FoodSafetyArticlePage";

import { HealthArticlePage } from "@/components/articles/HealthArticlePage";

import { ProductGuideArticlePage } from "@/components/articles/ProductGuideArticlePage";

import { TrainingArticlePage } from "@/components/articles/TrainingArticlePage";

import { ArticleAdLayout } from "@/components/ads/ArticleAdLayout";

import { InArticleAd1AfterSection } from "@/components/ads/InArticleAd1AfterSection";

import { InArticleAdSlot } from "@/components/ads/InArticleAdSlot";

import { ArticleBody } from "@/components/ui/ArticleBody";

import { ArticleHeader } from "@/components/ui/ArticleHeader";

import { DisclaimerBox } from "@/components/ui/DisclaimerBox";

import { FaqSection } from "@/components/ui/FaqSection";

import { QuickAnswerBox } from "@/components/ui/QuickAnswerBox";

import { SourcesSection } from "@/components/ui/SourcesSection";

import { ArticleRelatedContent } from "@/components/articles/ArticleRelatedContent";

import { getSectionBySlug } from "@/data/sections";

import {

  formatLastUpdated,

  formatReadingTime,

  isBehaviorArticle,

  isBreedListArticle,

  isFoodSafetyArticle,

  isHealthArticle,

  isProductGuideArticle,

  isTrainingArticle,

} from "@/lib/articles";

import type { Article, ArticleSection } from "@/types/content";



type ArticlePageProps = {

  article: Article;

};



function ArticleSections({

  sections,

  showSecondInArticleAd = true,

}: {

  sections: ArticleSection[];

  showSecondInArticleAd?: boolean;

}) {

  if (sections.length === 0) {

    return null;

  }



  return (

    <>

      {sections.map((section, index) => (

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



          <InArticleAd1AfterSection

            sectionIndex={index + 1}

            totalMainSections={sections.length}

          />

        </section>

      ))}



      {showSecondInArticleAd ? <InArticleAdSlot placement={2} /> : null}

    </>

  );

}



function GenericArticlePage({ article }: ArticlePageProps) {

  const section = getSectionBySlug(article.category)!;

  const showDisclaimer = article.template === "puppy-care";

  const showSecondInArticleAd = article.sections.length > 1;



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

            variant="neutral"

            label="Quick answer"

            className="mt-8"

          >

            {article.quickAnswer}

          </QuickAnswerBox>

        }

        afterBody={

          <>

            {showDisclaimer ? (

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

            ) : article.editorialNote ? (

              <aside className="mb-10 rounded-xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-stone-600">

                {article.editorialNote}

              </aside>

            ) : null}



            {article.sources && article.sources.length > 0 ? (

              <SourcesSection sources={article.sources} className="mb-10" />

            ) : null}



            <ArticleRelatedContent article={article} relatedTitle="Related questions" className="mb-12" />



            {article.faqs.length > 0 ? (

              <FaqSection items={article.faqs} className="mb-12" />

            ) : null}

          </>

        }

      >

        <ArticleBody>

          <p>{article.intro}</p>

          <ArticleSections

            sections={article.sections}

            showSecondInArticleAd={showSecondInArticleAd}

          />

        </ArticleBody>

      </ArticleAdLayout>

    </>

  );

}



export function ArticlePage({ article }: ArticlePageProps) {

  let content;



  if (isFoodSafetyArticle(article)) {

    content = <FoodSafetyArticlePage article={article} />;

  } else if (isHealthArticle(article)) {

    content = <HealthArticlePage article={article} />;

  } else if (isBehaviorArticle(article)) {

    content = <BehaviorArticlePage article={article} />;

  } else if (isTrainingArticle(article)) {

    content = <TrainingArticlePage article={article} />;

  } else if (isBreedListArticle(article)) {

    content = <BreedListArticlePage article={article} />;

  } else if (isProductGuideArticle(article)) {

    content = <ProductGuideArticlePage article={article} />;

  } else {

    content = <GenericArticlePage article={article} />;

  }



  return (

    <>

      <ArticleStructuredData article={article} />

      {content}

    </>

  );

}

