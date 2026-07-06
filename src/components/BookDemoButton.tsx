"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy, Mail, X } from "lucide-react";

const DEMO_TO = "admin@medconverse.ai";
const DEMO_CC = "k.chethan@medconverse.ai";
const DEMO_SUBJECT = "Book a Demo Request – MedConverse AI";
const DEMO_BODY = `Hello MedConverse AI Team,

I would like to schedule a demo of MedConverse AI.

Name:
Organization:
Role:
Email:
Phone Number:
Preferred Demo Date:
Preferred Time:
Additional Requirements:

Thank you,
`;

export const bookDemoMailto = `mailto:${DEMO_TO}?cc=${encodeURIComponent(
  DEMO_CC
)}&subject=${encodeURIComponent(DEMO_SUBJECT)}&body=${encodeURIComponent(DEMO_BODY)}`;

const DEMO_TEMPLATE = `To: ${DEMO_TO}
CC: ${DEMO_CC}
Subject: ${DEMO_SUBJECT}

${DEMO_BODY}`;

// If the OS hands the mailto: off to a mail app (or the browser opens a
// webmail tab), this window blurs or is hidden within this window. If
// neither happens, assume no mail client is configured.
const FALLBACK_DELAY_MS = 1800;

function CopyButton({
  label,
  copiedLabel,
  value,
  solid,
}: {
  label: string;
  copiedLabel: string;
  value: string;
  solid?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, [value]);

  return (
    <button
      type="button"
      onClick={copy}
      className={`${solid ? "btn-solid" : "btn-ghost"} w-full justify-center py-3 text-sm`}
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden />
      ) : (
        <Copy className="h-4 w-4" aria-hidden />
      )}
      {copied ? copiedLabel : label}
    </button>
  );
}

function FallbackDialog({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-demo-fallback-title"
    >
      <div
        className="w-full max-w-md rounded-3xl bg-surface p-6 shadow-card-hover md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="grid h-10 w-10 place-items-center rounded-full text-heading hover:bg-surface-2"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <h3 id="book-demo-fallback-title" className="font-display text-xl font-bold text-heading">
          No email app configured
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">
          We couldn&apos;t open your email application. Please contact us manually at the
          address below — copy the email address or the full request template to get
          started.
        </p>
        <div className="mt-4 rounded-2xl bg-surface-2 px-4 py-3 text-sm font-semibold text-heading">
          <p>{DEMO_TO}</p>
          <p className="mt-1 text-xs font-medium text-muted">CC: {DEMO_CC}</p>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <CopyButton
            solid
            label="Copy Email Address"
            copiedLabel="Email Address Copied"
            value={DEMO_TO}
          />
          <CopyButton
            label="Copy Email Template"
            copiedLabel="Email Template Copied"
            value={DEMO_TEMPLATE}
          />
        </div>
      </div>
    </div>
  );
}

export function BookDemoButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const [fallbackOpen, setFallbackOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = useCallback(() => {
    onClick?.();
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);

    let handled = false;
    const markHandled = () => {
      handled = true;
    };
    window.addEventListener("blur", markHandled);
    document.addEventListener("visibilitychange", markHandled);

    timerRef.current = window.setTimeout(() => {
      window.removeEventListener("blur", markHandled);
      document.removeEventListener("visibilitychange", markHandled);
      if (!handled && document.visibilityState === "visible") {
        setFallbackOpen(true);
      }
    }, FALLBACK_DELAY_MS);
  }, [onClick]);

  return (
    <>
      <a href={bookDemoMailto} className={className} onClick={handleClick}>
        {children}
      </a>
      {fallbackOpen ? <FallbackDialog onClose={() => setFallbackOpen(false)} /> : null}
    </>
  );
}
