export type PlaceholderQuestion = {
  title: string;
  href: string;
  section: string;
};

export const popularQuestions: PlaceholderQuestion[] = [
  {
    title: "Can dogs eat grapes?",
    href: "/can-dogs-eat",
    section: "Can Dogs Eat",
  },
  {
    title: "Why is my dog eating grass?",
    href: "/dog-behavior",
    section: "Dog Behavior",
  },
  {
    title: "How often should I bathe my dog?",
    href: "/dog-grooming",
    section: "Dog Grooming",
  },
  {
    title: "When should puppies start training?",
    href: "/dog-training",
    section: "Dog Training",
  },
  {
    title: "What vaccines do puppies need?",
    href: "/dog-health",
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
