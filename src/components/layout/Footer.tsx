import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/ui/NavLink";
import { SITE_NAME } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { sections } from "@/data/sections";

const footerActiveClassName =
  "font-semibold text-amber-900 underline decoration-amber-600 decoration-2 underline-offset-4";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <NavLink
              href="/"
              exact
              className="text-base font-bold text-stone-900 transition hover:text-amber-800"
              activeClassName={footerActiveClassName}
              aria-label={`${SITE_NAME} home`}
            >
              {SITE_NAME}
            </NavLink>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p id="footer-topics-heading" className="text-sm font-semibold text-stone-900">
              Topics
            </p>
            <ul
              className="mt-3 space-y-2.5 text-sm text-stone-600"
              aria-labelledby="footer-topics-heading"
            >
              {sections.slice(0, 4).map((section) => (
                <li key={section.slug}>
                  <NavLink
                    href={section.href}
                    className="transition hover:text-amber-800"
                    activeClassName={footerActiveClassName}
                  >
                    {section.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p id="footer-more-topics-heading" className="text-sm font-semibold text-stone-900">
              More topics
            </p>
            <ul
              className="mt-3 space-y-2.5 text-sm text-stone-600"
              aria-labelledby="footer-more-topics-heading"
            >
              {sections.slice(4).map((section) => (
                <li key={section.slug}>
                  <NavLink
                    href={section.href}
                    className="transition hover:text-amber-800"
                    activeClassName={footerActiveClassName}
                  >
                    {section.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p id="footer-about-heading" className="text-sm font-semibold text-stone-900">
              About
            </p>
            <ul
              className="mt-3 space-y-2.5 text-sm text-stone-600"
              aria-labelledby="footer-about-heading"
            >
              <li>
                <NavLink
                  href="/about"
                  exact
                  className="transition hover:text-amber-800"
                  activeClassName={footerActiveClassName}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/editorial-standards"
                  exact
                  className="transition hover:text-amber-800"
                  activeClassName={footerActiveClassName}
                >
                  Editorial standards
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  exact
                  className="transition hover:text-amber-800"
                  activeClassName={footerActiveClassName}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/accessibility"
                  exact
                  className="transition hover:text-amber-800"
                  activeClassName={footerActiveClassName}
                >
                  Accessibility
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/privacy"
                  exact
                  className="transition hover:text-amber-800"
                  activeClassName={footerActiveClassName}
                >
                  Privacy
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/sitemap"
                  exact
                  className="transition hover:text-amber-800"
                  activeClassName={footerActiveClassName}
                >
                  Sitemap
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-stone-200 pt-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
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
