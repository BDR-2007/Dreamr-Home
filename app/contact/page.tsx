import type { Metadata } from "next";
import { FaqSection } from "@/components/landing/faq-section";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

export const metadata: Metadata = {
  title: "Contact | Dreamr",
  description: "Contact Dreamr about a conversion-first contractor website.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground noise-overlay">
      <Navigation />
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-6">
            Tell us what your current site is missing.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Send your business name, current website, service area, and the kind of jobs you want
            more of. We will use that to understand whether Dreamr is a good fit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border border-foreground/10 p-6">
            <h2 className="font-display text-2xl mb-3">Email</h2>
            <a
              href="mailto:contact@dreamr.store"
              className="text-lg text-foreground hover:underline underline-offset-4"
            >
              contact@dreamr.store
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Best for website previews, territory questions, launch details, and update requests.
            </p>
          </div>

          <div className="border border-foreground/10 p-6">
            <h2 className="font-display text-2xl mb-3">What to include</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Business name and city</li>
              <li>Current website, if you have one</li>
              <li>Primary service area</li>
              <li>HVAC, plumbing, or both</li>
            </ul>
          </div>
        </div>
      </section>
      <FaqSection />
      <FooterSection />
    </main>
  );
}
