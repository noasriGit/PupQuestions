import type { FoodSafetyArticle } from "@/types/content";

export const fish: FoodSafetyArticle = {
  slug: "fish",
  title: "Can Dogs Eat Fish?",
  category: "can-dogs-eat",
  template: "food-safety",
  foodName: "fish",
  subcategory: "Seafood",
  description:
    "Plain cooked fish without bones or seasoning can be safe for many dogs in moderation. Learn which types are safest, how to prepare fish for dogs, and what seafood to avoid.",
  quickAnswer:
    "Yes — plain, fully cooked fish with all bones removed is generally safe for most dogs in small amounts. Avoid raw fish, bones, seasonings, fried preparations, and high-mercury fish. Introduce new fish slowly and watch for allergies.",
  safetyLevel: "moderation",
  intro:
    "Fish is a lean protein many owners want to share, and it appears in some commercial dog foods. When it is plain, fully cooked, and bone-free, most healthy dogs tolerate fish in moderation — but raw fish, bones, seasonings, and certain species change the answer. This guide focuses on fin fish; for shellfish like shrimp, see our separate shrimp guide.",
  directAnswer: {
    paragraphs: [
      "Plain, fully cooked fish without bones, skin with heavy fat, or seasoning is generally safe for most healthy adult dogs in moderation. White fish such as cod, flounder, and tilapia are commonly used as occasional treats when prepared simply.",
      "Raw fish is not recommended because of parasite and bacteria risk. Fish cooked with garlic, onion, butter, salt, breading, or sauces should not be shared with dogs.",
    ],
  },
  benefits: {
    paragraphs: [
      "Plain cooked fish provides lean protein and can work as an occasional treat or meal topper for dogs who tolerate it well.",
      "Some commercial dog foods include fish for protein variety. Table fish should supplement — not replace — a complete, balanced dog diet, and is not necessary for every dog.",
    ],
  },
  risks: {
    paragraphs: [
      "Bones are a serious choking and obstruction hazard. Always remove all bones before serving, even in fish that seem boneless.",
      "Some dogs are allergic to fish or seafood. High-mercury species such as swordfish and king mackerel are not appropriate for dogs. Canned fish packed in oil or with added salt should be avoided.",
    ],
    listItems: [
      "Bones — choking and digestive tract injury",
      "Raw fish — parasites and bacterial contamination",
      "Seasonings — garlic, onion, salt, and butter",
      "Fried or breaded fish — high fat and calories",
      "High-mercury fish — swordfish, tilefish, king mackerel",
      "Canned fish with added sodium or oil",
      "Fish allergy in sensitive dogs",
    ],
  },
  servingGuidance: {
    paragraphs: [
      "Offer a small bite for small dogs or a few bite-sized pieces for large dogs as an occasional treat — not a full human portion.",
      "Introduce fish slowly the first time and watch for vomiting, diarrhea, or itching. Dogs with pancreatitis, obesity, or dietary restrictions should follow your vet's guidance on table food.",
    ],
  },
  safePreparation: {
    paragraphs: [
      "Steam, bake, or boil fish plain with no salt, butter, garlic, onion, or seasoning. Remove all bones and skin with heavy fat, then flake into bite-sized pieces.",
      "Salmon and tuna can be shared only when fully cooked and plain — avoid raw preparations such as sushi. Skip smoked, cured, or heavily seasoned seafood.",
    ],
  },
  avoidIf: {
    paragraphs: [
      "Avoid fish prepared with garlic, onion, lemon pepper, butter, breading, soy sauce, or salty marinades.",
      "Skip fish if your dog has a known seafood allergy or has reacted poorly to fish in the past.",
    ],
  },
  tooMuch: {
    paragraphs: [
      "If your dog ate a large amount of plain cooked fish, watch for vomiting, diarrhea, or gas. Withhold additional treats and offer fresh water.",
      "If they ate seasoned, fried, or raw fish — or swallowed bones — monitor closely and contact your vet if symptoms appear or worsen.",
    ],
  },
  whenToCallVet: {
    paragraphs: [
      "Contact your veterinarian if vomiting or diarrhea lasts more than 24 hours, if your dog shows signs of an allergic reaction, or if they swallowed bones and seem uncomfortable.",
      "Seek emergency care for difficulty breathing, facial swelling, collapse, or if your dog ate fish prepared with garlic, onion, or other toxic ingredients.",
    ],
  },
  sections: [],
  faqs: [
    {
      question: "Can dogs eat cooked fish?",
      answer:
        "Yes — plain, fully cooked fish without bones or seasoning is generally the safest way to share fish with dogs. Avoid fried, breaded, or seasoned preparations.",
    },
    {
      question: "Can dogs eat raw fish?",
      answer:
        "Raw fish is not recommended for dogs because of parasite and bacteria risk. Stick to fully cooked, plain fish with all bones removed.",
    },
    {
      question: "Can dogs eat salmon or tuna?",
      answer:
        "Plain, fully cooked salmon or tuna in small amounts may be fine for many dogs. Avoid raw salmon, seasoned canned tuna with added salt, and large frequent servings of tuna because of mercury concerns.",
    },
    {
      question: "Is fish good for dogs?",
      answer:
        "Plain cooked fish can provide lean protein as an occasional treat for dogs who tolerate it. It is not necessary for every dog, and some dogs do better without seafood.",
    },
  ],
  relatedQuestions: [
    {
      title: "Can dogs eat shrimp?",
      slug: "shrimp",
      category: "can-dogs-eat",
    },
    {
      title: "Can dogs eat turkey?",
      slug: "turkey",
      category: "can-dogs-eat",
    },
    {
      title: "Why does my dog have diarrhea?",
      slug: "why-does-my-dog-have-diarrhea",
      category: "dog-health",
    },
  ],
  sources: [
    {
      title: "Sharing is Caring: Foods You Can Safely Share with Your Pet",
      organization: "ASPCA",
      url: "https://www.aspca.org/news/sharing-caring-foods-you-can-safely-share-your-pet",
    },
  ],
  tags: ["fish", "seafood", "protein", "salmon", "treats"],
  primaryKeyword: "can dogs eat fish",
  secondaryKeywords: [
    "can dogs have fish",
    "is fish good for dogs",
    "can dogs eat cooked fish",
    "can dogs eat salmon",
    "is fish safe for dogs",
  ],
  lastUpdated: "2026-07-12",
  readingTime: 5,
  status: "published",
  editorialNote:
    "General educational information only. Not reviewed by a veterinarian.",
};
