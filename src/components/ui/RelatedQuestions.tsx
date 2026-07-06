import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type RelatedQuestion = {
  title: string;
  href: string;
  section?: string;
};

type RelatedQuestionsProps = {
  questions: RelatedQuestion[];
  title?: string;
  className?: string;
};

export function RelatedQuestions({
  questions,
  title = "Related questions",
  className,
}: RelatedQuestionsProps) {
  return (
    <section className={className} aria-labelledby="related-questions-heading">
      <SectionHeading id="related-questions-heading" title={title} />
      <ul className="space-y-3">
        {questions.map((question) => (
          <li key={question.title}>
            <Link href={question.href} className="group block">
              <Card
                padding="sm"
                className="transition hover:border-amber-300 hover:shadow-md"
              >
                <p className="font-medium text-stone-900 group-hover:text-amber-800">
                  {question.title}
                </p>
                {question.section ? (
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-600">
                    {question.section}
                  </p>
                ) : null}
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
