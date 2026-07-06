"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { platformFeatures } from "@/lib/content";
import { iconMap } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const AUTO_ADVANCE_MS = 5200;

export function Platform() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(sectionRef, { margin: "-20%" });
  const reduceMotion = useReducedMotion();
  const autoPlay = inView && !paused && !reduceMotion;

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % platformFeatures.length),
      AUTO_ADVANCE_MS
    );
    return () => clearInterval(id);
  }, [autoPlay, active]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    const last = platformFeatures.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = active === last ? 0 : active + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = active === 0 ? last : active - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }
    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }, [active]);

  const feature = platformFeatures[active];
  const ActiveIcon = iconMap[feature.icon];

  return (
    <section
      id="platform"
      className="section bg-surface-2/50"
      aria-labelledby="platform-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="platform-heading"
          eyebrow="Product modules"
          title="Everything a clinic needs, in one system"
          subtitle="Beyond the scribe, MedConverse AI manages patients, appointments, follow-ups, and reporting in one multi-tenant, role-based workspace — and embeds directly into your existing HMS."
        />

        <Reveal>
          <div
            ref={sectionRef}
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
          >
            <div
              role="tablist"
              aria-label="Platform capabilities"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="flex flex-col gap-3"
            >
              {platformFeatures.map((item, index) => {
                const Icon = iconMap[item.icon];
                const selected = index === active;
                return (
                  <button
                    key={item.title}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`platform-tab-${index}`}
                    aria-selected={selected}
                    aria-controls="platform-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(index)}
                    className={`group relative overflow-hidden rounded-3.5xl border p-5 text-left transition-all duration-500 ease-premium md:p-6 ${
                      selected
                        ? "border-line bg-surface shadow-card-hover"
                        : "border-transparent bg-transparent hover:bg-surface/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-colors duration-500 ${
                          selected
                            ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                            : "bg-surface-2 text-muted group-hover:text-heading"
                        }`}
                      >
                        {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
                      </span>
                      <span
                        className={`font-display text-base font-semibold md:text-lg ${
                          selected ? "text-heading" : "text-muted group-hover:text-heading"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                    {selected ? (
                      <span className="absolute inset-x-6 bottom-0 h-0.5 overflow-hidden rounded-full bg-line" aria-hidden>
                        {autoPlay ? (
                          <motion.span
                            key={`progress-${active}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                            className="block h-full w-full origin-left bg-gradient-to-r from-primary-500 to-accent-500"
                          />
                        ) : (
                          <span className="block h-full w-full bg-gradient-to-r from-primary-500 to-accent-500" />
                        )}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div
              id="platform-panel"
              role="tabpanel"
              aria-labelledby={`platform-tab-${active}`}
              className="card relative min-h-[380px] overflow-hidden rounded-4xl p-8 md:p-10"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col"
                >
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300">
                    {ActiveIcon ? <ActiveIcon className="h-7 w-7" aria-hidden /> : null}
                  </span>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-heading md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  <ul className="mt-8 flex flex-col gap-3.5">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-[15px] font-semibold text-body">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-600" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
