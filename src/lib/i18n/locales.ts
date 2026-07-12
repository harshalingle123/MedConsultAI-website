export type LocaleCode =
  | "en"
  | "hi"
  | "ar"
  | "es"
  | "fr"
  | "de"
  | "pt"
  | "it"
  | "ja"
  | "ko"
  | "zh";

export type LocaleMeta = {
  code: LocaleCode;
  /** Name in its own language, shown in the switcher. */
  nativeName: string;
  /** English name, used for aria-labels and fallbacks. */
  englishName: string;
  dir: "ltr" | "rtl";
};

export const locales: LocaleMeta[] = [
  { code: "en", nativeName: "English", englishName: "English", dir: "ltr" },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi", dir: "ltr" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic", dir: "rtl" },
  { code: "es", nativeName: "Español", englishName: "Spanish", dir: "ltr" },
  { code: "fr", nativeName: "Français", englishName: "French", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", englishName: "German", dir: "ltr" },
  { code: "pt", nativeName: "Português", englishName: "Portuguese", dir: "ltr" },
  { code: "it", nativeName: "Italiano", englishName: "Italian", dir: "ltr" },
  { code: "ja", nativeName: "日本語", englishName: "Japanese", dir: "ltr" },
  { code: "ko", nativeName: "한국어", englishName: "Korean", dir: "ltr" },
  { code: "zh", nativeName: "简体中文", englishName: "Chinese (Simplified)", dir: "ltr" },
];

export const defaultLocale: LocaleCode = "en";

export const localeCodes = locales.map((locale) => locale.code);

export function isLocaleCode(value: string): value is LocaleCode {
  return (localeCodes as string[]).includes(value);
}

export function getLocaleMeta(code: LocaleCode): LocaleMeta {
  return locales.find((locale) => locale.code === code) ?? locales[0];
}

/**
 * Matches a BCP-47 browser/OS language tag (e.g. "fr-CA", "zh-Hans-CN", "pt-BR")
 * to one of our supported locale codes. Falls back to null if nothing matches.
 */
export function matchBrowserLocale(tag: string): LocaleCode | null {
  const lower = tag.toLowerCase();
  const primary = lower.split("-")[0];

  if (primary === "zh") return "zh";

  const direct = localeCodes.find((code) => code === primary);
  return direct ?? null;
}
