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

const TYPEWRITER_TEXT = "AI Clinical Assistant For\nEvery Consultation";

function TypewriterHeadline() {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const done = count >= TYPEWRITER_TEXT.length;

  useEffect(() => {
    if (done) return;
    if (reduceMotion) {
      setCount(TYPEWRITER_TEXT.length);
      return;
    }
    const id = setTimeout(() => setCount((current) => current + 1), 45);
    return () => clearTimeout(id);
  }, [count, done, reduceMotion]);

  const lines = TYPEWRITER_TEXT.slice(0, count).split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <span key={index} className="block">
          {line}
          {index === lines.length - 1 ? (
            <span
              aria-hidden
              className="ml-0.5 inline-block w-[3px] translate-y-[3px] animate-caret-blink bg-heading align-middle"
              style={{ height: "0.8em" }}
            />
          ) : null}
        </span>
      ))}
    </>
  );
}

function DashboardMock() {
  return (
    <div className="card relative overflow-hidden rounded-3xl p-3 sm:rounded-4xl sm:p-5 md:p-6">
      <div className="mb-3 flex items-center justify-between sm:mb-5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="h-2 w-2 rounded-full bg-error/60 sm:h-2.5 sm:w-2.5" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-warning/60 sm:h-2.5 sm:w-2.5" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-success/60 sm:h-2.5 sm:w-2.5" aria-hidden />
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-[9px] font-bold text-success sm:px-3 sm:py-1 sm:text-[11px]">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-success" aria-hidden />
          Recording
        </span>
      </div>

      <div className="grid gap-2 sm:gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-line/70 bg-surface-2/70 p-2 sm:gap-3 sm:rounded-2xl sm:p-3.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300 sm:h-10 sm:w-10 sm:rounded-xl">
            <Mic className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-heading sm:text-sm">Live transcript · Speaker ID</p>
            <p className="truncate text-[10px] text-muted sm:text-xs">
              &ldquo;Dr. Rao: How long have the symptoms lasted?&rdquo;
            </p>
          </div>
          <span className="ml-auto shrink-0 text-[10px] font-bold text-success sm:text-[11px]">Live</span>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-primary-200/70 bg-primary-50/80 p-2 dark:border-primary-800 dark:bg-primary-950/60 sm:gap-3 sm:rounded-2xl sm:p-3.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-900 text-white dark:bg-white dark:text-ink-900 sm:h-10 sm:w-10 sm:rounded-xl">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-heading sm:text-sm">AI Medical Scribe</p>
            <p className="truncate text-[10px] text-muted sm:text-xs">
              Generating summary · ICD-10 suggestions · interaction check
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-line/70 bg-surface-2/70 p-2 sm:gap-3 sm:rounded-2xl sm:p-3.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300 sm:h-10 sm:w-10 sm:rounded-xl">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-heading sm:text-sm">Summary ready for review</p>
            <p className="truncate text-[10px] text-muted sm:text-xs">SOAP note drafted · awaiting clinician approval</p>
          </div>
          <span className="ml-auto hidden shrink-0 rounded-full bg-warning/10 px-2.5 py-1 text-[11px] font-bold text-warning sm:inline-block">
            Review
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-line/70 pt-2.5 text-center sm:mt-5 sm:gap-3 sm:pt-4">
        {[
          { label: "Speaker ID", value: "Dr. Rao" },
          { label: "Segments", value: "18" },
          { label: "Status", value: "Offline-safe" },
        ].map((item) => (
          <div key={item.label} className="min-w-0">
            <p className="truncate font-display text-xs font-semibold text-heading sm:text-lg">{item.value}</p>
            <p className="truncate text-[8px] font-bold uppercase tracking-wider text-muted sm:text-[10px]">
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
        className="absolute -left-1 -top-2.5 sm:-left-4 sm:-top-5 md:-left-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <span className="flex animate-float items-center gap-1 rounded-full border border-line/70 bg-surface px-2 py-1 text-[9px] font-bold text-heading shadow-card-hover sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
          <WifiOff className="h-3 w-3 text-accent-600 sm:h-4 sm:w-4" aria-hidden />
          Works offline
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-2.5 -right-1 sm:-bottom-5 sm:-right-3 md:-right-8"
        style={{ transform: "translateZ(40px)" }}
      >
        <span
          className="flex animate-float items-center gap-1 rounded-full border border-line/70 bg-surface px-2 py-1 text-[9px] font-bold text-heading shadow-card-hover sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
          style={{ animationDelay: "-3s" }}
        >
          <ShieldCheck className="h-3 w-3 text-primary-600 sm:h-4 sm:w-4" aria-hidden />
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
      aria-labelledby="hero-heading-mobile hero-heading-desktop"
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

      {/* Mobile-only hero: centered, stacked, typewriter headline */}
      <div className="container-page relative flex flex-col items-center gap-6 text-center sm:hidden">
        <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0} className="eyebrow">
          <span className="eyebrow-dot" aria-hidden />
          AI agents built for healthcare
        </motion.span>

        <motion.h1
          id="hero-heading-mobile"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-heading"
        >
          <TypewriterHeadline />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-4xl bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 blur-2xl"
          />
          <TiltVisual />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.7}>
          <BookDemoButton className="btn-solid group px-8 py-3 text-base">
            Book a demo
            <span className="btn-chip">
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </BookDemoButton>
        </motion.div>
      </div>

      {/* Tablet & up: side-by-side layout */}
      <div className="container-page relative hidden items-center gap-8 sm:grid sm:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex min-w-0 flex-col items-start gap-7">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0} className="eyebrow">
            <span className="eyebrow-dot" aria-hidden />
            AI agents built for healthcare
          </motion.span>

          <motion.h1
            id="hero-heading-desktop"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="font-display text-6xl font-medium leading-[1.05] tracking-tight text-heading xl:text-7xl"
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
          className="relative min-w-0 w-full"
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
