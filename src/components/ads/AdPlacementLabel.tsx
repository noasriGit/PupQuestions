import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type AdPlacementLabelProps = {
  children: ReactNode;
  className?: string;
};

export function AdPlacementLabel({ children, className }: AdPlacementLabelProps) {
  return (
    <div
      className={cn("my-8 min-h-[120px]", className)}
      role="complementary"
      aria-label="Advertisement"
    >
      <p
        className="mb-2 text-center text-xs font-medium uppercase tracking-wide text-stone-400"
        aria-hidden="true"
      >
        Advertisement
      </p>
      {children}
    </div>
  );
}
