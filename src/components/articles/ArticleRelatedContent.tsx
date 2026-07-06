import { MoreQuestionsAboutTopic } from "@/components/ui/MoreQuestionsAboutTopic";
import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import {
  getMoreQuestionsAboutTopic,
  resolveRelatedQuestions,
} from "@/lib/internal-links";
import type { Article } from "@/types/content";

type ArticleRelatedContentProps = {
  article: Article;
  relatedTitle: string;
  moreTitle?: string;
  className?: string;
};

export function ArticleRelatedContent({
  article,
  relatedTitle,
  moreTitle,
  className,
}: ArticleRelatedContentProps) {
  const relatedQuestions = resolveRelatedQuestions(article.relatedQuestions);
  const moreQuestions = getMoreQuestionsAboutTopic(article);

  if (relatedQuestions.length === 0 && moreQuestions.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {relatedQuestions.length > 0 ? (
        <RelatedQuestions
          questions={relatedQuestions}
          title={relatedTitle}
          className={moreQuestions.length > 0 ? "mb-10" : undefined}
        />
      ) : null}
      <MoreQuestionsAboutTopic questions={moreQuestions} title={moreTitle} />
    </div>
  );
}
