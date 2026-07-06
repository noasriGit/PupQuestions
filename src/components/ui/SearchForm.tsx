"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { cn } from "@/lib/cn";
import { buildSearchHref } from "@/lib/search";
import type { ContentCategory } from "@/types/content";

type SearchFormProps = {
  defaultQuery?: string;
  defaultCategory?: ContentCategory;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  showHint?: boolean;
};

export function SearchForm({
  defaultQuery = "",
  defaultCategory,
  placeholder = "Search dog questions…",
  className,
  inputClassName,
  showHint = false,
}: SearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(buildSearchHref(query, defaultCategory));
  }

  return (
    <form className={className} onSubmit={handleSubmit} role="search">
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-stone-400"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label={placeholder}
          placeholder={placeholder}
          enterKeyHint="search"
          className={cn(
            "w-full rounded-xl border border-stone-200 bg-white py-3.5 pl-12 pr-24 text-base text-stone-900 shadow-sm",
            "placeholder:text-stone-400",
            "focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200",
            inputClassName,
          )}
        />
        <button
          type="submit"
          className="absolute inset-y-1.5 right-1.5 rounded-lg bg-amber-700 px-4 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          Search
        </button>
      </div>
      {showHint ? (
        <p className="mt-2 text-sm text-stone-500">
          Search published guides across nutrition, health, behavior, training,
          and more.
        </p>
      ) : null}
    </form>
  );
}
