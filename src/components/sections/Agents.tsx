"use client";

import { iconMap } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useDict } from "@/lib/i18n/LocaleProvider";

export function Agents() {
  const dict = useDict();

  return (
    <section id="agents" className="section" aria-labelledby="agents-heading">
      <div className="container-page">
        <SectionHeading
          id="agents-heading"
          eyebrow={dict.agents.eyebrow}
          title={dict.agents.title}
          subtitle={dict.agents.subtitle}
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.09}>
          {dict.agents.items.map((agent) => {
            const Icon = iconMap[agent.icon];
            return (
              <StaggerItem key={agent.name}>
                <article className="card card-hover group relative h-full overflow-hidden p-7">
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary-600 transition-all duration-500 ease-premium group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-ink-900 group-hover:text-white dark:bg-primary-950 dark:text-primary-300 dark:group-hover:bg-white dark:group-hover:text-ink-900">
                    {Icon ? <Icon className="h-6 w-6" aria-hidden /> : null}
                  </span>
                  <h3 className="font-display text-xl font-bold text-heading">{agent.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {agent.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{agent.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
