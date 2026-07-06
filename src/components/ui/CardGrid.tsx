import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardGridProps = {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function CardGrid({
  children,
  className,
  columns = 3,
}: CardGridProps) {
  return (
    <ul
      className={cn(
        "grid gap-5 sm:gap-6",
        columnClasses[columns],
        className,
      )}
    >
      {children}
    </ul>
  );
}
