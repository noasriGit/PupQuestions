import Link from "next/link";

import { CardGrid } from "@/components/ui/CardGrid";
import { Container } from "@/components/ui/Container";
import { RelatedQuestions } from "@/components/ui/RelatedQuestions";
import { SearchPlaceholder } from "@/components/ui/SearchPlaceholder";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustNote } from "@/components/ui/TrustNote";
import { popularQuestions } from "@/data/placeholders";
import { sections } from "@/data/sections";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
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
            <SearchPlaceholder className="mx-auto mt-8 max-w-xl text-left" />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Explore topics"
            title="Browse by category"
            description="Each section is ready for guides and structured answers. Start with the topic that matches your question."
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
            eyebrow="Coming soon"
            title="Popular questions"
            description="Sample questions dog owners search for most. Full article pages will arrive in a later phase."
          />
          <RelatedQuestions questions={popularQuestions} />
          <p className="mt-6 text-center text-sm text-stone-500">
            More answers are on the way.{" "}
            <Link
              href="/can-dogs-eat"
              className="font-medium text-amber-700 hover:text-amber-800"
            >
              Browse Can Dogs Eat →
            </Link>
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <TrustNote title="Dog safety comes first">
              PupQuestions is built for responsible dog owners. Food safety and
              health content will always prioritize clear risk labels, vet
              guidance reminders, and practical next steps — so you can make
              informed decisions and know when to call your veterinarian.
            </TrustNote>
          </div>
        </Container>
      </section>
    </>
  );
}
