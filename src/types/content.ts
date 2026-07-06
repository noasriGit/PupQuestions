/**
 * Structured content model for PupQuestions article pages.
 */

export type ContentStatus = "draft" | "published";

export type ContentCategory =
  | "can-dogs-eat"
  | "dog-health"
  | "dog-behavior"
  | "dog-training"
  | "dog-breeds"
  | "puppy-care"
  | "dog-products"
  | "dog-grooming";

export type ArticleTemplate =
  | "food-safety"
  | "health"
  | "behavior"
  | "training"
  | "breed-list"
  | "product-guide"
  | "puppy-care"
  | "grooming";

/**
 * Safety ratings for food-safety articles.
 * Maps to user-facing labels in the food safety template.
 */
export type SafetyLevel =
  | "safe"
  | "moderation"
  | "caution"
  | "not-recommended"
  | "unsafe"
  | "toxic";

export type UrgencyLevel = "routine" | "monitor" | "urgent";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

export type ArticleSource = {
  title: string;
  url?: string;
  organization?: string;
};

export type ArticleRelatedQuestion = {
  title: string;
  slug: string;
  category: ContentCategory;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

/** Structured content block used in food safety template sections. */
export type FoodSafetyBlock = {
  paragraphs: string[];
  listItems?: string[];
};

type ArticleCore = {
  slug: string;
  title: string;
  category: ContentCategory;
  template: ArticleTemplate;
  subcategory?: string;
  description: string;
  quickAnswer: string;
  intro: string;
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  relatedQuestions: ArticleRelatedQuestion[];
  sources?: ArticleSource[];
  tags: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  lastUpdated: string;
  readingTime: number;
  status: ContentStatus;
  editorialNote?: string;
};

export type FoodSafetyArticle = ArticleCore & {
  template: "food-safety";
  category: "can-dogs-eat";
  foodName: string;
  safetyLevel: SafetyLevel;
  directAnswer: FoodSafetyBlock;
  benefits?: FoodSafetyBlock;
  risks: FoodSafetyBlock;
  servingGuidance: FoodSafetyBlock;
  safePreparation: FoodSafetyBlock;
  avoidIf: FoodSafetyBlock;
  tooMuch: FoodSafetyBlock;
  whenToCallVet: FoodSafetyBlock;
  emergencyNote?: string;
};

export type HealthArticle = ArticleCore & {
  template: "health";
  category: "dog-health";
  urgencyLevel: UrgencyLevel;
};

export type BehaviorArticle = ArticleCore & {
  template: "behavior";
  category: "dog-behavior";
};

export type TrainingArticle = ArticleCore & {
  template: "training";
  category: "dog-training";
};

export type BreedListArticle = ArticleCore & {
  template: "breed-list";
  category: "dog-breeds";
};

export type ProductGuideArticle = ArticleCore & {
  template: "product-guide";
  category: "dog-products";
};

export type PuppyCareArticle = ArticleCore & {
  template: "puppy-care";
  category: "puppy-care";
};

export type GroomingArticle = ArticleCore & {
  template: "grooming";
  category: "dog-grooming";
};

export type Article =
  | FoodSafetyArticle
  | HealthArticle
  | BehaviorArticle
  | TrainingArticle
  | BreedListArticle
  | ProductGuideArticle
  | PuppyCareArticle
  | GroomingArticle;

/** @deprecated Use Article instead */
export type BaseContent = Pick<
  ArticleCore,
  "slug" | "title" | "description" | "status" | "lastUpdated"
>;

export const CATEGORY_TEMPLATES: Record<ContentCategory, ArticleTemplate> = {
  "can-dogs-eat": "food-safety",
  "dog-health": "health",
  "dog-behavior": "behavior",
  "dog-training": "training",
  "dog-breeds": "breed-list",
  "puppy-care": "puppy-care",
  "dog-products": "product-guide",
  "dog-grooming": "grooming",
};
