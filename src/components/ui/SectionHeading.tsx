import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  action,
  className,
  id,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-8",
        isCenter && "mx-auto max-w-2xl text-center",
        action
          ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          : undefined,
        className,
      )}
    >
      <div className={cn(isCenter && "mx-auto")}>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            {eyebrow}
          </p>
        ) : null}
        <Heading
          id={id}
          className={cn(
            "text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl",
            eyebrow && "mt-2",
            Heading === "h1" && "sm:text-4xl",
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={cn(
              "mt-2 text-base leading-relaxed text-stone-600 sm:text-lg",
              isCenter && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
