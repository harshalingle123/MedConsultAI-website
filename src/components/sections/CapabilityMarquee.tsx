"use client";

import { CheckCircle2 } from "lucide-react";
import { useDict } from "@/lib/i18n/LocaleProvider";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden">
      <ul
        className={`flex w-max gap-3 py-1.5 hover:[animation-play-state:paused] ${
          reverse ? "motion-safe:animate-marquee-reverse" : "motion-safe:animate-marquee"
        }`}
      >
        {doubled.map((item, index) => (
          <li
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-body shadow-card"
          >
            <CheckCircle2 className="h-4 w-4 text-accent-500" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CapabilityMarquee() {
  const dict = useDict();
  return (
    <section aria-label="What MedConverse agents handle" className="py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <MarqueeRow items={dict.capabilityRowA} />
        <MarqueeRow items={dict.capabilityRowB} reverse />
      </div>
    </section>
  );
}
