import type { Metadata } from "next";

import { CategoryHubPage } from "@/components/hubs/CategoryHubPage";
import { createHubMetadata } from "@/lib/hubs";

export const metadata: Metadata = createHubMetadata("dog-products");

export default function DogProductsPage() {
  return <CategoryHubPage category="dog-products" />;
}
