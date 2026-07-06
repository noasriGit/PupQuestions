import type { SiteSection } from "@/types/site";

export const sections: SiteSection[] = [
  {
    slug: "can-dogs-eat",
    title: "Can Dogs Eat",
    description:
      "Find out which foods are safe, risky, or toxic for dogs — from everyday snacks to common kitchen ingredients.",
    href: "/can-dogs-eat",
    icon: "🍎",
  },
  {
    slug: "dog-health",
    title: "Dog Health",
    description:
      "Guidance on symptoms, wellness, vet visits, and keeping your dog healthy at every life stage.",
    href: "/dog-health",
    icon: "🩺",
  },
  {
    slug: "dog-behavior",
    title: "Dog Behavior",
    description:
      "Understand why dogs act the way they do and how to address common behavioral questions.",
    href: "/dog-behavior",
    icon: "🐾",
  },
  {
    slug: "dog-training",
    title: "Dog Training",
    description:
      "Practical training tips for obedience, house manners, recall, and building good habits.",
    href: "/dog-training",
    icon: "🎯",
  },
  {
    slug: "dog-breeds",
    title: "Dog Breeds",
    description:
      "Breed profiles, temperament, care needs, and answers to breed-specific owner questions.",
    href: "/dog-breeds",
    icon: "🐕",
  },
  {
    slug: "puppy-care",
    title: "Puppy Care",
    description:
      "Everything new puppy owners need — feeding, socialization, schedules, and early milestones.",
    href: "/puppy-care",
    icon: "🍼",
  },
  {
    slug: "dog-products",
    title: "Dog Products",
    description:
      "Help choosing leashes, beds, food, toys, and gear that fit your dog and lifestyle.",
    href: "/dog-products",
    icon: "🦴",
  },
  {
    slug: "dog-grooming",
    title: "Dog Grooming",
    description:
      "Coat care, bathing, nail trimming, and grooming routines for dogs of all types.",
    href: "/dog-grooming",
    icon: "✂️",
  },
];

export function getSectionBySlug(slug: string): SiteSection | undefined {
  return sections.find((section) => section.slug === slug);
}
