import type { Metadata } from "next";
import Link from "next/link";

import { TrustPageShell } from "@/components/trust/TrustPageShell";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn what PupQuestions is, what topics we cover, and how we approach dog care information for everyday owners.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <TrustPageShell
      title="About PupQuestions"
      description="Clear, practical answers to common dog owner questions — built for everyday care decisions, not to replace your veterinarian."
      path="/about"
    >
      <h2>What PupQuestions is</h2>
      <p>
        PupQuestions is an educational dog information site for people who want
        straightforward answers to everyday questions about their dogs. We focus
        on the kinds of questions owners actually search for — whether a food is
        safe, what a symptom might mean, why a behavior happens, or how to handle
        basic training and puppy care.
      </p>
      <p>
        Our goal is to help you find useful context quickly: a clear starting
        answer, safety notes where they matter, and guidance on when to talk to
        a veterinarian or trainer.
      </p>

      <h2>What we cover</h2>
      <p>
        PupQuestions organizes content around practical topics dog owners care
        about most:
      </p>
      <ul>
        <li>
          <Link href="/can-dogs-eat">Food safety</Link> — common human foods
          and ingredients
        </li>
        <li>
          <Link href="/dog-health">Health questions</Link> — symptoms, conditions,
          and when to seek care
        </li>
        <li>
          <Link href="/dog-behavior">Behavior</Link> — why dogs do what they do
        </li>
        <li>
          <Link href="/dog-training">Training</Link> — foundational guidance for
          everyday training
        </li>
        <li>
          <Link href="/dog-breeds">Breeds</Link> — breed lists and comparisons
          for common owner needs
        </li>
        <li>
          <Link href="/puppy-care">Puppy care</Link> — early-life basics for
          new puppy owners
        </li>
        <li>
          <Link href="/dog-grooming">Grooming</Link> — bathing, shedding, ear
          care, and related topics
        </li>
        <li>
          <Link href="/dog-products">Dog products</Link> — editorial guidance on
          common gear and supplies
        </li>
      </ul>

      <h2>Educational content, not veterinary care</h2>
      <p>
        PupQuestions is for general education only. It is not a substitute for
        professional veterinary diagnosis, treatment, or emergency care. Every dog
        is different, and what is safe or appropriate can depend on age, breed,
        health history, medications, and other factors your veterinarian knows
        best.
      </p>
      <p>
        Treat our health and food safety pages as starting points — helpful
        background and safety context, not individualized medical advice. If
        something seems urgent, severe, worsening, painful, unclear, or
        specific to your dog, contact a veterinarian, emergency clinic, or poison
        control rather than relying on a website.
      </p>

      <DisclaimerBox title="Not a substitute for professional care">
        <p>
          PupQuestions does not provide veterinary services. For persistent,
          severe, or urgent symptoms — or any situation where you are unsure —
          call your veterinarian or an emergency clinic.
        </p>
      </DisclaimerBox>

      <h2>How we approach content</h2>
      <p>
        We aim for pages that are easy to scan, cautious where safety matters,
        and honest about what we do and do not know. You can read more about our
        approach on our{" "}
        <Link href="/editorial-standards">editorial standards</Link> page.
      </p>
      <p>
        If you spot an error or have a suggestion, please see our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </TrustPageShell>
  );
}
