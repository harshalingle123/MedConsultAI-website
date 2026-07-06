import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://medconverse.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MedConverse AI",
    template: "%s | MedConverse AI",
  },
  icons: {
    icon: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
  description:
    "MedConverse AI turns doctor-patient conversations into clinical documentation — real-time transcription, speaker ID, AI summaries, ICD-10 suggestions, and drug-interaction checks, with offline-first reliability and HMS integration.",
  keywords: [
    "AI medical scribe",
    "clinical documentation AI",
    "medical transcription software",
    "AI consultation summary",
    "ICD-10 coding suggestions",
    "HMS integration",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MedConverse AI",
    title: "MedConverse AI — AI Medical Scribe & Consultation Platform",
    description:
      "MedConverse AI listens to every consultation, automatically creates clinical documentation, generates AI-powered summaries, supports prescription workflows, suggests medical codes, identifies potential drug interactions, and streamlines follow-up care — so doctors can focus on patients, not paperwork.",
    images: [{ url: "/assets/images/HeroImage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedConverse AI — AI Medical Scribe & Consultation Platform",
    description:
      "MedConverse AI listens to every consultation, automatically creates clinical documentation, generates AI-powered summaries, supports prescription workflows, suggests medical codes, identifies potential drug interactions, and streamlines follow-up care — so doctors can focus on patients, not paperwork.",
    images: ["/assets/images/HeroImage.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#070D1A" },
  ],
};

const themeInit = `(function(){try{var t=localStorage.getItem("mc-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${sora.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
