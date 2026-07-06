import { almonds } from "@/data/articles/can-dogs-eat/almonds";
import { bananas } from "@/data/articles/can-dogs-eat/bananas";
import { blueberries } from "@/data/articles/can-dogs-eat/blueberries";
import { cheese } from "@/data/articles/can-dogs-eat/cheese";
import { cinnamon } from "@/data/articles/can-dogs-eat/cinnamon";
import { marshmallows } from "@/data/articles/can-dogs-eat/marshmallows";
import { papaya } from "@/data/articles/can-dogs-eat/papaya";
import { peanutButter } from "@/data/articles/can-dogs-eat/peanut-butter";
import { pumpkin } from "@/data/articles/can-dogs-eat/pumpkin";
import { rice } from "@/data/articles/can-dogs-eat/rice";
import { shrimp } from "@/data/articles/can-dogs-eat/shrimp";
import { turkey } from "@/data/articles/can-dogs-eat/turkey";
import { watermelon } from "@/data/articles/can-dogs-eat/watermelon";
import { bestApartmentDogs } from "@/data/articles/dog-breeds/best-apartment-dogs";
import { bestFamilyDogs } from "@/data/articles/dog-breeds/best-family-dogs";
import { doDogsDream } from "@/data/articles/dog-behavior/do-dogs-dream";
import { whyDoDogsEatGrass } from "@/data/articles/dog-behavior/why-do-dogs-eat-grass";
import { whyDoDogsEatPoop } from "@/data/articles/dog-behavior/why-do-dogs-eat-poop";
import { canDogsTakeBenadryl } from "@/data/articles/dog-health/can-dogs-take-benadryl";
import { whyDoesMyDogHaveDiarrhea } from "@/data/articles/dog-health/why-does-my-dog-have-diarrhea";
import { whyIsMyDogThrowingUp } from "@/data/articles/dog-health/why-is-my-dog-throwing-up";
import { bestDogBowls } from "@/data/articles/dog-products/best-dog-bowls";
import { bestDogCrates } from "@/data/articles/dog-products/best-dog-crates";
import { howOftenShouldYouBatheADog } from "@/data/articles/dog-grooming/how-often-should-you-bathe-a-dog";
import { howToPottyTrainAPuppy } from "@/data/articles/puppy-care/how-to-potty-train-a-puppy";
import { howToCrateTrainAPuppy } from "@/data/articles/dog-training/how-to-crate-train-a-puppy";
import { howToStopDogPullingOnLeash } from "@/data/articles/dog-training/how-to-stop-dog-pulling-on-leash";
import { isArticleIndexable } from "@/lib/indexing";
import type { Article, ContentCategory } from "@/types/content";

/**
 * Central registry of all published articles.
 * Add new articles here to expose them via routing and utilities.
 */
export const articles: Article[] = [
  almonds,
  bananas,
  blueberries,
  cheese,
  cinnamon,
  marshmallows,
  papaya,
  peanutButter,
  pumpkin,
  rice,
  shrimp,
  turkey,
  watermelon,
  whyIsMyDogThrowingUp,
  whyDoesMyDogHaveDiarrhea,
  canDogsTakeBenadryl,
  whyDoDogsEatGrass,
  whyDoDogsEatPoop,
  doDogsDream,
  howToStopDogPullingOnLeash,
  howToCrateTrainAPuppy,
  bestFamilyDogs,
  bestApartmentDogs,
  bestDogCrates,
  bestDogBowls,
  howToPottyTrainAPuppy,
  howOftenShouldYouBatheADog,
];

export function getAllArticles(): Article[] {
  return articles.filter((article) => article.status === "published");
}

/** Published articles eligible for sitemap and search indexing. */
export function getIndexableArticles(): Article[] {
  return articles.filter(isArticleIndexable);
}

export function getArticleByCategoryAndSlug(
  category: ContentCategory,
  slug: string,
): Article | undefined {
  return getAllArticles().find(
    (article) => article.category === category && article.slug === slug,
  );
}

export function getArticlesByCategory(category: ContentCategory): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  const normalizedTag = tag.toLowerCase();
  return getAllArticles().filter((article) =>
    article.tags.some((articleTag) => articleTag.toLowerCase() === normalizedTag),
  );
}

export function getArticleStaticParams(
  category: ContentCategory,
): Array<{ slug: string }> {
  return getArticlesByCategory(category).map((article) => ({
    slug: article.slug,
  }));
}
