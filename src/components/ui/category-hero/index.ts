import {
  categoryHeroClassMap,
  categoryIconBadgeClassMap,
} from "@/components/ui/category-hero/config";
import type { ContentCategory } from "@/types/content";

export {
  categoryHeroClassMap,
  categoryIconBadgeClassMap,
} from "@/components/ui/category-hero/config";

export function getCategoryHeroClasses(category: ContentCategory): string {
  return categoryHeroClassMap[category];
}

export function getCategoryIconBadgeClasses(category: ContentCategory): string {
  return categoryIconBadgeClassMap[category];
}
