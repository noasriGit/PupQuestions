import { getHubConfigOrThrow } from "@/data/hubs";
import { getSectionBySlug } from "@/data/sections";
import type { Metadata } from "next";

import { getArticlesByCategory } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";
import type { Article, ContentCategory } from "@/types/content";
import type { HubConfig, HubTopicGroup } from "@/types/hub";

export type HubTopicGroupWithArticles = HubTopicGroup & {
  articles: Article[];
};

export function createHubMetadata(category: ContentCategory): Metadata {
  const section = getSectionBySlug(category)!;
  const hub = getHubConfigOrThrow(category);

  return createPageMetadata({
    title: section.title,
    description: hub.seoDescription ?? section.description,
    path: section.href,
  });
}

export function getHubArticles(category: ContentCategory): Article[] {
  return getArticlesByCategory(category);
}

export function getHubFeaturedArticles(
  category: ContentCategory,
  hub: HubConfig = getHubConfigOrThrow(category),
): Article[] {
  const articles = getHubArticles(category);
  const bySlug = new Map(articles.map((article) => [article.slug, article]));

  return hub.featuredSlugs
    .map((slug) => bySlug.get(slug))
    .filter((article): article is Article => article !== undefined);
}

export function getHubRecentArticles(
  category: ContentCategory,
  limit = 6,
): Article[] {
  return [...getHubArticles(category)]
    .sort(
      (a, b) =>
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
    )
    .slice(0, limit);
}

export function getArticleTopicGroupId(
  article: Article,
  hub: HubConfig,
): string | undefined {
  return hub.articleGroupMap[article.slug];
}

export function groupHubArticlesByTopic(
  category: ContentCategory,
  hub: HubConfig = getHubConfigOrThrow(category),
): HubTopicGroupWithArticles[] {
  const articles = getHubArticles(category);

  return hub.topicGroups.map((group) => ({
    ...group,
    articles: articles.filter(
      (article) => hub.articleGroupMap[article.slug] === group.id,
    ),
  }));
}

export function getHubArticleCount(category: ContentCategory): number {
  return getHubArticles(category).length;
}
