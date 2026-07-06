import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/constants";
import { sections } from "@/data/sections";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-stone-900 transition hover:text-amber-800"
            aria-label={`${SITE_NAME} home`}
          >
            {SITE_NAME}
          </Link>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {sections.map((section) => (
                <li key={section.slug}>
                  <Link
                    href={section.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-amber-50 hover:text-amber-800"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <MobileNav sections={sections} siteName={SITE_NAME} />
        </div>
      </Container>
    </header>
  );
}
