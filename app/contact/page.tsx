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
              <li>Fulll Name</li>
              <li>Primary service area</li>
              <li>HVAC, plumbing, or both</li>
            </ul>
          </div>


  return (
    <section id="cta" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
                  <span className="w-8 h-px bg-foreground/30" />
                  Your territory may still be available
                </span>
                
                <h2 className="text-3xl lg:text-5xl xl:text-6xl font-display tracking-tight mb-6 leading-[1.1]">
                  See your new site.
                  <br />
                  <span className="text-muted-foreground">Then decide.</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                  Drop your details below. We&apos;ll send you a complete preview of your Dreamr site — 
                  built with your branding, your layout choice, ready to go live. No credit card. 
                  No commitment. No sales call.
                </p>

                <div className="mb-8 w-full max-w-[640px] overflow-hidden border border-foreground/10 bg-background shadow-sm">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeMxe0uN_Gy68X9KkIwam0mgWgZtKeEsbOMRjLdtYZp03IZsw/viewform?embedded=true"
                    title="Dreamr free mockup request form"
                    width="640"
                    height="500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="block h-[500px] w-full"
                  >
                    Loading...
                  </iframe>
                </div>

                <p className="text-sm text-muted-foreground font-mono">
                  No credit card required. No contract. The preview costs you nothing.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  One contractor per territory — check if yours is open.
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[400px] h-[400px] -mr-8">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
        </div>
      </section>
      <FaqSection />
      <FooterSection />
    </main>
  );
}
