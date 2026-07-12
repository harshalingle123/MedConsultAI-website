"use client";

import { Globe2, Languages as LanguagesIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useDict } from "@/lib/i18n/LocaleProvider";

const languages = [
  "Hindi",
  "Bengali",
  "Marathi",
  "Telugu",
  "Tamil",
  "Gujarati",
  "Urdu",
  "Kannada",
  "Odia",
  "Punjabi",
  "Malayalam",
  "Assamese",
];

export function Languages() {
  const dict = useDict();

  return (
    <section className="section" aria-labelledby="languages-heading">
      <div className="container-page">
        <SectionHeading
          id="languages-heading"
          eyebrow={dict.languagesSection.eyebrow}
          title={dict.languagesSection.title}
          subtitle={dict.languagesSection.subtitle}
        />

        <Stagger className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3" staggerDelay={0.04}>
          {languages.map((language, index) => (
            <StaggerItem key={language}>
              <span
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-card-hover ${
                  index % 4 === 0
                    ? "border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300"
                    : "border-line/70 bg-surface text-body"
                }`}
              >
                {index % 4 === 0 ? <Globe2 className="h-4 w-4" aria-hidden /> : null}
                {language}
              </span>
            </StaggerItem>
          ))}
          <StaggerItem>
            <span className="flex items-center gap-2 rounded-full border border-dashed border-line px-5 py-2.5 text-sm font-semibold text-muted">
              <LanguagesIcon className="h-4 w-4" aria-hidden />
              {dict.languagesSection.moreLabel}
            </span>
          </StaggerItem>
        </Stagger>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-muted">
          {dict.languagesSection.note}
        </p>
      </div>
    </section>
  );
}
