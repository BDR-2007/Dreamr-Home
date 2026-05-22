"use client";

import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Process: [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Results", href: "/#metrics" },
  ],
  Company: [
    { name: "About Dreamr", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "#faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-8">
                      {/* Logo */}
          <a href="/" className="flex items-center group" aria-label="Dreamr home">
            <img
              src="/dreamr-logo.png"
              alt="Dreamr"
              className={`w-auto transition-all duration-500 ${isScrolled ? "h-7" : "h-9"}`}
               </a>
          

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs text-sm">
                Conversion-first websites for HVAC and plumbing contractors. 
                $0 upfront. $249/month. Cancel anytime.
              </p>

            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-5">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2026 Dreamr. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Accepting new contractors
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
