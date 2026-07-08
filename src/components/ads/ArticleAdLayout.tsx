import type { ReactNode } from "react";

import { ArticleRightRailAd } from "@/components/ads/ArticleRightRailAd";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { isDesktopRightRailEnabled } from "@/lib/ads";

type ArticleAdLayoutProps = {
  topArea: ReactNode;
  children: ReactNode;
  afterBody?: ReactNode;
};

export function ArticleAdLayout({
  topArea,
  children,
  afterBody,
}: ArticleAdLayoutProps) {
  const showRightRail = isDesktopRightRailEnabled();

  return (
    <Container
      size="narrow"
      as="article"
      aria-labelledby="article-title"
      className={cn(showRightRail && "overflow-visible")}
    >
      {topArea}

      <div className="relative">
        {children}
        {showRightRail ? (
          <ArticleRightRailAd className="absolute left-1/2 top-0 ml-[calc(24rem+2.5rem)] w-[300px]" />
        ) : null}
      </div>

      {afterBody}
    </Container>
  );
}
