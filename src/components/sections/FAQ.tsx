"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`card overflow-hidden transition-colors ${isOpen ? "border-primary-300 dark:border-primary-700" : ""}`}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-bold text-heading md:text-lg">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
            isOpen
              ? "bg-primary-600 text-white"
              : "bg-surface-2 text-muted"
          }`}
          aria-hidden
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted md:text-base">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container-page max-w-4xl">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything clinic and hospital leaders ask before bringing AI into the consultation room."
        />

        <Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.q}
                index={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
