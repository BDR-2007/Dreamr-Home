import type { Metadata } from "next";
import { FaqSection } from "@/components/landing/faq-section";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

export const metadata: Metadata = {
  title: "Terms of Service | Dreamr",
  description: "Dreamr terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground noise-overlay">
      <Navigation />
      <section className="mx-auto max-w-3xl px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Last updated: May 22, 2026
          </p>
        </div>

        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Use of the Site</h2>
            <p>
              By using the Dreamr website, you agree to use it only for lawful purposes and not to
              interfere with the site, its forms, or its underlying services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Service Requests</h2>
            <p>
              Submitting a request for a preview or consultation does not create a contract,
              guarantee service availability, or require either party to move forward.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Content and Ownership</h2>
            <p>
              Dreamr site content, designs, copy, graphics, and related materials are protected by
              applicable intellectual property laws unless otherwise stated in a signed agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">No Warranties</h2>
            <p>
              The website is provided as-is. We aim to keep information accurate, but we do not
              guarantee that the site will always be error-free, uninterrupted, or fully current.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Contact</h2>
            <p>
              Questions about these terms can be sent to contact@dreamr.store.
            </p>
          </section>
        </div>
      </section>
      <FaqSection />
      <FooterSection />
    </main>
  );
}
