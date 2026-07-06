"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

import { cn } from "@/lib/cn";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
  title?: string;
  className?: string;
};

export function FaqSection({
  items,
  title = "Frequently asked questions",
  className,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionId = useId();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusButton(index: number) {
    buttonRefs.current[index]?.focus();
  }

  function handleButtonKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = items.length - 1;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusButton(index < lastIndex ? index + 1 : 0);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusButton(index > 0 ? index - 1 : lastIndex);
        break;
      case "Home":
        event.preventDefault();
        focusButton(0);
        break;
      case "End":
        event.preventDefault();
        focusButton(lastIndex);
        break;
      case "Escape":
        event.preventDefault();
        setOpenIndex(null);
        break;
      default:
        break;
    }
  }

  return (
    <section className={className} aria-labelledby={sectionId}>
      <h2
        id={sectionId}
        className="text-2xl font-bold tracking-tight text-stone-900"
      >
        {title}
      </h2>
      <ul className="mt-6 divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${sectionId}-panel-${index}`;
          const buttonId = `${sectionId}-button-${index}`;

          return (
            <li key={item.question}>
              <h3>
                <button
                  ref={(element) => {
                    buttonRefs.current[index] = element;
                  }}
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-stone-900 transition hover:bg-stone-50 sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onKeyDown={(event) => handleButtonKeyDown(event, index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition",
                      isOpen && "rotate-180 bg-amber-100 text-amber-800",
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-5 pb-5 text-sm leading-relaxed text-stone-600 sm:px-6"
              >
                {item.answer}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
