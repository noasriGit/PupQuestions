import { adsConfig } from "@/data/ads";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  tagline: SITE_TAGLINE,
  contactEmail: "help@pupquestions.com",
  ads: adsConfig,
};
