import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
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
              Last Updated: {lastUpdated}
            </p>
          ) : null}
          <div className="legal-prose mt-6">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
