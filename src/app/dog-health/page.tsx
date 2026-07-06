import type { Metadata } from "next";

import { SectionPlaceholder } from "@/components/sections/SectionPlaceholder";
import { getSectionBySlug } from "@/data/sections";
import { createPageMetadata } from "@/lib/metadata";

const section = getSectionBySlug("dog-health")!;

export const metadata: Metadata = createPageMetadata({
  title: section.title,
  description: section.description,
  path: section.href,
});

export default function DogHealthPage() {
  return (
    <SectionPlaceholder
      title={section.title}
      description={section.description}
    />
  );
}
