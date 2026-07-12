"use client";

import { iconMap } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { useDict } from "@/lib/i18n/LocaleProvider";

export function Security() {
  const dict = useDict();

  return (
    <section
      id="security"
      className="section bg-surface-2/50"
      aria-labelledby="security-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="security-heading"
          eyebrow={dict.security.eyebrow}
          title={dict.security.title}
          subtitle={dict.security.subtitle}
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {dict.security.items.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <article className="card card-hover group h-full p-6">
                  <span className="icon-pop mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300">
                    {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
                  </span>
                  <h3 className="font-display text-base font-bold text-heading">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted">
            {dict.security.complianceNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
