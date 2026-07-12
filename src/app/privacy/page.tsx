import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MedConverse AI collects, uses, stores, and protects information when you use our platform.",
  alternates: { canonical: "https://medconverse.ai/privacy" },
  openGraph: {
    title: "Privacy Policy | MedConverse AI",
    description:
      "How MedConverse AI collects, uses, stores, and protects information when you use our platform.",
  },
  twitter: {
    title: "Privacy Policy | MedConverse AI",
    description:
      "How MedConverse AI collects, uses, stores, and protects information when you use our platform.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medconverse.ai" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://medconverse.ai/privacy" },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalPage type="privacy" lastUpdated="July 2026">
      <p>
        At <strong>MedConverse AI</strong>, we are committed to protecting the privacy
        and security of healthcare professionals, organizations, and patients. This
        Privacy Policy explains how we collect, use, store, and protect information
        when you use our platform.
      </p>

      <h2>Information We Collect</h2>
      <p>Depending on how you use MedConverse AI, we may collect:</p>
      <ul>
        <li>Account information (name, email address, organization, role)</li>
        <li>Organization information</li>
        <li>Consultation metadata</li>
        <li>Audio recordings (when enabled)</li>
        <li>AI-generated transcripts</li>
        <li>Clinical documentation</li>
        <li>Appointment information</li>
        <li>Usage analytics</li>
        <li>Device and browser information</li>
        <li>Log and diagnostic information</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Deliver AI-powered clinical documentation</li>
        <li>Generate consultation summaries</li>
        <li>Support prescription workflows</li>
        <li>Improve platform performance</li>
        <li>Provide customer support</li>
        <li>Monitor platform security</li>
        <li>Analyze product usage</li>
        <li>Maintain system reliability</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement administrative, technical, and organizational safeguards designed
        to help protect customer data against unauthorized access, disclosure,
        alteration, or destruction.
      </p>

      <h2>Data Sharing</h2>
      <p>We do not sell customer data.</p>
      <p>Information may only be shared:</p>
      <ul>
        <li>With authorized users within your organization</li>
        <li>With trusted service providers required to operate the platform</li>
        <li>When required by applicable law</li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        Customer data is retained according to organizational settings and applicable
        legal or regulatory requirements.
      </p>

      <h2>Your Rights</h2>
      <p>Depending on applicable laws, users may request:</p>
      <ul>
        <li>Access to their information</li>
        <li>Correction of inaccurate information</li>
        <li>Deletion of eligible information</li>
        <li>Export of their information</li>
      </ul>

      <h2>Contact</h2>
      <p>For privacy-related questions, contact:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:admin@medconverse.ai">admin@medconverse.ai</a>
      </p>
      </LegalPage>
    </>
  );
}
