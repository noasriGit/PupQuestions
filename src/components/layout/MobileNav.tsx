"use client";

import { useEffect, useId, useRef, useState } from "react";

import { NavLink } from "@/components/ui/NavLink";
import { cn } from "@/lib/cn";
import type { SiteSection } from "@/types/site";

type MobileNavProps = {
  sections: SiteSection[];
  siteName: string;
};

const navActiveClassName =
  "bg-amber-50 font-semibold text-amber-900 underline decoration-amber-600 decoration-2 underline-offset-4";

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
}

export function MobileNav({ sections, siteName }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  function closeMenu(returnFocus = true) {
    setIsOpen(false);
    if (returnFocus) {
      menuButtonRef.current?.focus();
    }
  }

  function toggleMenu() {
    setIsOpen((open) => {
      if (open) {
        queueMicrotask(() => menuButtonRef.current?.focus());
      }
      return !open;
    });
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleTabTrap = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusable = getFocusableElements(menuRef.current);

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTabTrap);
    document.body.style.overflow = "hidden";

    const firstLink = menuRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTabTrap);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="true"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 5.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-stone-900/20"
            aria-label="Close menu"
            onClick={() => closeMenu()}
          />
          <nav
            ref={menuRef}
            id={menuId}
            aria-label="Mobile navigation"
            className="fixed inset-x-4 top-[4.5rem] z-50 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl border border-stone-200 bg-white p-4 shadow-lg"
          >
            <p className="px-2 text-xs font-semibold uppercase tracking-wide text-stone-600">
              Browse topics
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <NavLink
                  href="/"
                  exact
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-amber-50 hover:text-amber-800",
                  )}
                  activeClassName={navActiveClassName}
                  onClick={() => closeMenu(false)}
                >
                  Home
                </NavLink>
              </li>
              {sections.map((section) => (
                <li key={section.slug}>
                  <NavLink
                    href={section.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-amber-50 hover:text-amber-800"
                    activeClassName={navActiveClassName}
                    onClick={() => closeMenu(false)}
                  >
                    {section.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-stone-100 px-2 pt-4 text-xs text-stone-600">
              {siteName} — trusted answers for dog owners
            </p>
          </nav>
        </>
      ) : null}
    </div>
  );
}
