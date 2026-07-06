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

/**
 * Urgency guidance for health articles.
 * Maps to user-facing labels in the health template.
 */
export type UrgencyLevel =
  | "monitor-at-home"
  | "call-your-vet"
  | "urgent-vet-care"
  | "emergency";

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

/** Structured content block used in health template sections. */
export type HealthContentBlock = {
  paragraphs: string[];
  listItems?: string[];
};

/** Structured content block used in behavior, training, breed, and product templates. */
export type ArticleContentBlock = {
  paragraphs: string[];
  listItems?: string[];
};

/** Normal vs concerning comparison used in behavior template sections. */
export type NormalVsConcerningBlock = {
  normal: ArticleContentBlock;
  concerning: ArticleContentBlock;
};

/** Ranked or grouped breed entry for breed/list articles. */
export type BreedEntry = {
  name: string;
  rank?: number;
  group?: string;
  summary: string;
  pros?: string[];
  cons?: string[];
  bestFor?: string[];
};

/** Product/category placeholder entry for product guide articles. */
export type ProductEntry = {
  name: string;
  category?: string;
  summary: string;
  bestFor?: string[];
  watchFor?: string[];
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
  topicName: string;
  urgencyLevel: UrgencyLevel;
  overview: HealthContentBlock;
  symptoms: HealthContentBlock;
  commonCauses: HealthContentBlock;
  whatToDoNow: HealthContentBlock;
  whatNotToDo: HealthContentBlock;
  whenToCallVet: HealthContentBlock;
  emergencySigns?: HealthContentBlock;
  diagnosisTreatment?: HealthContentBlock;
  prevention?: HealthContentBlock;
  medicationSafetyNote?: HealthContentBlock;
};

export type BehaviorArticle = ArticleCore & {
  template: "behavior";
  category: "dog-behavior";
  questionTopic: string;
  overview: ArticleContentBlock;
  commonReasons: ArticleContentBlock;
  normalVsConcerning: NormalVsConcerningBlock;
  whatOwnersCanDo: ArticleContentBlock;
  whenToCallVetOrTrainer: ArticleContentBlock;
};

export type TrainingArticle = ArticleCore & {
  template: "training";
  category: "dog-training";
  trainingTopic: string;
  whyItHappens: ArticleContentBlock;
  trainingSteps: ArticleContentBlock;
  commonMistakes: ArticleContentBlock;
  whenToGetProfessionalHelp: ArticleContentBlock;
  toolsAndSetup?: ArticleContentBlock;
};

export type BreedListArticle = ArticleCore & {
  template: "breed-list";
  category: "dog-breeds";
  listTopic: string;
  selectionCriteria: ArticleContentBlock;
  breedEntries: BreedEntry[];
  importantCaveats: ArticleContentBlock;
};

export type ProductGuideArticle = ArticleCore & {
  template: "product-guide";
  category: "dog-products";
  productCategory: string;
  whatToLookFor: ArticleContentBlock;
  productEntries?: ProductEntry[];
  safetyConsiderations: ArticleContentBlock;
  buyingGuide: ArticleContentBlock;
  mistakesToAvoid: ArticleContentBlock;
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
