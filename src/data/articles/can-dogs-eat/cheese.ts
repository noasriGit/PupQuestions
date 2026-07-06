import type { FoodSafetyArticle } from "@/types/content";

export const cheese: FoodSafetyArticle = {
  slug: "cheese",
  title: "Can Dogs Eat Cheese?",
  category: "can-dogs-eat",
  template: "food-safety",
  foodName: "cheese",
  subcategory: "Dairy",
  description:
    "Small amounts of plain low-fat cheese are usually fine for many dogs, but lactose intolerance, fat, salt, and flavored varieties need caution. Learn safer ways to share cheese.",
  quickAnswer:
    "Many dogs can have small amounts of plain, low-fat cheese as an occasional treat. Avoid large portions, flavored cheese with onion or garlic, and cheese if your dog is lactose intolerant.",
  safetyLevel: "moderation",
  intro:
    "Cheese is a popular high-value treat and pill-hiding tool, but not every dog digests dairy well. Small pieces of plain cheese work for many dogs — while blue cheese, heavily salted varieties, and cheeses with onion or chives should stay off the menu.",
  directAnswer: {
    paragraphs: [
      "Many healthy adult dogs tolerate small amounts of plain cheese such as mozzarella, cheddar, or Swiss as an occasional treat or pill wrapper. Cheese is not toxic to most dogs, but it is high in fat and may contain lactose that upsets sensitive stomachs.",
      "Flavored cheeses with onion, garlic, chives, or hot peppers are not safe. Very fatty cheeses, large portions, and daily cheese feeding can contribute to weight gain or pancreatitis in susceptible dogs.",
    ],
  },
  risks: {
    paragraphs: [
      "Lactose intolerance is common in dogs. Signs include gas, soft stool, or diarrhea after eating dairy.",
      "Cheese is calorie-dense and high in fat. Dogs with pancreatitis, obesity, or dietary fat restrictions should avoid cheese unless your veterinarian approves a specific type and amount.",
    ],
    listItems: [
      "Lactose intolerance — gas and diarrhea",
      "High fat — pancreatitis risk in sensitive dogs",
      "High salt in some processed cheeses",
      "Onion, garlic, or chives in flavored varieties",
      "Weight gain with frequent large portions",
    ],
  },
  servingGuidance: {
    paragraphs: [
      "Use a small cube or thin slice as an occasional treat — roughly the size of a dice for small dogs, or a couple of small cubes for large dogs. Cheese works well for hiding pills when your vet approves this method.",
      "Choose low-fat, plain varieties when possible. Introduce cheese slowly the first time and watch for digestive upset.",
    ],
  },
  safePreparation: {
    paragraphs: [
      "Serve plain cheese with no added seasonings, herbs, or hot peppers. Mozzarella, cheddar, Swiss, and cottage cheese (low-fat, plain) are common choices — but portion size matters more than variety.",
      "Avoid cheese spreads with onion or garlic, nacho cheese sauce, baked brie with seasonings, and mold-ripened cheeses if your veterinarian advises caution for your dog.",
    ],
  },
  avoidIf: {
    paragraphs: [
      "Avoid cheese with onion, garlic, chives, jalapeño, or other seasonings. Skip cheese if your dog has pancreatitis, is overweight, or has shown clear dairy intolerance.",
      "Do not use cheese as a daily meal replacement or large regular snack without accounting for total calories.",
    ],
  },
  tooMuch: {
    paragraphs: [
      "If your dog ate a large amount of plain cheese, watch for vomiting, diarrhea, gas, or abdominal discomfort. Withhold additional fatty treats and offer fresh water.",
      "Dogs with pancreatitis history who eat a lot of cheese may need prompt veterinary contact — follow your vet's guidance for your dog's specific risk.",
    ],
  },
  whenToCallVet: {
    paragraphs: [
      "Contact your veterinarian if vomiting or diarrhea persists beyond 24 hours after eating cheese, or if your dog has a history of pancreatitis and ate a large fatty portion.",
      "Seek emergency care if your dog ate cheese containing onion or garlic in significant amounts, or shows severe abdominal pain, repeated vomiting, or collapse.",
    ],
  },
  sections: [],
  faqs: [
    {
      question: "Can dogs eat cheddar cheese?",
      answer:
        "Many dogs can have a small piece of plain cheddar as an occasional treat. Cheddar is higher in fat than some cheeses, so keep portions tiny — especially for small dogs or dogs prone to weight gain.",
    },
    {
      question: "Can dogs eat Swiss cheese?",
      answer:
        "Plain Swiss cheese in small amounts is generally acceptable for many dogs who tolerate dairy. Watch for lactose sensitivity and avoid large portions.",
    },
    {
      question: "Is cheese good for hiding pills?",
      answer:
        "Soft cheese is a common pill-hiding tool when approved by your veterinarian. Use the smallest amount needed and confirm the medication can be given with food — some pills should not be taken with dairy.",
    },
  ],
  relatedQuestions: [
    {
      title: "Can dogs eat peanut butter?",
      slug: "peanut-butter",
      category: "can-dogs-eat",
    },
    {
      title: "Can dogs eat turkey?",
      slug: "turkey",
      category: "can-dogs-eat",
    },
  ],
  tags: ["cheese", "dairy", "treats", "lactose"],
  primaryKeyword: "can dogs eat cheese",
  secondaryKeywords: [
    "can dogs have cheddar cheese",
    "can dogs have swiss cheese",
    "is cheese bad for dogs",
  ],
  lastUpdated: "2026-07-06",
  readingTime: 4,
  status: "published",
  editorialNote:
    "General educational information only. Not reviewed by a veterinarian.",
};
