import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CapabilityMarquee } from "@/components/sections/CapabilityMarquee";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { AIDemo } from "@/components/sections/AIDemo";
import { Agents } from "@/components/sections/Agents";
import { Platform } from "@/components/sections/Platform";
import { Workflow } from "@/components/sections/Workflow";
import { Benefits } from "@/components/sections/Benefits";
import { Languages } from "@/components/sections/Languages";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Security } from "@/components/sections/Security";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { en } from "@/lib/i18n/dictionaries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "MedConverse AI | AI Medical Assistant for Hospitals & Clinics",
  },
  description:
    "MedConverse AI helps hospitals and clinics automate patient conversations, scheduling, documentation, report summaries, multilingual voice AI, and follow-ups.",
  alternates: { canonical: "https://medconverse.ai" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "MedConverse AI",
      url: "https://medconverse.ai",
      description:
        "MedConverse AI is an AI-powered medical consultation platform that turns doctor-patient conversations into structured clinical documentation.",
    },
    {
      "@type": "SoftwareApplication",
      name: "MedConverse AI",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web, Android",
      offers: {
        "@type": "Offer",
        url: "https://medconverse.ai#cta",
        priceCurrency: "USD",
        price: "0",
        description: "Book a demo — enterprise pricing on request",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: en.faq.items.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <CapabilityMarquee />
        <ProductOverview />
        <AIDemo />
        <Agents />
        <Platform />
        <Workflow />
        <Benefits />
        <Languages />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
