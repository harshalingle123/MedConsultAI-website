"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { workflow } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Workflow() {
  const trackRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="workflow" className="section" aria-labelledby="workflow-heading">
      <div className="container-page">
        <SectionHeading
          id="workflow-heading"
          eyebrow="How it works"
          title="From 'Start' to signed-off, in five steps"
          subtitle="Documentation isn't a single moment — it's a workflow. MedConverse AI automates every step without taking the clinician out of the loop."
        />

        <ol ref={trackRef} className="relative mx-auto flex max-w-3xl flex-col gap-10 pl-14 md:gap-14">
          <div aria-hidden className="absolute bottom-5 left-[23px] top-5 w-0.5 rounded-full bg-line" />
          <motion.div
            aria-hidden
            className="absolute bottom-5 left-[23px] top-5 w-0.5 origin-top rounded-full bg-gradient-to-b from-primary-500 to-accent-500"
            style={{ scaleY: reduceMotion ? 1 : progress }}
          />

          {workflow.map((item, index) => (
            <li key={item.step} className="relative">
              <Reveal delay={index * 0.05}>
                <motion.span
                  aria-hidden
                  whileInView={{ backgroundColor: "#0C8CE9", color: "#ffffff" }}
                  viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -left-14 top-0 grid h-12 w-12 place-items-center rounded-full border-2 border-primary-200 bg-surface font-display text-sm font-bold text-primary-600 shadow-card dark:border-primary-800 dark:text-primary-300"
                >
                  {item.step}
                </motion.span>
                <div className="card card-hover p-6 md:p-7">
                  <h3 className="font-display text-xl font-bold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
