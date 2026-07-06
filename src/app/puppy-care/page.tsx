import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("puppy-care");

export default function PuppyCarePage() {
  return <CategoryHubPage category="puppy-care" />;
}
