import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { sections } from "@/data/sections";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-base font-bold text-stone-900 transition hover:text-amber-800"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">Topics</p>
            <ul className="mt-3 space-y-2.5 text-sm text-stone-600">
              {sections.slice(0, 4).map((section) => (
                <li key={section.slug}>
                  <Link
                    href={section.href}
                    className="transition hover:text-amber-800"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">More topics</p>
            <ul className="mt-3 space-y-2.5 text-sm text-stone-600">
              {sections.slice(4).map((section) => (
                <li key={section.slug}>
                  <Link
                    href={section.href}
                    className="transition hover:text-amber-800"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">About</p>
            <ul className="mt-3 space-y-2.5 text-sm text-stone-600">
              <li>
                <Link href="/" className="transition hover:text-amber-800">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-stone-400">Editorial standards (soon)</span>
              </li>
              <li>
                <span className="text-stone-400">Contact (soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-stone-200 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm">
            Educational content only — not veterinary advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
