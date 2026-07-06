export type TrustPage = {
  path:
    | `/about`
    | `/contact`
    | `/editorial-standards`
    | `/privacy`
    | `/accessibility`;
  title: string;
  description: string;
};

export const trustPages: TrustPage[] = [
  {
    path: "/about",
    title: "About",
    description:
      "Learn what PupQuestions is, what topics we cover, and how we approach dog care information for everyday owners.",
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "How to reach PupQuestions with corrections, feedback, source suggestions, or general inquiries.",
  },
  {
    path: "/editorial-standards",
    title: "Editorial Standards",
    description:
      "How PupQuestions selects topics, structures answers, handles food safety and health content, and updates pages.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "A straightforward overview of what information PupQuestions may collect and how the site handles privacy.",
  },
  {
    path: "/accessibility",
    title: "Accessibility",
    description:
      "How PupQuestions is working to improve website accessibility and how to report barriers you encounter.",
  },
];

export const TRUST_PAGE_COUNT = trustPages.length;
