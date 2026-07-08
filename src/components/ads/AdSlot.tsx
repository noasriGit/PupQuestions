"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type AdSlotInsProps = {
  style?: React.CSSProperties;
  "data-ad-client": string;
  "data-ad-slot": string;
  "data-ad-format"?: string;
  "data-ad-layout"?: string;
  "data-full-width-responsive"?: string;
};

type AdSlotProps = {
  insProps: AdSlotInsProps;
  className?: string;
};

export function AdSlot({ insProps, className }: AdSlotProps) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      // AdSense may be unavailable in local/dev; do not crash the page.
    }
  }, []);

  return (
    <ins
      className={cn("adsbygoogle", className)}
      {...insProps}
    />
  );
}
