"use client";

import { ArrowRight } from "lucide-react";
import { iconMap } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useDict } from "@/lib/i18n/LocaleProvider";

export function ProductOverview() {
  const { productOverview } = useDict();

  return (
    <section className="section" aria-labelledby="overview-heading">
      <div className="container-page">
        <SectionHeading
          id="overview-heading"
          eyebrow={productOverview.eyebrow}
          title={productOverview.title}
          subtitle={productOverview.subtitle}
        />

        <Stagger
          className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3"
          staggerDelay={0.1}
        >
          {productOverview.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <StaggerItem key={step.title}>
                <div className="card card-hover group relative flex h-full flex-col items-center gap-3 p-7 text-center">
                  <span className="icon-pop grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300">
                    {Icon ? <Icon className="h-6 w-6" aria-hidden /> : null}
                  </span>
                  <h3 className="font-display text-lg font-bold text-heading">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                  {index < productOverview.steps.length - 1 ? (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-8 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-line sm:block"
                    />
                  ) : null}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
