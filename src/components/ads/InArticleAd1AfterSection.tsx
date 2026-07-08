import {
  IN_ARTICLE_AD1_SECTION_INDEX,
  shouldShowInArticleAd1,
} from "@/lib/ads";

import { InArticleAdSlot } from "@/components/ads/InArticleAdSlot";

type InArticleAd1AfterSectionProps = {
  /** 1-based index of the section that was just rendered. */
  sectionIndex: number;
  /** Total main content sections in the article body. */
  totalMainSections: number;
};

export function InArticleAd1AfterSection({
  sectionIndex,
  totalMainSections,
}: InArticleAd1AfterSectionProps) {
  if (sectionIndex !== IN_ARTICLE_AD1_SECTION_INDEX) {
    return null;
  }

  if (!shouldShowInArticleAd1(totalMainSections)) {
    return null;
  }

  return <InArticleAdSlot placement={1} />;
}
