import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How MedConverse AI approaches platform security, data protection, and responsible disclosure.",
};

export default function SecurityPage() {
  return (
    <LegalPage title="Security">
      <p>Security is a core design principle of MedConverse AI.</p>
      <p>
        We are committed to helping healthcare organizations protect sensitive
        information through secure platform design and operational best practices.
      </p>

      <h2>Platform Security</h2>
      <p>MedConverse AI incorporates multiple layers of security, including:</p>
      <ul>
        <li>Role-Based Access Control (RBAC)</li>
        <li>Secure authentication</li>
        <li>Encrypted communication (HTTPS/TLS)</li>
        <li>Encryption of stored data where applicable</li>
        <li>Audit logging</li>
        <li>Session management</li>
        <li>Access controls</li>
        <li>Infrastructure monitoring</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        Our platform is designed to help organizations protect healthcare information
        by:
      </p>
      <ul>
        <li>Restricting access based on user roles</li>
        <li>Logging important system activities</li>
        <li>Using secure communication channels</li>
        <li>Applying security best practices during development</li>
      </ul>

      <h2>AI Security</h2>
      <p>
        Our AI workflows are designed with safeguards to support secure processing of
        healthcare-related information.
      </p>
      <p>
        Organizations remain responsible for reviewing AI-generated outputs before
        clinical use.
      </p>

      <h2>Continuous Improvement</h2>
      <p>
        Security is an ongoing process. We regularly review our architecture,
        dependencies, and operational practices to improve platform security and
        reliability.
      </p>

      <h2>Responsible Disclosure</h2>
      <p>
        If you believe you have identified a security vulnerability, please contact us
        responsibly.
      </p>
      <p>
        <strong>Security Contact:</strong>{" "}
        <a href="mailto:admin@medconverse.ai">admin@medconverse.ai</a>
      </p>
    </LegalPage>
  );
}
