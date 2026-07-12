"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Globe2 } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { LocaleCode } from "@/lib/i18n/locales";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, localeMeta, locales, dict, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() =>
    locales.findIndex((item) => item.code === locale)
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setActiveIndex(locales.findIndex((item) => item.code === locale));
    const id = window.setTimeout(() => {
      optionRefs.current[locales.findIndex((item) => item.code === locale)]?.focus();
    }, 0);
    return () => window.clearTimeout(id);
  }, [open, locale, locales]);

  const close = useCallback((refocusButton: boolean) => {
    setOpen(false);
    if (refocusButton) buttonRef.current?.focus();
  }, []);

  const choose = useCallback(
    (code: LocaleCode) => {
      setLocale(code);
      close(true);
    },
    [setLocale, close]
  );

  const onListKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const last = locales.length - 1;
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        const next = activeIndex >= last ? 0 : activeIndex + 1;
        setActiveIndex(next);
        optionRefs.current[next]?.focus();
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        const prev = activeIndex <= 0 ? last : activeIndex - 1;
        setActiveIndex(prev);
        optionRefs.current[prev]?.focus();
        return;
      }
      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(0);
        optionRefs.current[0]?.focus();
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        setActiveIndex(last);
        optionRefs.current[last]?.focus();
      }
    },
    [activeIndex, locales.length, close]
  );

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${dict.languageSwitcher.label} (${localeMeta.englishName})`}
        className="flex h-9 shrink-0 items-center gap-1.5 rounded-full px-1.5 text-body transition-colors hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-950 sm:h-10 sm:px-2.5"
      >
        <Globe2 className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
        <span className="hidden text-xs font-bold uppercase tracking-wide sm:inline">{locale}</span>
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={dict.languageSwitcher.label}
          tabIndex={-1}
          onKeyDown={onListKeyDown}
          className="absolute end-0 top-full z-50 mt-2 max-h-[60vh] w-52 overflow-y-auto rounded-2xl border border-line/70 bg-surface p-1.5 shadow-card-hover"
        >
          {locales.map((item, index) => {
            const selected = item.code === locale;
            return (
              <button
                key={item.code}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={index === activeIndex ? 0 : -1}
                onClick={() => choose(item.code)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                  selected
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                    : "text-body hover:bg-surface-2"
                }`}
              >
                <span>{item.nativeName}</span>
                {selected ? <Check className="h-4 w-4 shrink-0" aria-hidden /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
