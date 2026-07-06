import type { Metadata } from "next";
import Link from "next/link";

import { TrustPageShell } from "@/components/trust/TrustPageShell";
import { TrustNote } from "@/components/ui/TrustNote";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Editorial Standards",
  description:
    "How PupQuestions selects topics, structures answers, handles food safety and health content, and updates pages.",
  path: "/editorial-standards",
});

export default function EditorialStandardsPage() {
  return (
    <TrustPageShell
      title="Editorial Standards"
      description="How PupQuestions approaches content quality, safety, updates, and corrections."
      path="/editorial-standards"
    >
      <h2>People-first content</h2>
      <p>
        PupQuestions is built for dog owners looking for practical, readable
        answers — not keyword-stuffed pages or vague summaries. We aim to write
        clearly, lead with what matters most, and respect that readers often
        arrive with a specific question and limited time.
      </p>

      <h2>How we choose topics</h2>
      <p>We prioritize topics based on:</p>
      <ul>
        <li>
          <strong>Dog-owner search intent</strong> — real questions people ask
          about everyday care, safety, and behavior
        </li>
        <li>
          <strong>Practical usefulness</strong> — topics where a clear,
          cautious answer can help an owner make a better next step
        </li>
        <li>
          <strong>Keyword research</strong> — understanding how people phrase
          common questions so pages are easy to find
        </li>
        <li>
          <strong>Early site focus</strong> — as a new domain, we started with
          lower-competition topics where we can publish helpful, focused pages
          and expand carefully over time
        </li>
      </ul>

      <h2>How pages are structured</h2>
      <p>
        Most PupQuestions pages follow a consistent structure so readers can
        scan quickly:
      </p>
      <ul>
        <li>A direct answer or summary near the top</li>
        <li>Safety notes when food, health, or risk is involved</li>
        <li>FAQs for common follow-up questions</li>
        <li>Related questions to explore nearby topics</li>
        <li>Sources or references when they add meaningful value</li>
      </ul>

      <h2>Food safety content</h2>
      <p>
        Food safety pages use cautious language. Many human foods are safe only
        in moderation, preparation-dependent, or unsafe for some dogs. We call
        out toxic ingredients and common risks clearly, and we encourage
        veterinary guidance when a dog eats something unknown, shows symptoms,
        or has underlying health conditions.
      </p>

      <TrustNote title="When in doubt, choose caution">
        <p>
          If you are unsure whether a food is safe for your dog — or your dog
          already ate something questionable — contact your veterinarian or
          poison control rather than relying on a general article.
        </p>
      </TrustNote>

      <h2>Health content</h2>
      <p>
        Health pages are educational only. They explain common symptoms,
        possible causes, and general guidance — not a diagnosis for your
        specific dog. We do not publish medication dosages unless they have been
        explicitly verified by a qualified professional in the future.
      </p>
      <p>
        We encourage contacting a veterinarian when symptoms are persistent,
        severe, worsening, painful, bloody, urgent, or unclear — or whenever you
        are not confident about what to do next.
      </p>

      <h2>Product content</h2>
      <p>
        Product and gear pages are currently editorial and educational. They
        explain common product types, what to look for, and typical owner use
        cases. We do not include affiliate links or paid placements at this
        time. If that changes in the future, it will be clearly disclosed.
      </p>
      <p>
        We do not claim hands-on testing, lab results, or expert product
        endorsements unless we actually have that process and can describe it
        honestly.
      </p>

      <h2>Corrections policy</h2>
      <p>
        Readers can report issues through our{" "}
        <Link href="/contact">contact page</Link>. When we confirm an error or
        find a stronger source, we update the affected page. Safety-related
        corrections are treated as a priority.
      </p>

      <h2>Review policy</h2>
      <p>
        PupQuestions pages are not reviewed by a veterinarian unless we
        explicitly state otherwise on a specific page in the future. We do not
        claim veterinary review, medical credentials, or professional endorsement
        we do not have.
      </p>
      <p>
        Our content is written to be helpful and careful, but it remains general
        information — not individualized professional advice.
      </p>
    </TrustPageShell>
  );
}
