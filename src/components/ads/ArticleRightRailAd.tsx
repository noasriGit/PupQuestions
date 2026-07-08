import { adsConfig } from "@/data/ads";
import { AdPlacementLabel } from "@/components/ads/AdPlacementLabel";
import { AdSlot } from "@/components/ads/AdSlot";
import { cn } from "@/lib/cn";
import { isDesktopRightRailEnabled } from "@/lib/ads";

type ArticleRightRailAdProps = {
  className?: string;
};

export function ArticleRightRailAd({ className }: ArticleRightRailAdProps) {
  if (!isDesktopRightRailEnabled()) {
    return null;
  }

  return (
    <aside
      className={cn("hidden xl:block", className)}
      aria-label="Advertisement"
    >
      <AdPlacementLabel className="my-0 min-h-[250px] xl:sticky xl:top-24">
        <AdSlot
          insProps={{
            style: { display: "block" },
            "data-ad-client": adsConfig.client,
            "data-ad-slot": adsConfig.slots.rightRail,
            "data-ad-format": "auto",
            "data-full-width-responsive": "true",
          }}
        />
      </AdPlacementLabel>
    </aside>
  );
}
