"use client";

import { useId, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type DisclaimerBoxProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function DisclaimerBox({
  title = "Important disclaimer",
  children,
  className,
}: DisclaimerBoxProps) {
  const titleId = useId();

  return (
    <aside
      className={cn(
        "rounded-xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6",
        className,
      )}
      role="note"
      aria-labelledby={titleId}
    >
      <div className="flex gap-3">
        <span
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800"
          aria-hidden="true"
        >
          !
        </span>
        <div>
          <p id={titleId} className="text-sm font-semibold text-amber-900">{title}</p>
          <div className="mt-1.5 text-sm leading-relaxed text-amber-950">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
