import type { Metadata } from "next";

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
}: PageMetadataOptions): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;

  const base: Metadata = {
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
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
