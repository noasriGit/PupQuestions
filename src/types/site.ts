export type SiteSection = {
  slug: string;
  title: string;
  description: string;
  href: `/${string}`;
  icon?: string;
};

import type { AdsConfig } from "@/types/ads";

export type SiteConfig = {
  name: string;
  url: string;
  description: string;
  tagline: string;
  contactEmail: string;
  ads: AdsConfig;
};
