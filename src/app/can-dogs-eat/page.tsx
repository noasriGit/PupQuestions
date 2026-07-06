import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("can-dogs-eat");

export default function CanDogsEatPage() {
  return <CategoryHubPage category="can-dogs-eat" />;
}
