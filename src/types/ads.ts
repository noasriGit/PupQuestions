export type AdsProvider = "adsense";

export type AdsConfig = {
  enabled: boolean;
  provider: AdsProvider;
  client: string;
  slots: {
    inArticle: string;
    rightRail: string;
  };
  showOnHomepage: boolean;
  showOnHubs: boolean;
  showOnSearch: boolean;
  showOnTrustPages: boolean;
  showOnArticles: boolean;
  inArticleAd1Enabled: boolean;
  inArticleAd2Enabled: boolean;
  desktopRightRailEnabled: boolean;
};
