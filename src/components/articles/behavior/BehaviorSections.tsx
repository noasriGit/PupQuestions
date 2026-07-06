import {
  ArticleBlockContent,
  ArticleSection,
} from "@/components/articles/shared/ArticleContentBlocks";
import { cn } from "@/lib/cn";
import type { NormalVsConcerningBlock } from "@/types/content";

type NormalVsConcerningSectionProps = {
  block: NormalVsConcerningBlock;
  className?: string;
};

export function NormalVsConcerningSection({
  block,
  className,
}: NormalVsConcerningSectionProps) {
  return (
    <ArticleSection heading="Normal vs concerning behavior" className={className}>
      <div className="grid gap-5 sm:grid-cols-2">
        <aside className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
          <p className="text-sm font-semibold text-emerald-900">Usually normal</p>
          <div className="mt-2 text-sm leading-relaxed text-emerald-950/90">
            <ArticleBlockContent {...block.normal} />
          </div>
        </aside>
        <aside className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
          <p className="text-sm font-semibold text-amber-900">Worth a closer look</p>
          <div className="mt-2 text-sm leading-relaxed text-amber-950/90">
            <ArticleBlockContent {...block.concerning} />
          </div>
        </aside>
      </div>
    </ArticleSection>
  );
}

type BehaviorTopicBadgeProps = {
  topic: string;
  className?: string;
};

export function BehaviorTopicBadge({ topic, className }: BehaviorTopicBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-900",
        className,
      )}
    >
      {topic}
    </span>
  );
}

export { ArticleBlockContent, ArticleSection };
