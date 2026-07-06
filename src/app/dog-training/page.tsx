import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("dog-training");

export default function DogTrainingPage() {
  return <CategoryHubPage category="dog-training" />;
}
