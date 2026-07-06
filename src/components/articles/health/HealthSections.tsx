import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { getUrgencyStatus } from "@/lib/health";
import type { HealthContentBlock, UrgencyLevel } from "@/types/content";

type UrgencyStatusBadgeProps = {
  level: UrgencyLevel;
  className?: string;
};

export function UrgencyStatusBadge({ level, className }: UrgencyStatusBadgeProps) {
  const status = getUrgencyStatus(level);

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

type HealthSectionProps = {
  heading: string;
  children: ReactNode;
  className?: string;
};

export function HealthSection({ heading, children, className }: HealthSectionProps) {
  return (
    <section className={className}>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}

type HealthBlockContentProps = HealthContentBlock;

export function HealthBlockContent({ paragraphs, listItems }: HealthBlockContentProps) {
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

type EmergencySignsCalloutProps = {
  children: ReactNode;
  className?: string;
};

export function EmergencySignsCallout({
  children,
  className,
}: EmergencySignsCalloutProps) {
  return (
    <aside
      className={cn(
        "rounded-xl border-2 border-red-300 bg-red-50/90 p-5 sm:p-6",
        className,
      )}
      role="alert"
    >
      <div className="flex gap-3">
        <span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-200 text-sm font-bold text-red-800"
          aria-hidden="true"
        >
          !
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-red-900">
            Emergency warning signs
          </p>
          <div className="mt-2 text-sm leading-relaxed text-red-950/90">{children}</div>
        </div>
      </div>
    </aside>
  );
}

type MedicationSafetyNoteProps = {
  children: ReactNode;
  className?: string;
};

export function MedicationSafetyNote({
  children,
  className,
}: MedicationSafetyNoteProps) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-amber-300 bg-amber-50/90 p-5 sm:p-6",
        className,
      )}
      role="note"
    >
      <div className="flex gap-3">
        <span
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-900"
          aria-hidden="true"
        >
          Rx
        </span>
        <div>
          <p className="text-sm font-semibold text-amber-950">Medication safety</p>
          <div className="mt-1.5 text-sm leading-relaxed text-amber-950/90">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
