import { cn } from "@/lib/cn";

type TrainingTopicBadgeProps = {
  topic: string;
  className?: string;
};

export function TrainingTopicBadge({ topic, className }: TrainingTopicBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-900",
        className,
      )}
    >
      {topic}
    </span>
  );
}

export {
  ArticleBlockContent,
  ArticleSection,
} from "@/components/articles/shared/ArticleContentBlocks";
