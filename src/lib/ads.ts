import { adsConfig } from "@/data/ads";

/** Ad 1 is inserted after this many real content sections (intro/quick answer excluded). */
export const IN_ARTICLE_AD1_SECTION_INDEX = 3;

export function areArticleAdsEnabled(): boolean {
  return adsConfig.enabled && adsConfig.showOnArticles;
}

export function isInArticleAd1Enabled(): boolean {
  return areArticleAdsEnabled() && adsConfig.inArticleAd1Enabled;
}

/**
 * Whether the first in-article ad should render after the third main section.
 * Omits Ad 1 when there are fewer than three sections, or when only three
 * sections exist (to avoid stacking Ad 1 beside Ad 2 at the article end).
 */
export function shouldShowInArticleAd1(totalMainSections: number): boolean {
  return (
    isInArticleAd1Enabled() &&
    totalMainSections > IN_ARTICLE_AD1_SECTION_INDEX
  );
}

export function isInArticleAd2Enabled(showSecondAd = true): boolean {
  return (
    areArticleAdsEnabled() &&
    adsConfig.inArticleAd2Enabled &&
    showSecondAd
  );
}

export function isDesktopRightRailEnabled(): boolean {
  return (
    areArticleAdsEnabled() && adsConfig.desktopRightRailEnabled
  );
}
