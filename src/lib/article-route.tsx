import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ArticlePage,
} from "@/components/articles/ArticlePage";
import {
  getArticleByCategoryAndSlug,
  getArticleStaticParams,
} from "@/lib/articles";
import { createArticleMetadata, createNotFoundMetadata } from "@/lib/metadata";
import type { ContentCategory } from "@/types/content";

type ArticleRouteParams = {
  slug: string;
};

export function createArticleRoute(category: ContentCategory) {
  return {
    generateStaticParams() {
      return getArticleStaticParams(category);
    },

    async generateMetadata({
      params,
    }: {
      params: Promise<ArticleRouteParams>;
    }): Promise<Metadata> {
      const { slug } = await params;
      const article = getArticleByCategoryAndSlug(category, slug);

      if (!article) {
        return createNotFoundMetadata();
      }

      return createArticleMetadata(article);
    },

    async Page({ params }: { params: Promise<ArticleRouteParams> }) {
      const { slug } = await params;
      const article = getArticleByCategoryAndSlug(category, slug);

      if (!article) {
        notFound();
      }

      return <ArticlePage article={article} />;
    },
  };
}
