import type { HealthArticle } from "@/types/content";

export const whyIsMyDogThrowingUp: HealthArticle = {
  slug: "why-is-my-dog-throwing-up",
  title: "Why Is My Dog Throwing Up?",
  category: "dog-health",
  template: "health",
  subcategory: "Digestive symptoms",
  description:
    "Occasional vomiting can have many causes in dogs — from dietary indiscretion to illness. Learn common reasons, when to monitor at home, and when to contact a vet urgently.",
  quickAnswer:
    "Dogs vomit for many reasons, including eating too fast, dietary changes, infections, or underlying illness. A single mild episode may resolve on its own, but repeated vomiting, blood, lethargy, or other warning signs warrant prompt veterinary attention.",
  urgencyLevel: "monitor",
  intro:
    "Seeing your dog vomit can be alarming. While an isolated episode is sometimes harmless, vomiting can also signal something that needs professional care. This guide covers common causes and helps you decide when home monitoring is reasonable versus when to call your veterinarian.",
  sections: [
    {
      heading: "Common causes of vomiting in dogs",
      paragraphs: [
        "Dogs may vomit after eating something that disagrees with them, eating too quickly, or experiencing stress or motion sickness. Dietary changes, table scraps, and non-food items can also trigger an upset stomach.",
        "Infections, pancreatitis, intestinal blockages, toxins, and chronic conditions can cause vomiting as well. The pattern, frequency, and accompanying symptoms help distinguish minor issues from more serious ones.",
      ],
    },
    {
      heading: "When to monitor at home",
      paragraphs: [
        "If your dog vomits once, seems otherwise normal, and is drinking water and resting comfortably, you may monitor closely for a short period. Withhold food for a few hours if advised by your vet, then offer small amounts of water or a bland diet if symptoms do not return.",
        "Keep notes on what your dog ate, when vomiting started, and whether stool or behavior changed. This information helps your veterinarian if symptoms continue.",
      ],
    },
    {
      heading: "When to contact a veterinarian urgently",
      paragraphs: [
        "Contact a veterinarian promptly — or an emergency clinic if after hours — if vomiting is repeated, contains blood, or is paired with lethargy, bloating, pain, fever, dehydration, or refusal to drink.",
        "Seek urgent care immediately if you suspect your dog ate something toxic, a foreign object, or human medication. Do not attempt to treat vomiting at home with human medications unless specifically directed by a veterinarian.",
      ],
      listItems: [
        "Repeated vomiting over several hours",
        "Blood in vomit or dark, coffee-ground material",
        "Lethargy, collapse, or severe abdominal pain",
        "Known or suspected toxin or foreign object ingestion",
        "Puppies, senior dogs, or dogs with chronic illness vomiting repeatedly",
      ],
    },
  ],
  faqs: [
    {
      question: "Is vomiting the same as regurgitation?",
      answer:
        "No. Vomiting is an active process often preceded by retching and may include partially digested food. Regurgitation is usually passive and may look like undigested food coming back up with little effort. Both can have different causes — describe what you see to your vet.",
    },
    {
      question: "Should I withhold food after my dog vomits?",
      answer:
        "Short fasting may be appropriate for some adult dogs after a single mild episode, but puppies, small breeds, and dogs with other health issues should be evaluated by a veterinarian before fasting. Always follow your vet's guidance.",
    },
    {
      question: "Can I give my dog medication for vomiting?",
      answer:
        "Do not give human anti-nausea or other medications unless your veterinarian recommends a specific drug and dose for your dog. Some common human medications are toxic to dogs.",
    },
  ],
  relatedQuestions: [
    {
      title: "Can dogs eat blueberries?",
      slug: "blueberries",
      category: "can-dogs-eat",
    },
    {
      title: "Why do dogs eat grass?",
      slug: "why-do-dogs-eat-grass",
      category: "dog-behavior",
    },
  ],
  sources: [
    {
      title: "Vomiting in Dogs",
      organization: "VCA Animal Hospitals",
      url: "https://vcahospitals.com/know-your-pet/vomiting-in-dogs",
    },
  ],
  tags: ["vomiting", "digestive", "symptoms", "vet"],
  primaryKeyword: "why is my dog throwing up",
  secondaryKeywords: ["dog vomiting causes", "when to see vet dog vomiting"],
  lastUpdated: "2026-07-06",
  readingTime: 5,
  status: "published",
  editorialNote:
    "General educational information only. Not reviewed by a veterinarian. Always consult a licensed veterinarian for diagnosis and treatment.",
};
