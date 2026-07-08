import {

  ArticleBlockContent,

  ArticleSection,

  BreedEntryList,

  BreedTopicBadge,

} from "@/components/articles/breed-list/BreedListSections";

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

import type { BreedListArticle } from "@/types/content";



type BreedListArticlePageProps = {

  article: BreedListArticle;

};



export function BreedListArticlePage({ article }: BreedListArticlePageProps) {

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



      <ArticleAdLayout

        topArea={

          <QuickAnswerBox variant="neutral" label="Quick summary" className="mt-8">

            {article.quickAnswer}

          </QuickAnswerBox>

        }

        afterBody={

          <>

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



            <ArticleRelatedContent

              article={article}

              relatedTitle="Related breed questions"

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



          <ArticleSection heading="Selection criteria">

            <ArticleBlockContent {...article.selectionCriteria} />

          </ArticleSection>



          <ArticleSection heading="Breeds to consider">

            <BreedEntryList entries={article.breedEntries} className="mt-4" />

          </ArticleSection>



          <ArticleSection heading="Important caveats">

            <ArticleBlockContent {...article.importantCaveats} />

          </ArticleSection>



          <InArticleAd1AfterSection sectionIndex={3} totalMainSections={3} />



          <InArticleAdSlot placement={2} />

        </ArticleBody>

      </ArticleAdLayout>

    </>

  );

}

