import type { ContentCategory } from "@/types/content";

/**
 * Maps each content category to a CSS class that applies subtle gradient and
 * border treatments. Styles are defined in globals.css — no icons or imagery.
 */
export const categoryHeroClassMap: Record<ContentCategory, string> = {
  "can-dogs-eat": "article-category-hero article-category-hero--can-dogs-eat",
  "dog-health": "article-category-hero article-category-hero--dog-health",
  "dog-behavior": "article-category-hero article-category-hero--dog-behavior",
  "dog-training": "article-category-hero article-category-hero--dog-training",
  "dog-breeds": "article-category-hero article-category-hero--dog-breeds",
  "puppy-care": "article-category-hero article-category-hero--puppy-care",
  "dog-products": "article-category-hero article-category-hero--dog-products",
  "dog-grooming": "article-category-hero article-category-hero--dog-grooming",
};

/** Tinted badge backgrounds for category emoji icons in headers. */
export const categoryIconBadgeClassMap: Record<ContentCategory, string> = {
  "can-dogs-eat": "bg-amber-100/90",
  "dog-health": "bg-teal-100/90",
  "dog-behavior": "bg-purple-100/80",
  "dog-training": "bg-emerald-100/90",
  "dog-breeds": "bg-stone-200/70",
  "puppy-care": "bg-orange-100/80",
  "dog-products": "bg-slate-200/70",
  "dog-grooming": "bg-cyan-100/90",
};
