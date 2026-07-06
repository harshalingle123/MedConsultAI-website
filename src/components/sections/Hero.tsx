"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  FileText,
  Mic,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from "lucide-react";
import { heroRotatingWords, heroTrustStrip } from "@/lib/content";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { BookDemoButton } from "@/components/BookDemoButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((current) => (current + 1) % heroRotatingWords.length),
      2600
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={heroRotatingWords[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap pb-1"
        >
          {heroRotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function DashboardMock() {
  return (
    <div className="card relative overflow-hidden rounded-4xl p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-error/60" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/60" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" aria-hidden />
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-[11px] font-bold text-success">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-success" aria-hidden />
          Recording
        </span>
      </div>

      <div className="grid gap-3">
        <div className="flex items-center gap-3 rounded-2xl border border-line/70 bg-surface-2/70 p-3.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300">
            <Mic className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-heading">Live transcript · Speaker ID</p>
            <p className="truncate text-xs text-muted">
              &ldquo;Dr. Rao: How long have the symptoms lasted?&rdquo;
            </p>
          </div>
          <span className="ml-auto shrink-0 text-[11px] font-bold text-success">Live</span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-primary-200/70 bg-primary-50/80 p-3.5 dark:border-primary-800 dark:bg-primary-950/60">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-900 text-white dark:bg-white dark:text-ink-900">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-heading">AI Medical Scribe</p>
            <p className="truncate text-xs text-muted">
              Generating summary · ICD-10 suggestions · interaction check
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-line/70 bg-surface-2/70 p-3.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300">
            <FileText className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-heading">Summary ready for review</p>
            <p className="truncate text-xs text-muted">SOAP note drafted · awaiting clinician approval</p>
          </div>
          <span className="ml-auto shrink-0 rounded-full bg-warning/10 px-2.5 py-1 text-[11px] font-bold text-warning">
            Review
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line/70 pt-4 text-center">
        {[
          { label: "Speaker ID", value: "Dr. Rao" },
          { label: "Segments", value: "18" },
          { label: "Status", value: "Offline-safe" },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-display text-lg font-semibold text-heading">{item.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TiltVisual() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [5, -5]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-6, 6]), {
    stiffness: 120,
    damping: 18,
  });

  return (
    <motion.div
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }
      }
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width);
        pointerY.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.5);
      }}
      className="relative"
    >
      <DashboardMock />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-4 -top-5 md:-left-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <span className="flex animate-float items-center gap-2 rounded-full border border-line/70 bg-surface px-4 py-2 text-xs font-bold text-heading shadow-card-hover">
          <WifiOff className="h-4 w-4 text-accent-600" aria-hidden />
          Works offline
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 -right-3 md:-right-8"
        style={{ transform: "translateZ(40px)" }}
      >
        <span
          className="flex animate-float items-center gap-2 rounded-full border border-line/70 bg-surface px-4 py-2 text-xs font-bold text-heading shadow-card-hover"
          style={{ animationDelay: "-3s" }}
        >
          <ShieldCheck className="h-4 w-4 text-primary-600" aria-hidden />
          Clinician-approved
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -50]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-48"
      aria-labelledby="hero-heading"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden>
        <FloatingOrbs />
        <div
          className="absolute inset-0 opacity-[0.32] dark:opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--line) / 0.6) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </motion.div>

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="order-2 flex flex-col items-start gap-7 lg:order-1">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0} className="eyebrow">
            <span className="eyebrow-dot" aria-hidden />
            AI agents built for healthcare
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight text-heading sm:text-6xl xl:text-7xl"
          >
            AI Clinical Assistant
            <br />
            for Every Consultation
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.16}
            className="max-w-xl text-lg leading-relaxed text-body"
          >
            MedConverse AI listens to every consultation, automatically creates
            clinical documentation, generates AI-powered summaries, supports
            prescription workflows, suggests medical codes, identifies potential
            drug interactions, and streamlines follow-up care — so{" "}
            <RotatingWord /> can focus on patients, not paperwork.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="flex flex-wrap items-center gap-4"
          >
            <BookDemoButton className="btn-solid group py-2 pl-6 pr-2 text-base">
              Book a demo
              <span className="btn-chip">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </BookDemoButton>
            <a href="#demo" className="btn-ghost px-7 py-3.5 text-base">
              See how it works
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.32}
            className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-semibold text-muted"
          >
            {heroTrustStrip.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                {item}
                {index < heroTrustStrip.length - 1 ? (
                  <span aria-hidden className="text-line">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: visualY }}
          className="order-1 relative mx-auto w-full max-w-lg lg:order-2 lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-8 rounded-4xl bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 blur-2xl"
          />
          <TiltVisual />
        </motion.div>
      </div>
    </section>
  );
}
