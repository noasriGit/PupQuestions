import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  variant?: "default" | "muted" | "accent";
};

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variantClasses = {
  default: "border-stone-200 bg-white",
  muted: "border-stone-200 bg-stone-50",
  accent: "border-amber-200 bg-amber-50/50",
};

export function Card({
  children,
  className,
  padding = "md",
  variant = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border shadow-sm",
        paddingClasses[padding],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
