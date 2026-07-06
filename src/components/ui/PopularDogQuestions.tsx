import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import { resolvePopularDogQuestions } from "@/lib/internal-links";

type PopularDogQuestionsProps = {
  title?: string;
  className?: string;
};

export function PopularDogQuestions({
  title = "Popular questions",
  className,
}: PopularDogQuestionsProps) {
  const questions = resolvePopularDogQuestions();

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
