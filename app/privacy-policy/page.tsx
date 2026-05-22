import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dreamr",
  description: "Dreamr privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground noise-overlay">
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Dreamr
        </a>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Last updated: May 22, 2026
          </p>
        </div>

        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Information We Collect</h2>
            <p>
              When you submit a form or contact Dreamr, we may collect details such as your name,
              email address, phone number, business name, website, service area, and project notes.
              We also may receive basic technical information from analytics and hosting tools.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">How We Use Information</h2>
            <p>
              We use the information you provide to respond to requests, prepare website previews,
              communicate about Dreamr services, improve the site, and operate our business.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with service
              providers that help us host, analyze, communicate, or deliver our services, or when
              required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Your Choices</h2>
            <p>
              You can ask us to update, delete, or stop using your information by contacting us at
              contact@dreamr.store.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Contact</h2>
            <p>
              Questions about this policy can be sent to contact@dreamr.store.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
