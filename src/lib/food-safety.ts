import type { SafetyLevel } from "@/types/content";

type QuickAnswerVariant = "neutral" | "safe" | "caution" | "unsafe";

export type SafetyStatusStyle = {
  label: string;
  quickAnswerLabel: string;
  variant: QuickAnswerVariant;
  badge: string;
  dot: string;
};

const SAFETY_STATUS: Record<SafetyLevel, SafetyStatusStyle> = {
  safe: {
    label: "Generally safe",
    quickAnswerLabel: "Generally safe",
    variant: "safe",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-900",
    dot: "bg-emerald-500",
  },
  moderation: {
    label: "Safe in moderation",
    quickAnswerLabel: "Safe in moderation",
    variant: "safe",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-900",
    dot: "bg-emerald-500",
  },
  caution: {
    label: "Use caution",
    quickAnswerLabel: "Use caution",
    variant: "caution",
    badge: "border-amber-200 bg-amber-50 text-amber-900",
    dot: "bg-amber-500",
  },
  "not-recommended": {
    label: "Not recommended",
    quickAnswerLabel: "Not recommended",
    variant: "caution",
    badge: "border-amber-200 bg-amber-50 text-amber-900",
    dot: "bg-amber-500",
  },
  unsafe: {
    label: "Unsafe",
    quickAnswerLabel: "Unsafe",
    variant: "unsafe",
    badge: "border-red-200 bg-red-50 text-red-900",
    dot: "bg-red-500",
  },
  toxic: {
    label: "Toxic — avoid",
    quickAnswerLabel: "Toxic — avoid",
    variant: "unsafe",
    badge: "border-red-200 bg-red-50 text-red-900",
    dot: "bg-red-600",
  },
};

export function getSafetyStatus(level: SafetyLevel): SafetyStatusStyle {
  return SAFETY_STATUS[level];
}

export function safetyLevelToQuickAnswerVariant(
  level: SafetyLevel,
): QuickAnswerVariant {
  return getSafetyStatus(level).variant;
}

export function getSafetyLevelLabel(level: SafetyLevel): string {
  return getSafetyStatus(level).label;
}

export function getSafetyQuickAnswerLabel(level: SafetyLevel): string {
  return getSafetyStatus(level).quickAnswerLabel;
}
