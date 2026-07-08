import { adsConfig } from "@/data/ads";
import { AdPlacementLabel } from "@/components/ads/AdPlacementLabel";
import { AdSlot } from "@/components/ads/AdSlot";
import {
  isInArticleAd1Enabled,
  isInArticleAd2Enabled,
} from "@/lib/ads";

type InArticleAdSlotProps = {
  placement: 1 | 2;
  showSecondAd?: boolean;
};

export function InArticleAdSlot({
  placement,
  showSecondAd = true,
}: InArticleAdSlotProps) {
  const enabled =
    placement === 1
      ? isInArticleAd1Enabled()
      : isInArticleAd2Enabled(showSecondAd);

  if (!enabled) {
    return null;
  }

  return (
    <AdPlacementLabel>
      <AdSlot
        insProps={{
          style: { display: "block", textAlign: "center" },
          "data-ad-layout": "in-article",
          "data-ad-format": "fluid",
          "data-ad-client": adsConfig.client,
          "data-ad-slot": adsConfig.slots.inArticle,
        }}
      />
    </AdPlacementLabel>
  );
}
