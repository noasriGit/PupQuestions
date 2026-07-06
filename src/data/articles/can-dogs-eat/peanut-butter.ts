import type { FoodSafetyArticle } from "@/types/content";

export const peanutButter: FoodSafetyArticle = {
  slug: "peanut-butter",
  title: "Can Dogs Eat Peanut Butter?",
  category: "can-dogs-eat",
  template: "food-safety",
  foodName: "peanut butter",
  subcategory: "Pantry",
  description:
    "Plain, unsweetened peanut butter without xylitol is generally safe for most dogs in small amounts. Learn how to check labels, serve safely, and what to avoid.",
  quickAnswer:
    "Yes — plain peanut butter without xylitol (also listed as birch sugar) is generally safe for most dogs in small amounts. Always check the ingredient label before sharing.",
  safetyLevel: "caution",
  intro:
    "Peanut butter is a popular dog treat and pill-hiding tool, but not every jar on the shelf is safe. The biggest concern is xylitol — a sugar substitute that is toxic to dogs even in small amounts.",
  directAnswer: {
    paragraphs: [
      "Plain, unsweetened peanut butter made from peanuts and salt (or peanuts only) is generally safe for most dogs in moderation. Many owners use a small dab to hide medication or as a high-value training reward.",
      "Never give your dog peanut butter that contains xylitol, birch sugar, or other sugar alcohols. These ingredients are toxic to dogs and can cause life-threatening drops in blood sugar and liver damage.",
    ],
  },
  benefits: {
    paragraphs: [
      "A small amount of plain peanut butter can make it easier to give pills or supplements to dogs who otherwise refuse medication.",
      "It is high in protein and fat, which makes it appealing as an occasional high-value treat during training — but that same richness is why portions should stay small.",
    ],
  },
  risks: {
    paragraphs: [
      "Xylitol (sometimes labeled as birch sugar) is the most serious risk. Even small amounts can cause hypoglycemia, seizures, and liver failure in dogs.",
      "Peanut butter is high in fat and calories. Too much can contribute to weight gain or trigger pancreatitis in susceptible dogs.",
    ],
    listItems: [
      "Xylitol / birch sugar — toxic to dogs",
      "High fat content — pancreatitis risk in sensitive dogs",
      "High calories — weight gain with regular overfeeding",
      "Added salt, sugar, or chocolate in some products",
      "Choking risk if a large spoonful is given at once",
    ],
  },
  servingGuidance: {
    paragraphs: [
      "A teaspoon for small dogs or a tablespoon for large dogs is a reasonable occasional serving for most healthy adult dogs. Use less if your dog is overweight or has dietary restrictions.",
      "Peanut butter should be an occasional treat, not a daily staple. Ask your veterinarian about appropriate portions for your dog's size and health.",
    ],
  },
  safePreparation: {
    paragraphs: [
      "Read the full ingredient label every time — formulations can change. Choose peanut butter with peanuts as the only ingredient, or peanuts and a small amount of salt.",
      "Spread a thin layer inside a Kong or lick mat for enrichment, or use a tiny amount to wrap a pill. Avoid sugar-free or reduced-sugar products, which are more likely to contain xylitol.",
    ],
    listItems: [
      "Check labels for xylitol, birch sugar, or sugar alcohols",
      "Choose plain peanut butter with no added sweeteners",
      "Avoid sugar-free or 'natural sweetener' varieties",
      "Use small amounts — not full spoonfuls for small dogs",
    ],
  },
  avoidIf: {
    paragraphs: [
      "Never give peanut butter containing xylitol, birch sugar, chocolate, or other sweeteners not confirmed safe for dogs.",
      "Skip peanut butter if your dog has pancreatitis, is overweight, or has a known peanut allergy. Talk to your vet before introducing it to dogs with dietary restrictions.",
    ],
  },
  tooMuch: {
    paragraphs: [
      "If your dog ate a large amount of plain, xylitol-free peanut butter, watch for vomiting, diarrhea, or signs of abdominal discomfort.",
      "If there is any chance the product contained xylitol or birch sugar, treat it as an emergency regardless of the amount eaten.",
    ],
  },
  whenToCallVet: {
    paragraphs: [
      "Contact your veterinarian if your dog has persistent vomiting, diarrhea, or abdominal pain after eating peanut butter.",
      "Seek emergency veterinary care immediately if your dog ate peanut butter containing xylitol or birch sugar — or if you are unsure about the ingredients. Do not wait for symptoms to appear.",
    ],
  },
  emergencyNote:
    "If your dog ate peanut butter and you are not sure whether it contains xylitol or birch sugar, contact your veterinarian or a pet poison helpline immediately. Xylitol poisoning can be life-threatening and requires prompt treatment.",
  sections: [],
  faqs: [
    {
      question: "What is xylitol and why is it dangerous for dogs?",
      answer:
        "Xylitol is a sugar substitute found in some sugar-free and reduced-sugar products, including certain peanut butters. In dogs, it can cause a rapid drop in blood sugar and liver damage. It may also appear on labels as birch sugar.",
    },
    {
      question: "Can puppies eat peanut butter?",
      answer:
        "Puppies can sometimes have a very small amount of plain, xylitol-free peanut butter, but introduce new foods slowly. Ask your veterinarian about appropriate treats for your puppy's age and size.",
    },
    {
      question: "Is crunchy or smooth peanut butter better for dogs?",
      answer:
        "Either is fine if the ingredients are safe — no xylitol and no added sweeteners. Some owners prefer smooth peanut butter for small dogs to reduce choking risk.",
    },
  ],
  relatedQuestions: [
    {
      title: "Can dogs eat almonds?",
      slug: "almonds",
      category: "can-dogs-eat",
    },
    {
      title: "Can dogs eat cheese?",
      slug: "cheese",
      category: "can-dogs-eat",
    },
  ],
  sources: [
    {
      title: "Xylitol: The Sweetener That Is Not So Sweet for Pets",
      organization: "FDA",
      url: "https://www.fda.gov/animal-veterinary/animal-health-literacy/paws-xylitol-its-dangerous-dogs",
    },
    {
      title: "People Foods to Avoid Feeding Your Pets",
      organization: "ASPCA",
      url: "https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets",
    },
  ],
  tags: ["peanut butter", "treats", "xylitol", "pantry"],
  primaryKeyword: "can dogs eat peanut butter",
  secondaryKeywords: [
    "is peanut butter safe for dogs",
    "xylitol peanut butter dogs",
  ],
  lastUpdated: "2026-07-06",
  readingTime: 5,
  status: "published",
  editorialNote:
    "General educational information only. Not reviewed by a veterinarian.",
};
