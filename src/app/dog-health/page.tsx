import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("dog-health");

export default function DogHealthPage() {
  return <CategoryHubPage category="dog-health" />;
}
