import type { BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { getSectionBySlug } from "@/data/sections";
import { getArticlePath } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";
import type { Article, ContentCategory } from "@/types/content";

export function getArticleBreadcrumbs(article: Article): BreadcrumbItem[] {
  const section = getSectionBySlug(article.category)!;

  return [
    { label: "Home", href: "/" },
    { label: section.title, href: section.href },
    { label: article.title },
  ];
}

export function getHubBreadcrumbs(category: ContentCategory): BreadcrumbItem[] {
  const section = getSectionBySlug(category)!;

  return [
    { label: "Home", href: "/" },
    { label: section.title },
  ];
}

export function getArticlePageUrl(article: Article): string {
  return `${SITE_URL}${getArticlePath(article)}`;
}

export function getHubPageUrl(category: ContentCategory): string {
  const section = getSectionBySlug(category)!;
  return `${SITE_URL}${section.href}`;
}

export function breadcrumbItemsToSchema(
  items: BreadcrumbItem[],
  currentPageUrl: string,
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const itemUrl = item.href
        ? `${SITE_URL}${item.href}`
        : currentPageUrl;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: itemUrl,
      };
    }),
  };
}
