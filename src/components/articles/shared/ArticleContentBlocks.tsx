import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import type { ArticleContentBlock } from "@/types/content";

type ArticleSectionProps = {
  heading: string;
  children: ReactNode;
  className?: string;
};

export function ArticleSection({ heading, children, className }: ArticleSectionProps) {
  return (
    <section className={className}>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}

type ArticleBlockContentProps = ArticleContentBlock;

export function ArticleBlockContent({ paragraphs, listItems }: ArticleBlockContentProps) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      {listItems && listItems.length > 0 ? (
        <ul>
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

type EditorialNoteAsideProps = {
  children: ReactNode;
  className?: string;
};

export function EditorialNoteAside({ children, className }: EditorialNoteAsideProps) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-stone-600",
        className,
      )}
    >
      {children}
    </aside>
  );
}
