import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import type { RelatedQuestion } from "@/components/ui/RelatedQuestions";

type MoreQuestionsAboutTopicProps = {
  questions: RelatedQuestion[];
  title?: string;
  className?: string;
};

export function MoreQuestionsAboutTopic({
  questions,
  title = "More questions about this topic",
  className,
}: MoreQuestionsAboutTopicProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <RelatedQuestions
      questions={questions}
      title={title}
      className={className}
    />
  );
}
