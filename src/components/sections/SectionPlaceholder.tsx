import Link from "next/link";

import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleHeader } from "@/components/ui/ArticleHeader";
import { Container } from "@/components/ui/Container";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { FaqSection } from "@/components/ui/FaqSection";
import { QuickAnswerBox } from "@/components/ui/QuickAnswerBox";
import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import { TrustNote } from "@/components/ui/TrustNote";
import { demoFaqItems, popularQuestions } from "@/data/placeholders";

type SectionPlaceholderProps = {
  title: string;
  description: string;
};

export function SectionPlaceholder({
  title,
  description,
}: SectionPlaceholderProps) {
  const relatedQuestions = popularQuestions.slice(0, 3);

  return (
    <>
      <ArticleHeader
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: title },
        ]}
        meta={<span>Section hub · Content coming in Phase 2+</span>}
      />

      <Container size="narrow">
        <QuickAnswerBox variant="neutral">
          This section route is live. Articles, guides, and structured answers
          will be added in upcoming phases without changing this URL structure.
        </QuickAnswerBox>

        <ArticleBody>
          <p>
            {description} PupQuestions section pages will follow a consistent
            layout with quick answers, detailed guidance, safety notes, and
            related questions — designed to be easy to scan on mobile and
            trustworthy for sensitive topics.
          </p>
          <h2>What to expect here</h2>
          <p>
            Future content in <strong>{title}</strong> will include curated
            question hubs, individual answer pages, and cross-links to related
            topics across the site.
          </p>
        </ArticleBody>

        <TrustNote className="mb-8">
          When this section includes health or food safety guidance, every
          article will include clear safety labels and reminders to consult a
          veterinarian for individual cases.
        </TrustNote>

        <DisclaimerBox className="mb-10">
          PupQuestions provides general educational information only. It is not
          a substitute for professional veterinary advice, diagnosis, or
          treatment.
        </DisclaimerBox>

        <RelatedQuestions
          questions={relatedQuestions}
          className="mb-12"
        />

        <FaqSection items={demoFaqItems} className="mb-12" />

        <div className="border-t border-stone-200 pb-12 pt-8">
          <Link
            href="/"
            className="text-sm font-medium text-amber-700 hover:text-amber-800"
          >
            ← Back to home
          </Link>
        </div>
      </Container>
    </>
  );
}
