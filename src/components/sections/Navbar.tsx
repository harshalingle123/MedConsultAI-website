"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav } from "@/lib/content";
import { BookDemoButton } from "@/components/BookDemoButton";

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("mc-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    setDark(next);
  }, []);

  return { dark, toggle };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const { dark, toggle } = useTheme();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => {
      const previous = scrollY.getPrevious() ?? 0;
      setScrolled(y > 24);
      setHidden(y > 160 && y > previous);
    });
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = nav.links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: hidden && !open ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          aria-label="Main navigation"
          className={`glass flex w-full max-w-6xl items-center justify-between rounded-full pl-6 pr-2.5 transition-all duration-500 ease-premium ${
            scrolled ? "py-2 shadow-card-hover" : "py-2.5"
          }`}
        >
          <a href="/" className="flex items-center gap-2.5" aria-label="MedConverse AI home">
            <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-white">
              <Image src="/assets/images/logo.png" alt="" width={36} height={36} className="h-full w-full object-contain" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-heading">
              MedConverse<span className="text-gradient"> AI</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => {
              const active = activeHref === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={`/${link.href}`}
                    aria-current={active ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-primary-700 dark:hover:text-primary-300 ${
                      active ? "text-heading" : "text-body"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-primary-50 dark:bg-primary-950"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full text-body transition-colors hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-950"
            >
              {dark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
            </button>
            <a
              href="https://scribe.medconverse.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hidden px-5 py-2.5 text-sm md:inline-flex"
            >
              Log in
            </a>
            <BookDemoButton className="btn-solid hidden px-5 py-2.5 text-sm md:inline-flex">
              Book a demo
            </BookDemoButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full text-heading lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="ml-auto flex h-full w-80 max-w-[85vw] flex-col bg-surface p-6 shadow-card-hover"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-heading">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full text-heading hover:bg-surface-2"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={`/${link.href}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-body hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://scribe.medconverse.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full py-3 text-sm"
                >
                  Log in
                </a>
                <BookDemoButton className="btn-solid w-full py-3 text-sm">
                  Book a demo
                </BookDemoButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
