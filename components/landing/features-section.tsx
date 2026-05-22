"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const layouts = [
  {
    number: "01",
    title: "Customized for conversion",
    description: "Your site isn't built from a generic template dropped into a folder and forgotten. Every Dreamr site is built around the specific way your business wins jobs — your service area, your strongest offer, your customers' biggest hesitation before they call. We pick the layout that fits how you actually compete, apply your branding throughout, and wire every button, form, and headline to do one thing: get that homeowner off the fence and onto your phone. Pretty is secondary. Booked jobs are the whole point.",
  },
  {
    number: "02",
    title: "100% risk free",
    description: "We build your site and send you a complete mockup before you spend a single dollar; no credit card, no commitment. If you like it, your first month's retainer flips the switch and you're live. You will then have a 30-day full money-back trial of your new site. After the initial 30 days and the end of the guarentee period, if you ever decide to move on, cancel any month with no penalty and no notice period required.",
  },
  {
    number: "03",
    title: "Simple requests and revisions, anytime",
    description: "Running a seasonal promo? Adding a new service? Need to swap a photo before the weekend? Send us a message and it gets handled for you. Typically within 48hrs. Every retainer includes two hours of monthly updates so you're never filing a ticket or waiting on an invoice to change something on your own website. Your business moves fast. Your site should keep up without you having to think about it.",
  },
];

const additionalFeatures = [
  {
    number: "04",
    title: "Mobile-First, Always",
    description: "Over 70% of emergency service searches happen on a phone. Every Dreamr site loads fast, reads clearly, and has a thumb-friendly call button — no pinching, no zooming, no lost jobs.",
    link: "Sub-2s load times",
  },
  {
    number: "05",
    title: "Local SEO Wired In",
    description: "Clean semantic code that tells Google exactly who you are and which zip codes you serve. Built once, working for you every single day — no additional monthly SEO retainer required.",
    link: "\"Plumber near me\" ready",
  },
  {
    number: "06",
    title: "Done-For-You Maintenance",
    description: "Need to update your summer promo? Add a new truck photo? Change your holiday hours? Contact us anytime. It's done. Two hours of monthly updates included — no ticket systems, no invoices.",
    link: "Included every month",
  },
];

function LayoutCard({ layout, index }: { layout: typeof layouts[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-10 lg:py-16 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{layout.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-500">
            {layout.title}
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
            {layout.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: typeof additionalFeatures[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-10 lg:py-16 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-500">
            {feature.title}
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
            {feature.description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            {feature.link}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
            <span className="w-8 h-px bg-foreground/30" />
            Built for contractors
          </span>
          <h2
            className={`text-3xl lg:text-5xl xl:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Everything your website
            <br />
            <span className="text-muted-foreground">should already be doing.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Three battle-tested layouts. One obsessive goal: get that homeowner to call you before they call your competitor.
          </p>
        </div>

        {/* Layouts */}
        <div>
          {layouts.map((layout, index) => (
            <LayoutCard key={layout.number} layout={layout} index={index} />
          ))}
        </div>
        
        {/* Additional Features */}
        <div className="mt-16 lg:mt-24">
          {additionalFeatures.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
