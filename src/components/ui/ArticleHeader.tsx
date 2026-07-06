import type { ReactNode } from "react";

import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type ArticleHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  meta?: ReactNode;
  className?: string;
};

export function ArticleHeader({
  title,
  description,
  breadcrumbs,
  meta,
  className,
}: ArticleHeaderProps) {
  return (
    <header className={cn("border-b border-stone-200 bg-white", className)}>
      <Container size="narrow" className="py-10 sm:py-12">
        {breadcrumbs ? (
          <Breadcrumb items={breadcrumbs} className="mb-4" />
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone-600">
            {description}
          </p>
        ) : null}
        {meta ? (
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-500">
            {meta}
          </div>
        ) : null}
      </Container>
    </header>
  );
}
