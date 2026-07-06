import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/ui/NavLink";
import { SITE_NAME } from "@/lib/constants";
import { sections } from "@/data/sections";

const logoActiveClassName =
  "font-bold text-amber-900 underline decoration-amber-600 decoration-2 underline-offset-4";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <NavLink
            href="/"
            exact
            className="text-lg font-bold tracking-tight text-stone-900 transition hover:text-amber-800"
            activeClassName={logoActiveClassName}
            aria-label={`${SITE_NAME} home`}
          >
            {SITE_NAME}
          </NavLink>

          <DesktopNav sections={sections} />

          <MobileNav sections={sections} siteName={SITE_NAME} />
        </div>
      </Container>
    </header>
  );
}
