import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

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
    title: "MedConverse AI | AI Medical Assistant",
    description: "Automate patient conversations with AI",
    images: [{ url: "/assets/images/HeroImage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedConverse AI",
    description: "Healthcare AI Platform",
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

const RTL_LOCALES = ["ar"];
const SUPPORTED_LOCALES = ["en", "hi", "ar", "es", "fr", "de", "pt", "it", "ja", "ko", "zh"];
const localeInit = `(function(){try{var supported=${JSON.stringify(
  SUPPORTED_LOCALES
)};var rtl=${JSON.stringify(
  RTL_LOCALES
)};var l=localStorage.getItem("mc-locale");if(!l){var tags=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language])||[];for(var i=0;i<tags.length;i++){var p=(tags[i]||"").toLowerCase().split("-")[0];if(p==="zh"){l="zh";break}if(supported.indexOf(p)!==-1){l=p;break}}}if(!l||supported.indexOf(l)===-1){l="en"}document.documentElement.lang=l;document.documentElement.dir=rtl.indexOf(l)!==-1?"rtl":"ltr"}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script dangerouslySetInnerHTML={{ __html: localeInit }} />
      </head>
      <body className={`${sora.variable} ${manrope.variable}`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
