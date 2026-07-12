"use client";

import { iconMap } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useDict } from "@/lib/i18n/LocaleProvider";

export function Benefits() {
  const dict = useDict();

  return (
    <section className="section" aria-labelledby="benefits-heading">
      <div className="container-page">
        <SectionHeading
          id="benefits-heading"
          eyebrow={dict.benefits.eyebrow}
          title={dict.benefits.title}
          subtitle={dict.benefits.subtitle}
        />

        <Stagger className="grid gap-6 sm:grid-cols-2" staggerDelay={0.09}>
          {dict.benefits.items.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <StaggerItem key={benefit.title}>
                <article className="card card-hover group flex h-full items-start gap-5 p-7">
                  <span className="icon-pop grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-50 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300">
                    {Icon ? <Icon className="h-6 w-6" aria-hidden /> : null}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-heading">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
