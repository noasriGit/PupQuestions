import { cn } from "@/lib/cn";

type SearchPlaceholderProps = {
  placeholder?: string;
  className?: string;
  hint?: string;
};

export function SearchPlaceholder({
  placeholder = "Search dog questions…",
  className,
  hint = "Search coming in a future phase",
}: SearchPlaceholderProps) {
  return (
    <div className={className}>
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
          disabled
          aria-disabled="true"
          aria-label={placeholder}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-xl border border-stone-200 bg-white py-3.5 pl-12 pr-4 text-base text-stone-900 shadow-sm",
            "placeholder:text-stone-400",
            "disabled:cursor-not-allowed disabled:opacity-80",
          )}
        />
      </div>
      {hint ? (
        <p className="mt-2 text-sm text-stone-500">{hint}</p>
      ) : null}
    </div>
  );
}
