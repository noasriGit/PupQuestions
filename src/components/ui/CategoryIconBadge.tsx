import { getCategoryIconBadgeClasses } from "@/components/ui/category-hero";
import { cn } from "@/lib/cn";
import type { ContentCategory } from "@/types/content";

type CategoryIconBadgeProps = {
  icon: string;
  category?: ContentCategory;
  className?: string;
};

export function CategoryIconBadge({
  icon,
  category,
  className,
}: CategoryIconBadgeProps) {
  return (
    <span
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl",
        category ? getCategoryIconBadgeClasses(category) : "bg-amber-50",
        className,
      )}
      aria-hidden="true"
    >
      {icon}
    </span>
  );
}
