"use client";

import { NavLink } from "@/components/ui/NavLink";
import type { SiteSection } from "@/types/site";

const navActiveClassName =
  "bg-amber-50 font-semibold text-amber-900 underline decoration-amber-600 decoration-2 underline-offset-4";

export function DesktopNav({ sections }: { sections: SiteSection[] }) {
  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
        {sections.map((section) => (
          <li key={section.slug}>
            <NavLink
              href={section.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-amber-50 hover:text-amber-800"
              activeClassName={navActiveClassName}
            >
              {section.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
