import type { Metadata } from "next";
import Link from "next/link";

import { HomeStructuredData } from "@/components/seo/HomeStructuredData";
import { CardGrid } from "@/components/ui/CardGrid";
import { Container } from "@/components/ui/Container";
import { PopularDogQuestions } from "@/components/ui/PopularDogQuestions";
import { SearchForm } from "@/components/ui/SearchForm";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustNote } from "@/components/ui/TrustNote";
import { sections } from "@/data/sections";
import { siteConfig } from "@/data/site";
import { createHomeMetadata } from "@/lib/metadata";

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <section className="border-b border-stone-200 bg-white">
        <Container className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              Dog owner questions, answered
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Trusted answers for every pup parent
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-stone-600 sm:text-xl">
              {siteConfig.name} is your friendly guide to nutrition, health,
              behavior, training, breeds, puppy care, grooming, and products —
              written for clarity, not clickbait.
            </p>
            <SearchForm className="mx-auto mt-8 max-w-xl text-left" showHint />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Explore topics"
            title="Browse by category"
            description="Each section collects guides and structured answers. Start with the topic that matches your question."
          />
          <CardGrid columns={3}>
            {sections.map((section) => (
              <li key={section.slug}>
                <SectionCard
                  title={section.title}
                  description={section.description}
                  href={section.href}
                  icon={section.icon}
                />
              </li>
            ))}
          </CardGrid>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-stone-50/80">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Start here"
            title="Popular questions"
            description="Common questions dog owners search for — answered with clear, practical guides."
          />
          <PopularDogQuestions />
          <p className="mt-6 text-center text-sm text-stone-600">
            Explore more topics in{" "}
            <Link
              href="/dog-health"
              className="font-medium text-amber-700 hover:text-amber-800"
            >
              Dog Health
            </Link>{" "}
            and{" "}
            <Link
              href="/dog-training"
              className="font-medium text-amber-700 hover:text-amber-800"
            >
              Dog Training
            </Link>
            .
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <TrustNote title="Dog safety comes first">
              PupQuestions is built for responsible dog owners. Food safety and
              health content prioritizes clear risk labels, vet guidance
              reminders, and practical next steps — so you can make informed
              decisions and know when to call your veterinarian.
            </TrustNote>
          </div>
        </Container>
      </section>
    </>
  );
}
