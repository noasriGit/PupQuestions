import type { UrgencyLevel } from "@/types/content";

type QuickAnswerVariant = "neutral" | "safe" | "caution" | "unsafe";

export type UrgencyStatusStyle = {
  label: string;
  quickAnswerLabel: string;
  variant: QuickAnswerVariant;
  badge: string;
  dot: string;
};

const URGENCY_STATUS: Record<UrgencyLevel, UrgencyStatusStyle> = {
  "monitor-at-home": {
    label: "Monitor at home",
    quickAnswerLabel: "Monitor at home",
    variant: "neutral",
    badge: "border-sky-200 bg-sky-50 text-sky-900",
    dot: "bg-sky-500",
  },
  "call-your-vet": {
    label: "Call your vet",
    quickAnswerLabel: "Call your vet",
    variant: "caution",
    badge: "border-amber-200 bg-amber-50 text-amber-900",
    dot: "bg-amber-500",
  },
  "urgent-vet-care": {
    label: "Urgent vet care",
    quickAnswerLabel: "Urgent vet care",
    variant: "unsafe",
    badge: "border-orange-200 bg-orange-50 text-orange-950",
    dot: "bg-orange-500",
  },
  emergency: {
    label: "Emergency",
    quickAnswerLabel: "Emergency",
    variant: "unsafe",
    badge: "border-red-200 bg-red-50 text-red-900",
    dot: "bg-red-600",
  },
};

export function getUrgencyStatus(level: UrgencyLevel): UrgencyStatusStyle {
  return URGENCY_STATUS[level];
}

export function urgencyLevelToQuickAnswerVariant(
  level: UrgencyLevel,
): QuickAnswerVariant {
  return getUrgencyStatus(level).variant;
}

export function getUrgencyLevelLabel(level: UrgencyLevel): string {
  return getUrgencyStatus(level).label;
}

export function getUrgencyQuickAnswerLabel(level: UrgencyLevel): string {
  return getUrgencyStatus(level).quickAnswerLabel;
}
