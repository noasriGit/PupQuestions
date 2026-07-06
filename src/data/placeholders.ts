export type PlaceholderQuestion = {
  title: string;
  href: string;
  section: string;
};

export const popularQuestions: PlaceholderQuestion[] = [
  {
    title: "Can dogs eat blueberries?",
    href: "/can-dogs-eat/blueberries",
    section: "Can Dogs Eat",
  },
  {
    title: "Why do dogs eat grass?",
    href: "/dog-behavior/why-do-dogs-eat-grass",
    section: "Dog Behavior",
  },
  {
    title: "How often should I bathe my dog?",
    href: "/dog-grooming",
    section: "Dog Grooming",
  },
  {
    title: "How to stop a dog pulling on the leash",
    href: "/dog-training/how-to-stop-dog-pulling-on-leash",
    section: "Dog Training",
  },
  {
    title: "Why is my dog throwing up?",
    href: "/dog-health/why-is-my-dog-throwing-up",
    section: "Dog Health",
  },
];

export const demoFaqItems = [
  {
    question: "Is PupQuestions a substitute for veterinary advice?",
    answer:
      "No. PupQuestions provides general educational information for dog owners. Always consult a licensed veterinarian for diagnosis, treatment, and emergencies.",
  },
  {
    question: "How are food safety answers structured?",
    answer:
      "Food guides will clearly label items as safe, caution, or toxic, with practical serving notes and signs to watch for when something goes wrong.",
  },
  {
    question: "Will articles cover breed-specific guidance?",
    answer:
      "Yes. Where breed, size, or age matters, articles will call out those differences so answers stay relevant to your dog.",
  },
];
