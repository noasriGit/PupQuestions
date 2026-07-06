import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ArticlePage,
  getArticleMetadataFields,
} from "@/components/articles/ArticlePage";
import {
  getArticleByCategoryAndSlug,
  getArticleStaticParams,
} from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";
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
        return createPageMetadata({ title: "Not Found" });
      }

      return createPageMetadata(getArticleMetadataFields(article));
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
