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

  EmergencySignsCallout,

  HealthBlockContent,

  HealthSection,

  MedicationSafetyNote,

  UrgencyStatusBadge,

} from "@/components/articles/health/HealthSections";

import { getSectionBySlug } from "@/data/sections";

import {

  formatLastUpdated,

  formatReadingTime,

} from "@/lib/articles";

import {

  getUrgencyQuickAnswerLabel,

  urgencyLevelToQuickAnswerVariant,

} from "@/lib/health";

import type { HealthArticle } from "@/types/content";



type HealthArticlePageProps = {

  article: HealthArticle;

};



export function HealthArticlePage({ article }: HealthArticlePageProps) {
  const section = getSectionBySlug(article.category)!;
  const totalMainSections =
    6 +
    (article.diagnosisTreatment ? 1 : 0) +
    (article.prevention ? 1 : 0);



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

            <UrgencyStatusBadge level={article.urgencyLevel} />

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

          <>

            <DisclaimerBox title="Medical disclaimer" className="mt-8">

              PupQuestions provides general educational information only. It is not a

              substitute for professional veterinary advice, diagnosis, or treatment.

              Always contact a licensed veterinarian for health concerns about your dog.

              {article.editorialNote ? (

                <>

                  {" "}

                  <span className="mt-2 block text-amber-950">

                    {article.editorialNote}

                  </span>

                </>

              ) : null}

            </DisclaimerBox>



            <QuickAnswerBox

              variant={urgencyLevelToQuickAnswerVariant(article.urgencyLevel)}

              label={getUrgencyQuickAnswerLabel(article.urgencyLevel)}

              className="mt-6"

            >

              {article.quickAnswer}

            </QuickAnswerBox>

          </>

        }

        afterBody={

          <>

            <TrustNote className="mb-8">

              Health information on PupQuestions is educational, not a substitute for

              professional veterinary care. Contact your veterinarian for diagnosis,

              treatment, and urgent symptoms — especially if your dog&apos;s condition

              worsens or you are unsure what to do.

            </TrustNote>



            {article.sources && article.sources.length > 0 ? (

              <SourcesSection sources={article.sources} className="mb-10" />

            ) : null}



            <ArticleRelatedContent

              article={article}

              relatedTitle="Related health questions"

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



          <HealthSection heading={article.topicName}>

            <HealthBlockContent {...article.overview} />

          </HealthSection>



          <HealthSection heading="Symptoms">

            <HealthBlockContent {...article.symptoms} />

          </HealthSection>



          <HealthSection heading="Common causes">

            <HealthBlockContent {...article.commonCauses} />

          </HealthSection>



          <InArticleAd1AfterSection

            sectionIndex={3}

            totalMainSections={totalMainSections}

          />



          <HealthSection heading="What to do now">

            <HealthBlockContent {...article.whatToDoNow} />

          </HealthSection>



          <HealthSection heading="What not to do">

            <HealthBlockContent {...article.whatNotToDo} />

          </HealthSection>



          <HealthSection heading="When to call a vet">

            <HealthBlockContent {...article.whenToCallVet} />

          </HealthSection>



          {article.emergencySigns ? (

            <EmergencySignsCallout className="mt-8">

              <HealthBlockContent {...article.emergencySigns} />

            </EmergencySignsCallout>

          ) : null}



          {article.diagnosisTreatment ? (

            <HealthSection heading="Diagnosis and treatment overview">

              <HealthBlockContent {...article.diagnosisTreatment} />

            </HealthSection>

          ) : null}



          {article.prevention ? (

            <HealthSection heading="Prevention">

              <HealthBlockContent {...article.prevention} />

            </HealthSection>

          ) : null}



          <InArticleAdSlot placement={2} />



          {article.medicationSafetyNote ? (

            <MedicationSafetyNote className="mt-8">

              <HealthBlockContent {...article.medicationSafetyNote} />

            </MedicationSafetyNote>

          ) : null}

        </ArticleBody>

      </ArticleAdLayout>

    </>

  );

}

