import type { Metadata } from "next";

import { getArticlePath } from "@/lib/articles";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import { isArticleIndexable } from "@/lib/indexing";
import type { Article } from "@/types/content";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

function normalizePath(path: string): string {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function buildCanonicalUrl(path: string): string {
  return `${SITE_URL}${normalizePath(path)}`;
}

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  noindex = false,
  openGraphType = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = buildCanonicalUrl(path);

  const base: Metadata = {
    description,
    metadataBase: new URL(SITE_URL),
  icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: openGraphType,
      locale: "en_US",
      ...(openGraphType === "article" && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };

  if (title) {
    return {
      ...base,
      title,
    };
  }

  return {
    ...base,
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
  };
}

export function createHomeMetadata(): Metadata {
  return createPageMetadata({
    description: `${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
    path: "/",
  });
}

export function createArticleMetadata(article: Article): Metadata {
  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: getArticlePath(article),
    noindex: !isArticleIndexable(article),
    openGraphType: "article",
    publishedTime: article.lastUpdated,
    modifiedTime: article.lastUpdated,
  });
}

export function createNotFoundMetadata(): Metadata {
  return createPageMetadata({
    title: "Page Not Found",
    description: "The page you are looking for does not exist or may have moved.",
    noindex: true,
  });
}
