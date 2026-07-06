import type { ContentCategory } from "@/types/content";
import type { HubConfig } from "@/types/hub";

const canDogsEatHub: HubConfig = {
  category: "can-dogs-eat",
  intro:
    "Quick, practical answers about everyday foods — what's safe, what needs caution, and what to keep away from your dog.",
  overview:
    "From fruit bowls to pantry staples, this hub groups common foods so you can check safety, serving tips, and red flags before sharing a snack. Every guide uses clear safety labels and reminds you when a vet should weigh in.",
  seoDescription:
    "Can dogs eat blueberries, peanut butter, and more? Browse food safety guides by category — fruits, vegetables, proteins, dairy, and toxic foods to avoid.",
  featuredSlugs: ["blueberries", "watermelon", "peanut-butter"],
  articleGroupMap: {
    bananas: "fruits",
    blueberries: "fruits",
    watermelon: "fruits",
    pumpkin: "vegetables",
    "peanut-butter": "ingredients-supplements",
  },
  trustNote: {
    title: "Food safety labels you can trust",
    content:
      "Every food guide in this section uses clear safety ratings — safe, caution, or toxic — plus practical serving notes. When ingredients, size, or health conditions matter, articles call that out so you know when to skip a snack or call your vet.",
  },
  topicGroups: [
    {
      id: "fruits",
      title: "Fruits",
      description:
        "Berries, melons, and other fruit snacks — what's safe plain, and what to avoid with seeds, pits, or added sugar.",
    },
    {
      id: "vegetables",
      title: "Vegetables",
      description:
        "Common veggies from the kitchen and garden, including which are fine cooked or raw and which cause digestive upset.",
    },
    {
      id: "meats-proteins",
      title: "Meats & proteins",
      description:
        "Chicken, beef, eggs, and other proteins — safe preparation, portion sizes, and seasonings to skip.",
    },
    {
      id: "dairy",
      title: "Dairy",
      description:
        "Milk, cheese, yogurt, and ice cream — lactose tolerance, fat content, and safer alternatives.",
    },
    {
      id: "grains",
      title: "Grains",
      description:
        "Rice, bread, pasta, and cereal — plain vs. seasoned, and when grains are a reasonable add-on.",
    },
    {
      id: "nuts-seeds",
      title: "Nuts & seeds",
      description:
        "Almonds, cashews, sunflower seeds, and more — choking hazards, fat content, and toxic varieties.",
    },
    {
      id: "sweets-desserts",
      title: "Sweets & desserts",
      description:
        "Chocolate, baked goods, and sugary treats — why most desserts are risky and what hidden ingredients to watch for.",
    },
    {
      id: "unsafe-toxic",
      title: "Unsafe or toxic foods",
      description:
        "Foods dogs should never eat — grapes, onions, xylitol products, and other common household dangers.",
    },
    {
      id: "ingredients-supplements",
      title: "Ingredients & supplements",
      description:
        "Pantry staples, oils, spices, and add-ins — what's fine in moderation and what needs a label check first.",
    },
  ],
};

const dogHealthHub: HubConfig = {
  category: "dog-health",
  intro:
    "Understand symptoms, know what to do at home, and recognize when it's time to call your veterinarian.",
  overview:
    "Dog health questions can feel urgent even when they're common. This hub organizes wellness topics by symptom area so you can find practical next steps, safety reminders, and clear guidance on when professional care is needed.",
  seoDescription:
    "Dog health guides on vomiting, diarrhea, medications, and more. Browse symptoms, digestion, skin care, vaccines, and emergency signs.",
  featuredSlugs: [
    "why-is-my-dog-throwing-up",
    "why-does-my-dog-have-diarrhea",
    "can-dogs-take-benadryl",
  ],
  articleGroupMap: {
    "why-is-my-dog-throwing-up": "digestion",
    "why-does-my-dog-have-diarrhea": "digestion",
    "can-dogs-take-benadryl": "medications",
  },
  showHealthDisclaimer: true,
  trustNote: {
    title: "When in doubt, call your vet",
    content:
      "Health articles here explain common causes and home monitoring steps, but they are not a diagnosis. Contact your veterinarian for persistent symptoms, sudden changes, or anything that worries you — especially with puppies, seniors, or dogs with existing conditions.",
  },
  topicGroups: [
    {
      id: "symptoms",
      title: "Symptoms",
      description:
        "Coughing, lethargy, limping, and other signs — what they might mean and how urgently to respond.",
    },
    {
      id: "digestion",
      title: "Digestion",
      description:
        "Vomiting, diarrhea, appetite changes, and stomach upset — common causes and when to seek care.",
    },
    {
      id: "skin-coat",
      title: "Skin & coat",
      description:
        "Itching, hot spots, shedding changes, and coat quality — irritation triggers and basic care steps.",
    },
    {
      id: "parasites",
      title: "Parasites",
      description:
        "Fleas, ticks, worms, and mites — prevention basics and signs your dog may need treatment.",
    },
    {
      id: "medications",
      title: "Medications",
      description:
        "Over-the-counter and prescription questions — dosing cautions and why vet guidance matters.",
    },
    {
      id: "vaccines",
      title: "Vaccines",
      description:
        "Core and lifestyle vaccines, puppy schedules, and what to expect after shots.",
    },
    {
      id: "ears-eyes",
      title: "Ears & eyes",
      description:
        "Discharge, redness, head shaking, and squinting — irritation vs. infection and home care limits.",
    },
    {
      id: "senior-dogs",
      title: "Senior dogs",
      description:
        "Aging changes, mobility, cognitive shifts, and wellness routines for older dogs.",
    },
    {
      id: "emergency-signs",
      title: "Emergency signs",
      description:
        "Symptoms that need immediate veterinary attention — breathing trouble, collapse, toxin exposure, and more.",
    },
  ],
};

const dogBehaviorHub: HubConfig = {
  category: "dog-behavior",
  intro:
    "Decode everyday habits — from grass eating to dreaming — and learn what's normal versus worth a closer look.",
  overview:
    "Dogs do puzzling things. This hub groups common behavior questions so you can understand likely causes, try practical adjustments at home, and know when a trainer or vet should get involved.",
  seoDescription:
    "Dog behavior guides on grass eating, dreaming, barking, anxiety, and body language. Browse topics by habit, emotion, and communication.",
  featuredSlugs: ["why-do-dogs-eat-grass", "do-dogs-dream"],
  articleGroupMap: {
    "why-do-dogs-eat-grass": "eating-odd-things",
    "why-do-dogs-eat-poop": "eating-odd-things",
    "do-dogs-dream": "sleep-dreams",
  },
  topicGroups: [
    {
      id: "eating-odd-things",
      title: "Eating odd things",
      description:
        "Grass, dirt, socks, and other non-food items — curiosity, boredom, nausea, and when it becomes a problem.",
    },
    {
      id: "licking-chewing",
      title: "Licking & chewing",
      description:
        "Paws, furniture, and themselves — allergy links, anxiety habits, and enrichment ideas.",
    },
    {
      id: "sleep-dreams",
      title: "Sleep & dreams",
      description:
        "Sleep positions, twitching, vocalizing, and rest patterns — what's typical and what may signal stress or pain.",
    },
    {
      id: "barking-howling",
      title: "Barking & howling",
      description:
        "Alert barking, demand barking, and howling — triggers, context, and training angles.",
    },
    {
      id: "emotions-attachment",
      title: "Emotions & attachment",
      description:
        "Separation anxiety, clinginess, fear, and confidence — how dogs bond and cope with change.",
    },
    {
      id: "aggression-guarding",
      title: "Aggression & guarding",
      description:
        "Resource guarding, reactivity, and growling — safety-first steps and when to seek professional help.",
    },
    {
      id: "body-language",
      title: "Body language",
      description:
        "Tail position, yawning, whale eye, and posture — reading comfort, stress, and play signals.",
    },
  ],
};

const dogTrainingHub: HubConfig = {
  category: "dog-training",
  intro:
    "Build reliable habits with step-by-step guidance for puppies and adult dogs — at home and on walks.",
  overview:
    "Good training is consistent, kind, and practical. This hub organizes lessons by skill area so you can work on leash manners, crate comfort, obedience basics, and enrichment without wading through unrelated advice.",
  seoDescription:
    "Dog training guides for leash pulling, crate training, obedience, and behavior correction. Browse puppy and adult dog lessons by topic.",
  featuredSlugs: [
    "how-to-stop-dog-pulling-on-leash",
    "how-to-crate-train-a-puppy",
  ],
  articleGroupMap: {
    "how-to-stop-dog-pulling-on-leash": "leash-training",
    "how-to-crate-train-a-puppy": "crate-training",
  },
  topicGroups: [
    {
      id: "puppy-training",
      title: "Puppy training",
      description:
        "Foundations for young dogs — schedules, bite inhibition, and setting expectations early.",
    },
    {
      id: "leash-training",
      title: "Leash training",
      description:
        "Loose-leash walking, pulling fixes, and gear that helps — without harsh corrections.",
    },
    {
      id: "crate-training",
      title: "Crate training",
      description:
        "Creating a positive crate routine — sizing, timing, and troubleshooting whining or refusal.",
    },
    {
      id: "obedience",
      title: "Obedience",
      description:
        "Sit, stay, recall, and leave-it — core cues that make daily life easier and safer.",
    },
    {
      id: "behavior-correction",
      title: "Behavior correction",
      description:
        "Jumping, counter-surfing, and unwanted habits — redirection, management, and consistency.",
    },
    {
      id: "enrichment",
      title: "Enrichment",
      description:
        "Mental stimulation, puzzle toys, and structured play — tiring the brain, not just the body.",
    },
  ],
};

const dogBreedsHub: HubConfig = {
  category: "dog-breeds",
  intro:
    "Compare breeds by lifestyle fit — families, apartments, first-time owners, and more — with honest caveats.",
  overview:
    "No breed is perfect for every home. This hub groups breed guides by what owners usually prioritize — space, grooming, temperament, and experience level — so you can narrow choices before diving into individual profiles.",
  seoDescription:
    "Dog breed guides for families, apartments, low-maintenance pets, and first-time owners. Browse breed lists by lifestyle and temperament.",
  featuredSlugs: ["best-family-dogs", "best-apartment-dogs"],
  articleGroupMap: {
    "best-family-dogs": "family-dogs",
    "best-apartment-dogs": "apartment-dogs",
  },
  topicGroups: [
    {
      id: "family-dogs",
      title: "Family dogs",
      description:
        "Breeds that often tolerate busy households and children well — with reminders that socialization still matters.",
    },
    {
      id: "apartment-dogs",
      title: "Apartment dogs",
      description:
        "Smaller spaces, noise considerations, and exercise needs for urban and condo living.",
    },
    {
      id: "low-maintenance",
      title: "Low-maintenance dogs",
      description:
        "Breeds with moderate grooming and exercise needs — realistic expectations, not zero effort.",
    },
    {
      id: "hypoallergenic",
      title: "Hypoallergenic dogs",
      description:
        "Lower-shedding options and what hypoallergenic really means for allergy sufferers.",
    },
    {
      id: "smart-dogs",
      title: "Smart dogs",
      description:
        "Trainable, energetic breeds — the upside of intelligence and the commitment it requires.",
    },
    {
      id: "first-time-owner",
      title: "First-time owner dogs",
      description:
        "Forgiving temperaments and manageable needs for people new to dog ownership.",
    },
    {
      id: "guard-protection",
      title: "Guard & protection dogs",
      description:
        "Breeds with guarding instincts — responsible ownership, training, and legal considerations.",
    },
  ],
};

const puppyCareHub: HubConfig = {
  category: "puppy-care",
  intro:
    "Everything new puppy parents need — from the first week home through feeding, potty training, and socialization.",
  overview:
    "Puppies grow fast and need a plan. This hub organizes early-care topics so you can build routines for health, housetraining, crate comfort, and confidence — without guessing what to tackle first.",
  seoDescription:
    "Puppy care guides for new owners — feeding, potty training, crate training, socialization, and early health basics.",
  featuredSlugs: ["how-to-potty-train-a-puppy"],
  articleGroupMap: {
    "how-to-potty-train-a-puppy": "potty-training",
  },
  trustNote: {
    title: "Puppy care builds on good routines",
    content:
      "Young dogs benefit from consistent schedules, positive training, and early vet visits. Articles here will emphasize practical routines you can start right away — and when to loop in your veterinarian for vaccines, diet changes, or worrying symptoms.",
  },
  topicGroups: [
    {
      id: "new-puppy-basics",
      title: "New puppy basics",
      description:
        "First days home, supplies, sleep schedules, and setting up a safe space.",
    },
    {
      id: "feeding",
      title: "Feeding",
      description:
        "Meal frequency, portion sizes, food transitions, and treat limits for growing puppies.",
    },
    {
      id: "potty-training",
      title: "Potty training",
      description:
        "Crate-assisted schedules, accident cleanup, and realistic timelines by age.",
    },
    {
      id: "crate-training",
      title: "Crate training",
      description:
        "Positive crate introductions, sizing, and making the crate a calm retreat.",
    },
    {
      id: "puppy-behavior",
      title: "Puppy behavior",
      description:
        "Biting, zoomies, and attention-seeking — normal phases and gentle redirection.",
    },
    {
      id: "puppy-health",
      title: "Puppy health",
      description:
        "Vaccines, deworming, parasite prevention, and signs that need a same-day vet call.",
    },
    {
      id: "socialization",
      title: "Socialization",
      description:
        "Safe exposure to people, places, and other dogs — building confidence without overwhelm.",
    },
  ],
};

const dogProductsHub: HubConfig = {
  category: "dog-products",
  intro:
    "Choose gear that fits your dog's size, habits, and your home — without wading through endless product lists.",
  overview:
    "The right product depends on your dog. This hub groups buying guides by category — crates, bowls, grooming tools, and travel gear — with safety notes and what to prioritize before price or trends.",
  seoDescription:
    "Dog product guides for crates, bowls, grooming supplies, toys, and travel gear. Browse buying advice by product category.",
  featuredSlugs: ["best-dog-crates", "best-dog-bowls"],
  articleGroupMap: {
    "best-dog-crates": "crates",
    "best-dog-bowls": "bowls",
  },
  topicGroups: [
    {
      id: "crates",
      title: "Crates",
      description:
        "Sizing, materials, and features for safe confinement and travel.",
    },
    {
      id: "bowls",
      title: "Bowls",
      description:
        "Stainless, ceramic, slow feeders, and elevated stands — what suits your dog's eating style.",
    },
    {
      id: "ramps",
      title: "Ramps",
      description:
        "Vehicle and furniture access — slope, grip, and weight limits for seniors or small breeds.",
    },
    {
      id: "grooming-products",
      title: "Grooming products",
      description:
        "Brushes, shampoos, nail tools, and dryers — matching coat type and skill level.",
    },
    {
      id: "enrichment-toys",
      title: "Enrichment toys",
      description:
        "Puzzle feeders, chew toys, and interactive play — durability and safety considerations.",
    },
    {
      id: "fences",
      title: "Fences",
      description:
        "Physical barriers and containment — yard layout, jumpers, and diggers.",
    },
    {
      id: "pools",
      title: "Pools",
      description:
        "Summer cooling and swim safety — portable pools, ramps, and supervision.",
    },
    {
      id: "travel-gear",
      title: "Travel gear",
      description:
        "Carriers, seat belts, travel bowls, and road-trip essentials.",
    },
  ],
};

const dogGroomingHub: HubConfig = {
  category: "dog-grooming",
  intro:
    "Coat care, bathing, nails, ears, and teeth — practical grooming routines for dogs of every coat type.",
  overview:
    "Regular grooming keeps dogs comfortable and makes health issues easier to spot early. This hub groups grooming topics by task so you can build a routine that matches your dog's coat, lifestyle, and tolerance.",
  seoDescription:
    "Dog grooming guides for bathing, brushing, nail trimming, ear cleaning, dental care, and shedding control.",
  featuredSlugs: ["how-often-should-you-bathe-a-dog"],
  articleGroupMap: {
    "how-often-should-you-bathe-a-dog": "bathing",
  },
  trustNote: {
    title: "Grooming supports health, not just appearance",
    content:
      "Routine grooming helps you notice lumps, skin changes, and ear irritation early. Guides here focus on safe technique and when a professional groomer or veterinarian should take over — especially for matted coats, nail injuries, or persistent skin issues.",
  },
  topicGroups: [
    {
      id: "bathing",
      title: "Bathing",
      description:
        "How often to bathe, shampoo choice, and drying — by coat type and activity level.",
    },
    {
      id: "brushing",
      title: "Brushing",
      description:
        "Tools and frequency for short, double, and curly coats — reducing mats and loose fur.",
    },
    {
      id: "nail-trimming",
      title: "Nail trimming",
      description:
        "Clippers vs. grinders, quick safety, and building calm nail sessions.",
    },
    {
      id: "ear-cleaning",
      title: "Ear cleaning",
      description:
        "Floppy vs. upright ears, cleaning solution, and signs of infection.",
    },
    {
      id: "dental-care",
      title: "Dental care",
      description:
        "Tooth brushing, dental chews, and professional cleanings — preventing tartar buildup.",
    },
    {
      id: "shedding",
      title: "Shedding",
      description:
        "Seasonal blowouts, diet links, and tools that actually help manage fur at home.",
    },
    {
      id: "skin-coat-care",
      title: "Skin & coat care",
      description:
        "Dry skin, hot spots, and coat dullness — bathing balance and vet-worthy changes.",
    },
  ],
};

export const hubConfigs: HubConfig[] = [
  canDogsEatHub,
  dogHealthHub,
  dogBehaviorHub,
  dogTrainingHub,
  dogBreedsHub,
  puppyCareHub,
  dogProductsHub,
  dogGroomingHub,
];

export function getHubConfig(
  category: ContentCategory,
): HubConfig | undefined {
  return hubConfigs.find((hub) => hub.category === category);
}

export function getHubConfigOrThrow(category: ContentCategory): HubConfig {
  const hub = getHubConfig(category);
  if (!hub) {
    throw new Error(`No hub config found for category: ${category}`);
  }
  return hub;
}
