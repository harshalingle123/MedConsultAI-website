import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern access to and use of the MedConverse AI platform.",
  alternates: { canonical: "https://medconverse.ai/terms" },
  openGraph: {
    title: "Terms of Service | MedConverse AI",
    description: "The terms that govern access to and use of the MedConverse AI platform.",
  },
  twitter: {
    title: "Terms of Service | MedConverse AI",
    description: "The terms that govern access to and use of the MedConverse AI platform.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medconverse.ai" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://medconverse.ai/terms" },
  ],
};

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalPage type="terms" lastUpdated="July 2026">
      <p>Welcome to MedConverse AI.</p>
      <p>By accessing or using the platform, you agree to these Terms of Service.</p>

      <h2>Platform Purpose</h2>
      <p>
        MedConverse AI provides AI-powered tools that assist healthcare professionals
        with:
      </p>
      <ul>
        <li>Clinical documentation</li>
        <li>Medical transcription</li>
        <li>Consultation summaries</li>
        <li>Prescription assistance</li>
        <li>Healthcare workflow automation</li>
      </ul>
      <p>
        The platform is intended to support healthcare professionals and is{" "}
        <strong>not a substitute for professional medical judgment</strong>.
      </p>

      <h2>User Responsibilities</h2>
      <p>Users agree to:</p>
      <ul>
        <li>Maintain account security</li>
        <li>Use the platform lawfully</li>
        <li>Protect patient confidentiality</li>
        <li>Verify AI-generated outputs before clinical use</li>
        <li>Comply with applicable healthcare regulations</li>
      </ul>

      <h2>AI-Generated Content</h2>
      <p>
        AI-generated documentation, summaries, and recommendations should always be
        reviewed by qualified healthcare professionals before being relied upon for
        clinical decision-making.
      </p>

      <h2>Availability</h2>
      <p>
        We continually improve the platform but do not guarantee uninterrupted
        availability or error-free operation.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All platform software, designs, trademarks, and proprietary technology remain
        the property of MedConverse AI unless otherwise stated.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the extent permitted by law, MedConverse AI shall not be liable for
        indirect, incidental, or consequential damages arising from the use of the
        platform.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of the platform
        constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:admin@medconverse.ai">admin@medconverse.ai</a>
      </p>
      </LegalPage>
    </>
  );
}
