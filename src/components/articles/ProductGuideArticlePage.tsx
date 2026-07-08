import {

  ArticleBlockContent,

  ArticleSection,

  ProductCategoryBadge,

  ProductEntryGrid,

} from "@/components/articles/product-guide/ProductGuideSections";

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

import type { ProductGuideArticle } from "@/types/content";



type ProductGuideArticlePageProps = {

  article: ProductGuideArticle;

};



export function ProductGuideArticlePage({ article }: ProductGuideArticlePageProps) {

  const section = getSectionBySlug(article.category)!;

  const hasProductEntries =
    article.productEntries && article.productEntries.length > 0;

  const totalMainSections = hasProductEntries ? 5 : 4;



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

            <ProductCategoryBadge category={article.productCategory} />

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

            variant="neutral"

            label="Quick recommendation"

            className="mt-8"

          >

            {article.quickAnswer}

          </QuickAnswerBox>

        }

        afterBody={

          <>

            {article.editorialNote ? (

              <EditorialNoteAside className="mb-8">{article.editorialNote}</EditorialNoteAside>

            ) : null}



            <TrustNote title="Neutral product guidance">

              PupQuestions product guides are educational and do not include affiliate links or

              sponsored picks. Always prioritize your dog&apos;s safety, size, and comfort.

              When in doubt, ask your veterinarian or trainer before buying gear for health or

              behavior concerns.

            </TrustNote>



            {article.sources && article.sources.length > 0 ? (

              <SourcesSection sources={article.sources} className="mb-10 mt-8" />

            ) : null}



            <ArticleRelatedContent

              article={article}

              relatedTitle="Related product and care guides"

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



          <ArticleSection heading="What to look for">

            <ArticleBlockContent {...article.whatToLookFor} />

          </ArticleSection>



          {hasProductEntries ? (

            <ArticleSection heading="Types to consider">

              <ProductEntryGrid entries={article.productEntries!} className="mt-4" />

            </ArticleSection>

          ) : null}



          <ArticleSection heading="Safety considerations">

            <ArticleBlockContent {...article.safetyConsiderations} />

          </ArticleSection>



          {hasProductEntries ? (

            <InArticleAd1AfterSection

              sectionIndex={3}

              totalMainSections={totalMainSections}

            />

          ) : null}



          <ArticleSection heading="Buying guide">

            <ArticleBlockContent {...article.buyingGuide} />

          </ArticleSection>



          {!hasProductEntries ? (

            <InArticleAd1AfterSection

              sectionIndex={3}

              totalMainSections={totalMainSections}

            />

          ) : null}



          <ArticleSection heading="Mistakes to avoid">

            <ArticleBlockContent {...article.mistakesToAvoid} />

          </ArticleSection>



          <InArticleAdSlot placement={2} />

        </ArticleBody>

      </ArticleAdLayout>

    </>

  );

}

