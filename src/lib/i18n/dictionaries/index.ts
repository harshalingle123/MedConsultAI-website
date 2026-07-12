import type { LocaleCode } from "../locales";
import type { Dictionary } from "../dictionary";
import en from "./en";

export { en };

export const dictionaryLoaders: Record<LocaleCode, () => Promise<Dictionary>> = {
  en: () => Promise.resolve(en),
  hi: () => import("./hi").then((m) => m.default),
  ar: () => import("./ar").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
  de: () => import("./de").then((m) => m.default),
  pt: () => import("./pt").then((m) => m.default),
  it: () => import("./it").then((m) => m.default),
  ja: () => import("./ja").then((m) => m.default),
  ko: () => import("./ko").then((m) => m.default),
  zh: () => import("./zh").then((m) => m.default),
};
