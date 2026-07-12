"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useDict, useLocale } from "@/lib/i18n/LocaleProvider";

export function LegalPage({
  type,
  lastUpdated,
  children,
}: {
  type: "privacy" | "terms" | "security";
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  const dict = useDict();
  const { localeMeta } = useLocale();
  const title =
    type === "privacy"
      ? dict.legal.privacyTitle
      : type === "terms"
        ? dict.legal.termsTitle
        : dict.legal.securityTitle;

  return (
    <>
      <Navbar />
      <main id="main-content" className="container-page pb-24 pt-36 md:pt-44">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-heading md:text-5xl">
            {title}
          </h1>
          {lastUpdated ? (
            <p className="mt-4 text-sm font-semibold text-muted">
              {dict.legal.lastUpdated}: {lastUpdated}
            </p>
          ) : null}
          {localeMeta.code !== "en" ? (
            <p className="mt-4 rounded-2xl border border-dashed border-line bg-surface-2/70 px-4 py-3 text-sm leading-relaxed text-muted">
              {dict.legal.englishOnlyNotice.replace("{language}", localeMeta.nativeName)}
            </p>
          ) : null}
          <div className="legal-prose mt-6" dir="ltr">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
