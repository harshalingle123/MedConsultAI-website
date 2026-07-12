"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
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
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { BookDemoButton } from "@/components/BookDemoButton";
import { useDict } from "@/lib/i18n/LocaleProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function RotatingWord() {
  const { hero } = useDict();
  const rotatingWords = hero.rotatingWords;
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setIndex(0);
  }, [rotatingWords]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((current) => (current + 1) % rotatingWords.length),
      2600
    );
    return () => clearInterval(id);
  }, [reduceMotion, rotatingWords]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap pb-1"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Caret() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block w-[3px] translate-y-[3px] animate-caret-blink bg-heading align-middle"
      style={{ height: "0.8em" }}
    />
  );
}

const headlinePhraseGradientStyle: CSSProperties = {
  backgroundImage: "linear-gradient(90deg, #3B82F6 0%, #60A5FA 50%, #2DD4BF 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

function GradientPhrase({ children }: { children: React.ReactNode }) {
  return <span style={headlinePhraseGradientStyle}>{children}</span>;
}

function TypewriterHeadline() {
  const { hero } = useDict();
  const headlineRotatingPhrases = hero.headlineRotatingPhrases;
  const typewriterText = `${hero.headlineLine1}\n${headlineRotatingPhrases[0]}`;
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const typingDone = count >= typewriterText.length;
  const [rotateIndex, setRotateIndex] = useState(0);

  useEffect(() => {
    setCount(0);
    setRotateIndex(0);
  }, [typewriterText]);

  useEffect(() => {
    if (typingDone) return;
    if (reduceMotion) {
      setCount(typewriterText.length);
      return;
    }
    const id = setTimeout(() => setCount((current) => current + 1), 45);
    return () => clearTimeout(id);
  }, [count, typingDone, reduceMotion, typewriterText]);

  useEffect(() => {
    if (!typingDone || reduceMotion) return;
    const id = setInterval(
      () => setRotateIndex((current) => (current + 1) % headlineRotatingPhrases.length),
      2600
    );
    return () => clearInterval(id);
  }, [typingDone, reduceMotion, headlineRotatingPhrases]);

  const typedLines = typewriterText.slice(0, count).split("\n");
  const line1 = typedLines[0];
  const typedLine2 = typedLines[1];

  return (
    <>
      <span className="block">
        {line1}
        {!typingDone && typedLine2 === undefined ? <Caret /> : null}
      </span>
      {typingDone ? (
        <span className="relative grid overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={headlineRotatingPhrases[rotateIndex]}
              initial={reduceMotion ? false : { y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="block pb-1"
            >
              <GradientPhrase>{headlineRotatingPhrases[rotateIndex]}</GradientPhrase>
              <Caret />
            </motion.span>
          </AnimatePresence>
        </span>
      ) : typedLine2 !== undefined ? (
        <span className="block">
          <GradientPhrase>{typedLine2}</GradientPhrase>
          <Caret />
        </span>
      ) : null}
    </>
  );
}

function DashboardMock() {
  const { hero } = useDict();
  const mock = hero.mock;
  const stats = [
    { label: mock.speakerIdLabel, value: mock.speakerName },
    { label: mock.segmentsLabel, value: mock.segmentsValue },
    { label: mock.statusLabel, value: mock.statusValue },
  ];

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
          {mock.recording}
        </span>
      </div>

      <div className="grid gap-2 sm:gap-3">
        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-line/70 bg-surface-2/70 p-2 sm:gap-3 sm:rounded-2xl sm:p-3.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300 sm:h-10 sm:w-10 sm:rounded-xl">
            <Mic className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-heading sm:text-sm">{mock.liveTranscriptLabel}</p>
            <p className="text-[10px] text-muted sm:text-xs">{mock.quote}</p>
          </div>
          <span className="ml-auto shrink-0 text-[10px] font-bold text-success sm:text-[11px]">{mock.liveBadge}</span>
        </div>

        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-primary-200/70 bg-primary-50/80 p-2 dark:border-primary-800 dark:bg-primary-950/60 sm:gap-3 sm:rounded-2xl sm:p-3.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-900 text-white dark:bg-white dark:text-ink-900 sm:h-10 sm:w-10 sm:rounded-xl">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-heading sm:text-sm">{mock.aiScribeLabel}</p>
            <p className="text-[10px] text-muted sm:text-xs">{mock.generatingSummary}</p>
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-line/70 bg-surface-2/70 p-2 sm:gap-3 sm:rounded-2xl sm:p-3.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300 sm:h-10 sm:w-10 sm:rounded-xl">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-heading sm:text-sm">{mock.summaryReady}</p>
            <p className="text-[10px] text-muted sm:text-xs">{mock.soapNote}</p>
          </div>
          <span className="ml-auto hidden shrink-0 rounded-full bg-warning/10 px-2.5 py-1 text-[11px] font-bold text-warning sm:inline-block">
            {mock.review}
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-line/70 pt-2.5 text-center sm:mt-5 sm:gap-3 sm:pt-4">
        {stats.map((item) => (
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
  const { hero } = useDict();
  const mock = hero.mock;
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
        className="absolute -left-1 -top-4 sm:-left-4 sm:-top-5 md:-left-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <span className="flex animate-float items-center gap-1 rounded-full border border-line/70 bg-surface px-2 py-1 text-[9px] font-bold text-heading shadow-card-hover sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
          <WifiOff className="h-3 w-3 text-accent-600 sm:h-4 sm:w-4" aria-hidden />
          {mock.offlineBadge}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-4 -right-1 sm:-bottom-5 sm:-right-3 md:-right-8"
        style={{ transform: "translateZ(40px)" }}
      >
        <span
          className="flex animate-float items-center gap-1 rounded-full border border-line/70 bg-surface px-2 py-1 text-[9px] font-bold text-heading shadow-card-hover sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
          style={{ animationDelay: "-3s" }}
        >
          <ShieldCheck className="h-3 w-3 text-primary-600 sm:h-4 sm:w-4" aria-hidden />
          {mock.clinicianApprovedBadge}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const { hero, common } = useDict();
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
          {hero.eyebrow}
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
            {common.bookDemo}
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
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            id="hero-heading-desktop"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="max-w-full font-display text-6xl font-medium leading-[1.05] tracking-tight text-heading xl:text-7xl"
          >
            {hero.headlineLine1}{" "}
            <GradientPhrase>{hero.headlineRotatingPhrases[0]}</GradientPhrase>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.16}
            className="max-w-xl text-lg leading-relaxed text-body"
          >
            {hero.subtitlePrefix}
            <RotatingWord />
            {hero.subtitleSuffix}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="flex flex-wrap items-center gap-3 lg:gap-4"
          >
            <BookDemoButton className="btn-solid group py-2 pl-5 pr-2 text-sm lg:pl-6 lg:text-base">
              {common.bookDemo}
              <span className="btn-chip">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </BookDemoButton>
            <a href="#demo" className="btn-ghost px-5 py-3 text-sm lg:px-7 lg:py-3.5 lg:text-base">
              {hero.seeHowItWorks}
            </a>
          </motion.div>
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

      <motion.ul
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="container-page relative hidden flex-wrap items-center gap-x-2 gap-y-2 pt-10 text-[13px] font-semibold text-muted sm:flex lg:pt-12"
      >
        {hero.trustStrip.map((item, index) => (
          <li key={item} className="flex items-center gap-2">
            {item}
            {index < hero.trustStrip.length - 1 ? (
              <span aria-hidden className="text-line">
                ·
              </span>
            ) : null}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
