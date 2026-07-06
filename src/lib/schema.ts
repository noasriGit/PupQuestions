import {
  breadcrumbItemsToSchema,
  getArticleBreadcrumbs,
  getArticlePageUrl,
  getHubBreadcrumbs,
  getHubPageUrl,
} from "@/lib/breadcrumbs";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import type { Article, ArticleFaq, ContentCategory } from "@/types/content";
import { getHubConfigOrThrow } from "@/data/hubs";
import { getSectionBySlug } from "@/data/sections";

export function buildJsonLdGraph(
  nodes: Record<string, unknown>[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function buildTrustPageSchema(
  path: string,
  title: string,
  description: string,
): Record<string, unknown> {
  const pageUrl = `${SITE_URL}${path}`;

  return buildJsonLdGraph([
    {
      "@type": "WebPage",
      name: title,
      description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ]);
}

export function buildHomeSchema(): Record<string, unknown> {
  return buildJsonLdGraph([
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ]);
}

export function buildHubSchema(category: ContentCategory): Record<string, unknown> {
  const section = getSectionBySlug(category)!;
  const hub = getHubConfigOrThrow(category);
  const pageUrl = getHubPageUrl(category);

  return buildJsonLdGraph([
    {
      "@type": "CollectionPage",
      name: section.title,
      description: hub.seoDescription ?? section.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    breadcrumbItemsToSchema(getHubBreadcrumbs(category), pageUrl),
  ]);
}

export function buildArticlePostingSchema(article: Article): Record<string, unknown> {
  const pageUrl = getArticlePageUrl(article);

  return {
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    datePublished: article.lastUpdated,
    dateModified: article.lastUpdated,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildFaqPageSchema(faqs: ArticleFaq[]): Record<string, unknown> | null {
  if (faqs.length === 0) {
    return null;
  }

  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(article: Article): Record<string, unknown> {
  const pageUrl = getArticlePageUrl(article);
  const nodes: Record<string, unknown>[] = [
    buildArticlePostingSchema(article),
    breadcrumbItemsToSchema(getArticleBreadcrumbs(article), pageUrl),
  ];

  const faqSchema = buildFaqPageSchema(article.faqs);
  if (faqSchema) {
    nodes.push(faqSchema);
  }

  return buildJsonLdGraph(nodes);
}
