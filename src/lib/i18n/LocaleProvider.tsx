"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Dictionary } from "./dictionary";
import { dictionaryLoaders, en } from "./dictionaries";
import {
  type LocaleCode,
  type LocaleMeta,
  defaultLocale,
  getLocaleMeta,
  locales,
  matchBrowserLocale,
} from "./locales";

const STORAGE_KEY = "mc-locale";

type LocaleContextValue = {
  locale: LocaleCode;
  localeMeta: LocaleMeta;
  locales: LocaleMeta[];
  dict: Dictionary;
  setLocale: (code: LocaleCode) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function detectInitialLocale(): LocaleCode {
  if (typeof window === "undefined") return defaultLocale;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && stored in dictionaryLoaders) return stored as LocaleCode;
  } catch {
    /* storage unavailable */
  }

  const candidates =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const tag of candidates) {
    const matched = matchBrowserLocale(tag);
    if (matched) return matched;
  }

  return defaultLocale;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(defaultLocale);
  const [dict, setDict] = useState<Dictionary>(en);
  const cache = useRef<Partial<Record<LocaleCode, Dictionary>>>({ en });
  const hydrated = useRef(false);

  const applyDocumentAttrs = useCallback((code: LocaleCode) => {
    const meta = getLocaleMeta(code);
    document.documentElement.lang = code;
    document.documentElement.dir = meta.dir;
  }, []);

  const loadLocale = useCallback(
    async (code: LocaleCode) => {
      const cached = cache.current[code];
      if (cached) {
        setDict(cached);
        return;
      }
      const loaded = await dictionaryLoaders[code]();
      cache.current[code] = loaded;
      setDict(loaded);
    },
    []
  );

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const initial = detectInitialLocale();
    setLocaleState(initial);
    applyDocumentAttrs(initial);
    try {
      window.localStorage.setItem(STORAGE_KEY, initial);
    } catch {
      /* storage unavailable */
    }
    if (initial !== "en") {
      void loadLocale(initial);
    }
  }, [applyDocumentAttrs, loadLocale]);

  const setLocale = useCallback(
    (code: LocaleCode) => {
      setLocaleState(code);
      applyDocumentAttrs(code);
      try {
        window.localStorage.setItem(STORAGE_KEY, code);
      } catch {
        /* storage unavailable */
      }
      void loadLocale(code);
    },
    [applyDocumentAttrs, loadLocale]
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      localeMeta: getLocaleMeta(locale),
      locales,
      dict,
      setLocale,
    }),
    [locale, dict, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

export function useDict() {
  return useLocale().dict;
}
