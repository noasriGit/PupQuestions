import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("dog-breeds");

export default function DogBreedsPage() {
  return <CategoryHubPage category="dog-breeds" />;
}
