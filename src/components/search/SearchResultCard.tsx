import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { SearchResult } from "@/lib/search";

type SearchResultCardProps = {
  result: SearchResult;
};

export function SearchResultCard({ result }: SearchResultCardProps) {
  return (
    <Link href={result.href} className="group block">
      <Card
        padding="sm"
        className="transition hover:border-amber-300 hover:shadow-md"
      >
        <p className="font-medium text-stone-900 group-hover:text-amber-800">
          {result.title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-stone-600 line-clamp-2">
          {result.description}
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-stone-500">
          {result.categoryTitle}
        </p>
      </Card>
    </Link>
  );
}
