import type { Metadata } from "next";
import Link from "next/link";

import { TrustPageShell } from "@/components/trust/TrustPageShell";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "How to reach PupQuestions with corrections, feedback, source suggestions, or general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <TrustPageShell
      title="Contact"
      description="Questions, corrections, and feedback help us keep PupQuestions accurate and useful."
      path="/contact"
    >
      <h2>Get in touch</h2>
      <p>
        PupQuestions welcomes thoughtful feedback from readers. If something on
        the site looks wrong, outdated, or unclear, we want to hear about it —
        especially when safety is involved.
      </p>
      <p>
        A public contact email will be added before launch. Until then, this
        page explains what to contact us about and how we handle requests.
      </p>

      <h2>Reasons to contact us</h2>
      <ul>
        <li>
          <strong>Correction requests</strong> — factual errors, outdated
          guidance, broken links, or unclear safety information
        </li>
        <li>
          <strong>Source suggestions</strong> — reputable references that could
          improve a page
        </li>
        <li>
          <strong>General feedback</strong> — readability, missing topics, or
          ways to make answers more helpful
        </li>
        <li>
          <strong>Partnership or media inquiries</strong> — for future
          collaboration opportunities as the site grows
        </li>
      </ul>

      <h2>Corrections and safety</h2>
      <p>
        If you believe a page contains incorrect or potentially harmful
        information — especially around food toxicity, medications, or emergency
        symptoms — please flag it promptly once a contact email is available.
        We review correction reports and update content when we confirm an
        error or find a better source.
      </p>
      <p>
        See our{" "}
        <Link href="/editorial-standards">editorial standards</Link> for more on
        how we handle updates and corrections.
      </p>

      <DisclaimerBox title="This is not an emergency contact">
        <p>
          Do not use this page for urgent dog health concerns. Contact your
          veterinarian, an emergency veterinary clinic, or animal poison control
          if your dog may have eaten something toxic, is in distress, or needs
          immediate medical attention.
        </p>
      </DisclaimerBox>

      <h2>What we cannot help with through contact</h2>
      <p>
        PupQuestions cannot diagnose your dog, recommend specific medications or
        dosages, or provide individualized veterinary advice by email or message.
        For medical decisions about your pet, work directly with a licensed
        veterinarian who can examine your dog and review their full history.
      </p>

      <h2>Privacy</h2>
      <p>
        If you contact us in the future, any information you choose to share may
        be handled as described on our{" "}
        <Link href="/privacy">privacy policy</Link> page.
      </p>
    </TrustPageShell>
  );
}
