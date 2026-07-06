"use client";

import { useId, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type QuickAnswerVariant = "neutral" | "safe" | "caution" | "unsafe";

type QuickAnswerBoxProps = {
  label?: string;
  children: ReactNode;
  variant?: QuickAnswerVariant;
  className?: string;
};

const variantStyles: Record<
  QuickAnswerVariant,
  { container: string; label: string; icon: string }
> = {
  neutral: {
    container: "border-stone-200 bg-white",
    label: "text-stone-700",
    icon: "bg-stone-100 text-stone-600",
  },
  safe: {
    container: "border-emerald-200 bg-emerald-50/80",
    label: "text-emerald-800",
    icon: "bg-emerald-100 text-emerald-700",
  },
  caution: {
    container: "border-amber-200 bg-amber-50/80",
    label: "text-amber-900",
    icon: "bg-amber-100 text-amber-800",
  },
  unsafe: {
    container: "border-red-200 bg-red-50/80",
    label: "text-red-900",
    icon: "bg-red-100 text-red-800",
  },
};

export function QuickAnswerBox({
  label = "Quick answer",
  children,
  variant = "neutral",
  className,
}: QuickAnswerBoxProps) {
  const styles = variantStyles[variant];
  const labelId = useId();

  return (
    <div
      role="region"
      aria-labelledby={labelId}
      className={cn(
        "rounded-xl border p-5 sm:p-6",
        styles.container,
        className,
      )}
    >
      <div className="flex gap-3">
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
            styles.icon,
          )}
          aria-hidden="true"
        >
          A
        </span>
        <div>
          <p id={labelId} className={cn("text-xs font-semibold uppercase tracking-wide", styles.label)}>
            {label}
          </p>
          <div className="mt-1.5 text-base font-medium leading-relaxed text-stone-900">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
