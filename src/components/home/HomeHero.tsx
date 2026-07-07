import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

type HomeHeroProps = {
  children: ReactNode;
};

function PawPrint({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="32" cy="42" rx="13" ry="11" />
      <ellipse cx="17" cy="24" rx="6.5" ry="8.5" transform="rotate(-20 17 24)" />
      <ellipse cx="32" cy="17" rx="6.5" ry="8.5" />
      <ellipse cx="47" cy="24" rx="6.5" ry="8.5" transform="rotate(20 47 24)" />
      <ellipse cx="54" cy="36" rx="5.5" ry="7.5" transform="rotate(35 54 36)" />
    </svg>
  );
}

/**
 * Ten paws framing the hero — corner anchors with paired outer-edge accents.
 * Placement stays outside the headline/search zone for a cleaner center.
 */
const decorativePaws = [
  "absolute left-[5%] top-[10%] h-14 w-14 -rotate-[28deg] text-amber-900/[0.072] sm:h-[4rem] sm:w-[4rem]",
  "absolute right-[5%] top-[10%] h-14 w-14 rotate-[28deg] text-amber-900/[0.072] sm:h-[4rem] sm:w-[4rem]",
  "absolute left-[12%] top-[22%] h-11 w-11 -rotate-[18deg] text-amber-900/[0.058] sm:h-12 sm:w-12",
  "absolute right-[12%] top-[22%] h-11 w-11 rotate-[18deg] text-amber-900/[0.058] sm:h-12 sm:w-12",
  "absolute left-[8%] top-[78%] h-11 w-11 rotate-[16deg] text-amber-900/[0.058] sm:h-12 sm:w-12",
  "absolute right-[8%] top-[78%] h-11 w-11 -rotate-[16deg] text-amber-900/[0.058] sm:h-12 sm:w-12",
  "absolute left-[6%] top-[88%] h-14 w-14 -rotate-[12deg] text-amber-900/[0.072] sm:h-[4rem] sm:w-[4rem]",
  "absolute right-[6%] top-[88%] h-14 w-14 rotate-[12deg] text-amber-900/[0.072] sm:h-[4rem] sm:w-[4rem]",
  "absolute left-[16%] top-[14%] hidden h-10 w-10 -rotate-[32deg] text-amber-900/[0.05] sm:block",
  "absolute right-[16%] top-[14%] hidden h-10 w-10 rotate-[32deg] text-amber-900/[0.05] sm:block",
] as const;

export function HomeHero({ children }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200/90 bg-gradient-to-b from-amber-50/60 via-stone-50/40 to-white">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {decorativePaws.map((className) => (
          <PawPrint key={className} className={className} />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.28)_55%,transparent_100%)]" />
      </div>

      <Container className="relative py-14 sm:py-20">{children}</Container>
    </section>
  );
}
