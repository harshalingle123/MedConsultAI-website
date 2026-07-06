import { ArrowRight, CalendarDays, Mic } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { BookDemoButton } from "@/components/BookDemoButton";

export function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 px-8 py-16 text-center md:px-16 md:py-20">
            <FloatingOrbs variant="subtle" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.25), transparent 40%)",
              }}
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <span className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                <Mic className="h-3.5 w-3.5" aria-hidden />
                Stop typing. Start listening.
              </span>
              <h2
                id="cta-heading"
                className="font-display text-4xl font-medium tracking-tight text-white md:text-6xl"
              >
                See your own consultation, documented
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                Book a 20-minute demo — bring a sample consult and watch it become a
                structured chart note.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <BookDemoButton className="btn group bg-white py-2 pl-7 pr-2 text-base font-bold text-ink-900 shadow-lift hover:scale-[1.03]">
                  <CalendarDays className="h-5 w-5" aria-hidden />
                  Book a demo
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-white transition-transform duration-300 ease-premium group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </BookDemoButton>
                <a
                  href="https://scribe.medconverse.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-white/40 px-8 py-4 text-base font-bold text-white hover:bg-white/10"
                >
                  Log in
                </a>
              </div>
              <p className="text-xs font-semibold text-white/70">
                AI-assisted, clinician-approved · Works offline · Embeds in your HMS
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
