import { SITE_DESCRIPTION } from "@/lib/constants";

export type StaticPage = {
  id: string;
  title: string;
  path: `/${string}` | "/";
  description: string;
  sortPriority: number;
  featured?: boolean;
};

/**
 * Indexable static pages that are not represented in sections, articles, or trust registries.
 */
export const staticPages: StaticPage[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    description: SITE_DESCRIPTION,
    sortPriority: 0,
    featured: true,
  },
  {
    id: "html-sitemap",
    title: "Sitemap",
    path: "/sitemap",
    description:
      "Browse every published PupQuestions page by topic, including guides, category hubs, and site information.",
    sortPriority: 90,
  },
];

export function getStaticPageByPath(path: string): StaticPage | undefined {
  return staticPages.find((page) => page.path === path);
}
