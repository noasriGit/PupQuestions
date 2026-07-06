import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("dog-grooming");

export default function DogGroomingPage() {
  return <CategoryHubPage category="dog-grooming" />;
}
