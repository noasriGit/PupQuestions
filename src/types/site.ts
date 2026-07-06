export type SiteSection = {
  slug: string;
  title: string;
  description: string;
  href: `/${string}`;
  icon?: string;
};

export type SiteConfig = {
  name: string;
  url: string;
  description: string;
  tagline: string;
};
