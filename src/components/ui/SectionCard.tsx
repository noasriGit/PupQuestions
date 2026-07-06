import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type SectionCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  className?: string;
};

export function SectionCard({
  title,
  description,
  href,
  icon,
  className,
}: SectionCardProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <Card
        padding="md"
        className="flex h-full flex-col transition hover:border-amber-300 hover:shadow-md"
      >
        {icon ? (
          <span
            className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-lg"
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : null}
        <h3 className="text-lg font-semibold text-stone-900 group-hover:text-amber-800">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
          {description}
        </p>
        <span className="mt-4 text-sm font-medium text-amber-700 group-hover:text-amber-800">
          Explore section →
        </span>
      </Card>
    </Link>
  );
}
