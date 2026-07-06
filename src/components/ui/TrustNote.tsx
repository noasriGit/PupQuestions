import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type TrustNoteProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function TrustNote({
  title = "Dog safety comes first",
  children,
  className,
}: TrustNoteProps) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6",
        className,
      )}
      role="note"
    >
      <div className="flex gap-3">
        <span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <div>
          <p className="text-sm font-semibold text-emerald-900">{title}</p>
          <div className="mt-1.5 text-sm leading-relaxed text-emerald-950/80">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
