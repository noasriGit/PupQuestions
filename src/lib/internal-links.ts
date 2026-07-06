import {
  getArticleByCategoryAndSlug,
  getIndexableArticles,
} from "@/data/articles";
import { getSectionBySlug } from "@/data/sections";
import { getArticleHref } from "@/lib/articles";
import { isArticleIndexable } from "@/lib/indexing";
import type { RelatedQuestion } from "@/components/ui/RelatedQuestions";
import type {
  Article,
  ArticleRelatedQuestion,
  ContentCategory,
} from "@/types/content";

export type PopularQuestionEntry =
  | {
      kind: "article";
      category: ContentCategory;
      slug: string;
    }
  | {
      kind: "hub";
      category: ContentCategory;
      title: string;
    };

export const POPULAR_QUESTION_ENTRIES: PopularQuestionEntry[] = [
  { kind: "article", category: "can-dogs-eat", slug: "blueberries" },
  { kind: "article", category: "dog-behavior", slug: "why-do-dogs-eat-grass" },
  {
    kind: "hub",
    category: "dog-grooming",
    title: "How often should I bathe my dog?",
  },
  {
    kind: "article",
    category: "dog-training",
    slug: "how-to-stop-dog-pulling-on-leash",
  },
  {
    kind: "article",
    category: "dog-health",
    slug: "why-is-my-dog-throwing-up",
  },
];

function articleKey(category: ContentCategory, slug: string): string {
  return `${category}/${slug}`;
}

export function isValidPublishedArticleLink(
  category: ContentCategory,
  slug: string,
): boolean {
  const article = getArticleByCategoryAndSlug(category, slug);
  return article ? isArticleIndexable(article) : false;
}

export function articleToRelatedQuestion(article: Article): RelatedQuestion {
  const section = getSectionBySlug(article.category);

  return {
    title: article.title,
    href: getArticleHref(article.category, article.slug),
    section: section?.title,
  };
}

export function resolveRelatedQuestions(
  related: ArticleRelatedQuestion[],
): RelatedQuestion[] {
  return related
    .filter((item) => isValidPublishedArticleLink(item.category, item.slug))
    .map((item) => {
      const section = getSectionBySlug(item.category);
      return {
        title: item.title,
        href: getArticleHref(item.category, item.slug),
        section: section?.title,
      };
    });
}

export function resolvePopularDogQuestions(
  entries: PopularQuestionEntry[] = POPULAR_QUESTION_ENTRIES,
): RelatedQuestion[] {
  return entries.flatMap((entry) => {
    if (entry.kind === "article") {
      if (!isValidPublishedArticleLink(entry.category, entry.slug)) {
        return [];
      }

      const article = getArticleByCategoryAndSlug(entry.category, entry.slug)!;
      return [articleToRelatedQuestion(article)];
    }

    const section = getSectionBySlug(entry.category);
    if (!section) {
      return [];
    }

    return [
      {
        title: entry.title,
        href: section.href,
        section: section.title,
      },
    ];
  });
}

function countSharedTags(left: Article, right: Article): number {
  const rightTags = new Set(right.tags.map((tag) => tag.toLowerCase()));

  return left.tags.filter((tag) => rightTags.has(tag.toLowerCase())).length;
}

export function getRelatedArticlesByCategory(
  article: Article,
  options: { limit?: number; excludeKeys?: Set<string> } = {},
): RelatedQuestion[] {
  const { limit = 3, excludeKeys = new Set<string>() } = options;

  return getIndexableArticles()
    .filter(
      (candidate) =>
        candidate.category === article.category &&
        !excludeKeys.has(articleKey(candidate.category, candidate.slug)),
    )
    .slice(0, limit)
    .map(articleToRelatedQuestion);
}

export function getRelatedArticlesByTag(
  article: Article,
  options: { limit?: number; excludeKeys?: Set<string> } = {},
): RelatedQuestion[] {
  const { limit = 4, excludeKeys = new Set<string>() } = options;

  return getIndexableArticles()
    .filter(
      (candidate) =>
        !excludeKeys.has(articleKey(candidate.category, candidate.slug)) &&
        countSharedTags(article, candidate) > 0,
    )
    .sort((left, right) => {
      const tagDifference =
        countSharedTags(article, right) - countSharedTags(article, left);

      if (tagDifference !== 0) {
        return tagDifference;
      }

      return left.title.localeCompare(right.title, undefined, {
        sensitivity: "base",
      });
    })
    .slice(0, limit)
    .map(articleToRelatedQuestion);
}

/** Related guides by shared tags or same category, excluding manual related links. */
export function getMoreQuestionsAboutTopic(
  article: Article,
  options: { limit?: number } = {},
): RelatedQuestion[] {
  const { limit = 4 } = options;
  const excludeKeys = new Set<string>([
    articleKey(article.category, article.slug),
    ...article.relatedQuestions.map((item) =>
      articleKey(item.category, item.slug),
    ),
  ]);

  const byTag = getRelatedArticlesByTag(article, {
    limit,
    excludeKeys,
  });

  if (byTag.length >= limit) {
    return byTag.slice(0, limit);
  }

  const seenHrefs = new Set(byTag.map((question) => question.href));
  const byCategory = getRelatedArticlesByCategory(article, {
    limit: limit - byTag.length,
    excludeKeys: new Set([
      ...excludeKeys,
      ...byTag.map((question) => {
        const [, category, slug] = question.href.split("/");
        return articleKey(category as ContentCategory, slug);
      }),
    ]),
  }).filter((question) => {
    if (seenHrefs.has(question.href)) {
      return false;
    }

    seenHrefs.add(question.href);
    return true;
  });

  return [...byTag, ...byCategory].slice(0, limit);
}
