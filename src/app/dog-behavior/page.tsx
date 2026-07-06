import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("dog-behavior");

export default function DogBehaviorPage() {
  return <CategoryHubPage category="dog-behavior" />;
}
