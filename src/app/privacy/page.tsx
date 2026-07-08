import type { Metadata } from "next";
import Link from "next/link";

import { TrustPageShell } from "@/components/trust/TrustPageShell";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "A straightforward overview of what information PupQuestions may collect and how the site handles privacy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <TrustPageShell
      title="Privacy Policy"
      description="A simple, honest overview of how PupQuestions handles information."
      path="/privacy"
    >
      <p className="text-sm text-stone-600">Last updated: July 2026</p>

      <h2>Overview</h2>
      <p>
        PupQuestions is a general-audience educational website about dog care
        topics. This privacy policy explains, in plain language, what
        information the site may involve and how we think about privacy at
        launch.
      </p>

      <h2>Information you provide</h2>
      <p>
        If you contact PupQuestions — for example, to report a correction or
        send feedback — you may choose to share information such as your name,
        email address, and the content of your message. We use that information
        only to respond to your inquiry and improve the site as appropriate.
      </p>
      <p>
        You can reach us at{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-medium text-amber-800 underline decoration-amber-300 underline-offset-2 transition hover:text-amber-900"
        >
          {siteConfig.contactEmail}
        </a>{" "}
        or through our <Link href="/contact">contact page</Link>.
      </p>

      <h2>Technical and log data</h2>
      <p>
        Like most websites, PupQuestions is hosted on infrastructure that may
        process basic technical data — such as IP addresses, browser type,
        request timestamps, and server logs — to deliver pages securely and
        reliably. Hosting providers handle this data according to their own
        policies.
      </p>

      <h2>Analytics and advertising</h2>
      <p>
        PupQuestions uses Google AdSense, a Google advertising service, to show
        ads on article pages. Google and other third-party vendors may use
        cookies or similar technologies to serve those ads.
      </p>
      <p>
        Google&apos;s use of advertising cookies enables it and its partners to
        serve ads to you based on your visit to this site and/or other sites on
        the Internet. PupQuestions does not currently use a separate analytics
        service beyond what hosting and advertising partners may process when
        delivering pages.
      </p>
      <p>
        You can manage or opt out of personalized advertising through{" "}
        <a
          href="https://adssettings.google.com"
          className="font-medium text-amber-800 underline decoration-amber-300 underline-offset-2 transition hover:text-amber-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Ads Settings
        </a>
        . For more about how Google uses data, see{" "}
        <a
          href="https://policies.google.com/privacy"
          className="font-medium text-amber-800 underline decoration-amber-300 underline-offset-2 transition hover:text-amber-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google&apos;s Privacy Policy
        </a>
        .
      </p>

      <h2>Cookies</h2>
      <p>
        Third-party vendors, including Google, may set advertising cookies when
        you visit PupQuestions article pages. Those cookies help deliver ads and
        may be used to show ads based on your activity on this site and other
        sites.
      </p>
      <p>
        Basic cookies or similar technologies may also be used by hosting or CDN
        infrastructure as needed to serve the site. If cookie use changes
        materially, this policy will be updated.
      </p>

      <h2>Third-party links</h2>
      <p>
        Some PupQuestions pages link to external websites — for example,
        reference sources or organizations. Those sites have their own privacy
        practices, and PupQuestions is not responsible for how third parties
        handle information.
      </p>

      <h2>Children</h2>
      <p>
        PupQuestions is intended for a general audience of dog owners and is not
        directed at collecting personal information from children. If you believe
        a child has provided personal information through our contact email,
        please reach out at{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-medium text-amber-800 underline decoration-amber-300 underline-offset-2 transition hover:text-amber-900"
        >
          {siteConfig.contactEmail}
        </a>{" "}
        so we can address it.
      </p>

      <h2>Policy updates</h2>
      <p>
        We may update this privacy policy as the site evolves — for example, if
        we add contact methods, analytics, or advertising. When we make
        meaningful changes, we will update the date at the top of this page.
      </p>

      <h2>Questions and corrections</h2>
      <p>
        For privacy-related questions or to report an issue with site content,
        see our <Link href="/contact">contact page</Link>.
      </p>
    </TrustPageShell>
  );
}
