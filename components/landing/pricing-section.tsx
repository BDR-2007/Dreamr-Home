"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    subtitle: "Dreamr 'Local Authority' Package",
    price: 199,
    priceLabel: "/month",
    setup: "$0 setup · Cancel anytime",
    features: [
      "Local Authority layout",
      "Mobile-first, tap-to-call design",
      "3-field emergency dispatch form",
      "Premium hosting",
      "Exclusive site per territory",
      "2 hrs monthly updates",
      "Local SEO foundation",
      "License, bond + review badges",
    ],
    cta: "Apply To Work With Us",
    popular: true,
  },
  {
    name: "One-Time",
    subtitle: "Dreamr 'Turnkey' Buildout",
    price: 4800,
    priceLabel: "/one-time",
    setup: "$0 retainer · one-time purchase",
    features: [
      "Local Authority layout",
      "Mobile-first, tap-to-call design",
      "3-field emergency dispatch form",
      "Local SEO foundation",
      "License, bond + review badges",
      "Exclusive site per territory",
      "Permanent ownership of site",
    ],
    cta: "Apply To Work With Us",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            Simple pricing
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-4">
            We build first. You pay after.
            <br />
            <span className="text-muted-foreground">No long-term trap.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Traditional agencies charge $3,000–$5,000 before they&apos;ve built a single page. We think thats dumb. With us, if you don't like your site; walk away. No questions asked.
          </p>
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
             
          </span> 
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            All Prices In USD
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-10 border ${
                plan.popular ? "border-foreground" : "border-foreground/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Recommended
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {plan.name}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-2">{plan.subtitle}</h3>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-foreground/10">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl lg:text-5xl text-foreground">
                    ${plan.price.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-sm">{plan.priceLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.setup}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#cta"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
