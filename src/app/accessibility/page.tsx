import type { Metadata } from "next";
import Link from "next/link";

import { TrustPageShell } from "@/components/trust/TrustPageShell";
import { siteConfig } from "@/data/site";
import { SITE_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Accessibility",
  description:
    "How PupQuestions is working to improve website accessibility and how to report barriers you encounter.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  const { contactEmail } = siteConfig;

  return (
    <TrustPageShell
      title="Accessibility"
      description={`${SITE_NAME} is committed to making our website accessible and usable for as many people as possible.`}
      path="/accessibility"
    >
      <h2>Our commitment</h2>
      <p>
        {SITE_NAME} is committed to making our website accessible and usable for
        as many people as possible. We aim to follow generally recognized
        accessibility standards, including WCAG 2.1 AA and WCAG 2.2 AA where
        practical.
      </p>
      <p>
        Accessibility is an ongoing effort. We regularly review our site
        structure, navigation, content, and interactive features to identify
        barriers and make improvements.
      </p>

      <h2>What we are working toward</h2>
      <p>
        Our practical goal is to align with WCAG 2.1 AA and WCAG 2.2 AA
        guidelines where reasonably achievable. This includes efforts related to:
      </p>
      <ul>
        <li>Keyboard navigation and visible focus indicators</li>
        <li>Semantic page structure and descriptive headings</li>
        <li>Readable text contrast and clear link and button labels</li>
        <li>Accessible forms and search features</li>
        <li>Screen reader compatibility for navigation and content</li>
        <li>Respect for reduced-motion preferences</li>
      </ul>
      <p>
        We do not claim that this website is fully compliant, legally compliant,
        certified accessible, or guaranteed to meet every accessibility
        requirement.
      </p>

      <h2>Report a barrier</h2>
      <p>
        If you experience difficulty accessing any part of this website, please
        contact us so we can assist you and work to address the issue. When
        reporting a barrier, it helps if you include:
      </p>
      <ul>
        <li>The page URL where you encountered the issue</li>
        <li>A brief description of the problem</li>
        <li>The browser and assistive technology you were using, if applicable</li>
      </ul>
      <p>
        Email us at{" "}
        <a
          href={`mailto:${contactEmail}?subject=Accessibility%20feedback`}
          className="font-medium text-amber-800 underline decoration-amber-300 underline-offset-2 transition hover:text-amber-900"
        >
          {contactEmail}
        </a>
        . You can also visit our{" "}
        <Link href="/contact">contact page</Link> for other ways to reach us.
      </p>

      <h2>Third-party content</h2>
      <p>
        Some pages may link to external websites or reference third-party
        resources. We cannot control the accessibility of content outside
        {` ${SITE_NAME}`}, but we choose reputable sources where possible and
        note when links open in a new tab.
      </p>

      <h2>Ongoing improvements</h2>
      <p>
        We welcome feedback from readers, including people who use assistive
        technologies. Your reports help us prioritize fixes and make the site
        more usable for everyone. Thank you for helping us improve.
      </p>
    </TrustPageShell>
  );
}
