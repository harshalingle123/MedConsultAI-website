import { Globe2, Languages as LanguagesIcon } from "lucide-react";
import { languages } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Languages() {
  return (
    <section className="section" aria-labelledby="languages-heading">
      <div className="container-page">
        <SectionHeading
          id="languages-heading"
          eyebrow="Every patient, understood"
          title="Care in 30+ Indian languages"
          subtitle="The Multilingual Communication Agent translates conversations in real time and generates multilingual summaries — enabling cross-language doctor-patient communication without an interpreter in the room."
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
              + 30 languages supported
            </span>
          </StaggerItem>
        </Stagger>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-muted">
          Representative list — full language coverage is confirmed during onboarding.
        </p>
      </div>
    </section>
  );
}
