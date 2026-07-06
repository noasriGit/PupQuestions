import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerSize = "default" | "narrow" | "wide";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: "div" | "section" | "article";
};

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className = "",
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Alias for page-level layout containers. */
export const PageContainer = Container;
