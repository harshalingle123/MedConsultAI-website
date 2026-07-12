"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { FileText, Mic, RotateCcw, Stethoscope, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useDict } from "@/lib/i18n/LocaleProvider";

export function AIDemo() {
  const { demo } = useDict();
  const script = demo.script;
  const highlights = demo.highlights;
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setVisibleCount(script.length);
      return;
    }

    setVisibleCount(0);
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 600;

    script.forEach((message, index) => {
      const typingLead = message.from === "system" ? 700 : 900;
      timers.push(
        setTimeout(() => {
          if (!cancelled) setTyping(true);
        }, elapsed)
      );
      elapsed += typingLead;
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setTyping(false);
          setVisibleCount(index + 1);
        }, elapsed)
      );
      elapsed += 700;
    });

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView, reduceMotion, runId]);

  return (
    <section id="demo" className="section" aria-labelledby="demo-heading">
      <div className="container-page">
        <SectionHeading
          id="demo-heading"
          eyebrow={demo.eyebrow}
          title={demo.title}
          subtitle={demo.subtitle}
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="right" className="order-2 lg:order-1">
            <ul className="flex flex-col gap-4">
              {highlights.map((item, index) => (
                <li key={item.label} className="card card-hover flex items-start gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-900 font-display text-sm font-bold text-white dark:bg-white dark:text-ink-900">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-heading">{item.label}</p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            <div ref={containerRef} className="card relative mx-auto w-full max-w-md overflow-hidden">
              <div className="flex items-center justify-between border-b border-line bg-surface-2 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-white dark:bg-white dark:text-ink-900">
                    <Mic className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-heading">{demo.cardTitle}</p>
                    <p className="flex items-center gap-1.5 text-xs text-success">
                      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-success" aria-hidden />
                      {demo.transcribingLive}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setRunId((id) => id + 1)}
                  aria-label={demo.replayAria}
                  className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-950"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <div className="flex min-h-[380px] flex-col gap-3 p-5" aria-live="polite">
                <AnimatePresence initial={false}>
                  {script.slice(0, visibleCount).map((message, index) =>
                    message.from === "system" ? (
                      <motion.div
                        key={`${runId}-${index}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-dashed border-accent-300 bg-accent-50 px-4 py-2.5 text-center text-xs font-semibold text-accent-700 dark:border-accent-700 dark:bg-accent-900/30 dark:text-accent-300"
                      >
                        <FileText className="h-4 w-4 shrink-0" aria-hidden />
                        {message.text}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`${runId}-${index}`}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className={`flex max-w-[85%] items-end gap-2 ${
                          message.from === "patient" ? "self-end flex-row-reverse" : "self-start"
                        }`}
                      >
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${
                            message.from === "patient"
                              ? "bg-ink-200 text-ink-700 dark:bg-ink-700 dark:text-ink-200"
                              : "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                          }`}
                          aria-hidden
                        >
                          {message.from === "patient" ? (
                            <User className="h-3.5 w-3.5" />
                          ) : (
                            <Stethoscope className="h-3.5 w-3.5" />
                          )}
                        </span>
                        <p
                          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                            message.from === "patient"
                              ? "rounded-br-md bg-primary-600 text-white"
                              : "rounded-bl-md border border-line bg-surface-2 text-body"
                          }`}
                        >
                          <span className="sr-only">
                            {message.from === "patient" ? demo.patientSrLabel : demo.doctorSrLabel}
                          </span>
                          {message.text}
                        </p>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>

                {typing ? (
                  <div className="flex items-center gap-1.5 self-start rounded-2xl rounded-bl-md border border-line bg-surface-2 px-4 py-3" aria-label={demo.transcribingAria}>
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        style={{
                          animation: "typing 1.1s ease-in-out infinite",
                          animationDelay: `${dot * 0.15}s`,
                        }}
                        aria-hidden
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
