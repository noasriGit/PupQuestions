import {
  getAllArticles,
  getArticleByCategoryAndSlug,
  getArticlesByCategory,
  getArticlesByTag,
  getArticleStaticParams,
} from "@/data/articles";
import { getSectionBySlug } from "@/data/sections";
import type { RelatedQuestion } from "@/components/ui/RelatedQuestions";
import type {
  Article,
  ArticleRelatedQuestion,
  ContentCategory,
  SafetyLevel,
} from "@/types/content";

export type QuickAnswerVariant = "neutral" | "safe" | "caution" | "unsafe";

export {
  getAllArticles,
  getArticleByCategoryAndSlug,
  getArticlesByCategory,
  getArticlesByTag,
  getArticleStaticParams,
};

export function getArticleHref(category: ContentCategory, slug: string): string {
  return `/${category}/${slug}`;
}

export function resolveRelatedQuestions(
  related: ArticleRelatedQuestion[],
): RelatedQuestion[] {
  return related.map((item) => {
    const section = getSectionBySlug(item.category);
    return {
      title: item.title,
      href: getArticleHref(item.category, item.slug),
      section: section?.title,
    };
  });
}

export function safetyLevelToQuickAnswerVariant(
  level: SafetyLevel,
): QuickAnswerVariant {
  switch (level) {
    case "safe":
      return "safe";
    case "caution":
      return "caution";
    case "unsafe":
    case "toxic":
      return "unsafe";
    default:
      return "neutral";
  }
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

export function formatLastUpdated(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getArticlePath(article: Article): string {
  return getArticleHref(article.category, article.slug);
}

export function isHealthArticle(
  article: Article,
): article is Article & { urgencyLevel: string } {
  return article.template === "health";
}

export function isFoodSafetyArticle(
  article: Article,
): article is Article & { safetyLevel: SafetyLevel } {
  return article.template === "food-safety";
}
