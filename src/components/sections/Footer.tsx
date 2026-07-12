"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { useDict } from "@/lib/i18n/LocaleProvider";

export function Footer() {
  const { footer } = useDict();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-2/60 py-14" aria-label="Site footer">
      <div className="container-page">
        <Reveal className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="/" className="flex items-center gap-2.5" aria-label="MedConverse AI home">
              <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-white">
                <Image src="/assets/images/logo.png" alt="" width={36} height={36} className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-heading">
                MedConverse<span className="text-gradient"> AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-10 md:contents">
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={`${column.title} links`}>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-heading">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-muted transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted md:flex-row">
          <p>{footer.copyright.replace("{year}", String(year))}</p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-primary-600">{footer.privacyPolicy}</a>
            <a href="/terms" className="transition-colors hover:text-primary-600">{footer.termsOfService}</a>
            <a href="/security" className="transition-colors hover:text-primary-600">{footer.security}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
