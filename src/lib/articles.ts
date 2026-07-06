import {
  getAllArticles,
  getArticleByCategoryAndSlug,
  getArticlesByCategory,
  getArticlesByTag,
  getArticleStaticParams,
  getIndexableArticles,
} from "@/data/articles";
import type {
  Article,
  BehaviorArticle,
  BreedListArticle,
  ContentCategory,
  FoodSafetyArticle,
  HealthArticle,
  ProductGuideArticle,
  SafetyLevel,
  TrainingArticle,
} from "@/types/content";

export type QuickAnswerVariant = "neutral" | "safe" | "caution" | "unsafe";

export {
  getAllArticles,
  getArticleByCategoryAndSlug,
  getArticlesByCategory,
  getArticlesByTag,
  getArticleStaticParams,
  getIndexableArticles,
};

export function getArticleHref(category: ContentCategory, slug: string): string {
  return `/${category}/${slug}`;
}

export { resolveRelatedQuestions } from "@/lib/internal-links";

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

export function isHealthArticle(article: Article): article is HealthArticle {
  return article.template === "health";
}

export function isFoodSafetyArticle(
  article: Article,
): article is FoodSafetyArticle {
  return article.template === "food-safety";
}

export function isBehaviorArticle(article: Article): article is BehaviorArticle {
  return article.template === "behavior";
}

export function isTrainingArticle(article: Article): article is TrainingArticle {
  return article.template === "training";
}

export function isBreedListArticle(article: Article): article is BreedListArticle {
  return article.template === "breed-list";
}

export function isProductGuideArticle(
  article: Article,
): article is ProductGuideArticle {
  return article.template === "product-guide";
}

/** @deprecated Use safetyLevelToQuickAnswerVariant from @/lib/food-safety */
export function safetyLevelToQuickAnswerVariant(
  level: SafetyLevel,
): QuickAnswerVariant {
  switch (level) {
    case "safe":
    case "moderation":
      return "safe";
    case "caution":
    case "not-recommended":
      return "caution";
    case "unsafe":
    case "toxic":
      return "unsafe";
    default:
      return "neutral";
  }
}
