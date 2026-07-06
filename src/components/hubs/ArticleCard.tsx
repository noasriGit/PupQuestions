import Link from "next/link";

import { Card } from "@/components/ui/Card";
import {
  formatLastUpdated,
  formatReadingTime,
  getArticleHref,
} from "@/lib/articles";
import type { Article } from "@/types/content";

type ArticleCardProps = {
  article: Article;
  showMeta?: boolean;
};

export function ArticleCard({ article, showMeta = true }: ArticleCardProps) {
  return (
    <Link
      href={getArticleHref(article.category, article.slug)}
      className="group block h-full"
    >
      <Card
        padding="sm"
        className="flex h-full flex-col transition hover:border-amber-300 hover:shadow-md"
      >
        <p className="font-medium text-stone-900 group-hover:text-amber-800">
          {article.title}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 line-clamp-2">
          {article.description}
        </p>
        {showMeta ? (
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
            <span>{formatReadingTime(article.readingTime)}</span>
            {article.subcategory ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{article.subcategory}</span>
              </>
            ) : null}
            <span aria-hidden="true">·</span>
            <span>Updated {formatLastUpdated(article.lastUpdated)}</span>
          </div>
        ) : null}
      </Card>
    </Link>
  );
}
