import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ArticleBodyProps = {
  children: ReactNode;
  className?: string;
};

export function ArticleBody({ children, className }: ArticleBodyProps) {
  return (
    <div className={cn("article-body max-w-none py-8 sm:py-10", className)}>
      {children}
    </div>
  );
}
