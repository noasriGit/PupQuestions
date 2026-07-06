import type { ContentCategory } from "@/types/content";

export type HubTopicGroup = {
  id: string;
  title: string;
  description: string;
};

export type HubTrustNote = {
  title?: string;
  content: string;
};

export type HubConfig = {
  category: ContentCategory;
  /** Short intro shown below the H1. */
  intro: string;
  /** Longer category overview for the hub body. */
  overview: string;
  /** Optional SEO description override; falls back to section description. */
  seoDescription?: string;
  topicGroups: HubTopicGroup[];
  /** Article slugs to highlight in the featured section. */
  featuredSlugs: string[];
  /** Maps article slug to topic group id for grouping on the hub. */
  articleGroupMap: Record<string, string>;
  trustNote?: HubTrustNote;
  /** Show the standard veterinary disclaimer callout. */
  showHealthDisclaimer?: boolean;
};
