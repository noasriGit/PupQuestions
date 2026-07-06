import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { getSafetyStatus } from "@/lib/food-safety";
import type { SafetyLevel } from "@/types/content";

type SafetyStatusBadgeProps = {
  level: SafetyLevel;
  className?: string;
};

export function SafetyStatusBadge({ level, className }: SafetyStatusBadgeProps) {
  const status = getSafetyStatus(level);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
        status.badge,
        className,
      )}
    >
      <span
        className={cn("h-2 w-2 shrink-0 rounded-full", status.dot)}
        aria-hidden="true"
      />
      {status.label}
    </span>
  );
}

type FoodSafetySectionProps = {
  heading: string;
  children: ReactNode;
  className?: string;
};

export function FoodSafetySection({
  heading,
  children,
  className,
}: FoodSafetySectionProps) {
  return (
    <section className={className}>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}

type FoodSafetyBlockContentProps = {
  paragraphs: string[];
  listItems?: string[];
};

export function FoodSafetyBlockContent({
  paragraphs,
  listItems,
}: FoodSafetyBlockContentProps) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      {listItems && listItems.length > 0 ? (
        <ul>
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

type EmergencyNoteProps = {
  children: ReactNode;
  className?: string;
};

export function EmergencyNote({ children, className }: EmergencyNoteProps) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-red-200 bg-red-50/80 p-5 sm:p-6",
        className,
      )}
      role="note"
    >
      <div className="flex gap-3">
        <span
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700"
          aria-hidden="true"
        >
          !
        </span>
        <div className="text-sm leading-relaxed text-red-950/90">{children}</div>
      </div>
    </aside>
  );
}
