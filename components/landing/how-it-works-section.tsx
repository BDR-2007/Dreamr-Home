"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "We take time to understand your business",
    description: "We identify weaknesses within your site — slow, ugly, unoptimized, or conversion-dead websites. Then we completely rebuild yours with a personalized mockup with your logo, your colors, your name, etc. for utterly free.",
  },
  {
    number: "2",
    title: "We build it. You see it.",
    description: "We send you the mockup of your site. No sales pitch. No pressure call. You see exactly what your new site looks like on desktop and mobile once live. If it's not right, you walk away with zero obligation, zero contracts.",
  },
  {
    number: "3",
    title: "We go live.",
    description: "Like what you see? Your first month's retainer flips the switch. We handle hosting, security, and the technical setup. Your new site is live, indexed, and booking jobs — typically within 72 hours of approval.",
  },
  {
    number: "4",
    title: "We maintain it. You run your business.",
    description: "Every month: two hours of updates, continuous included hosting, SEO, and technical updates — all included. If it stops working for you, cancel that same month. No exit fees. No notice period. Your domain stays yours.",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-4">
            <span className="w-8 h-px bg-background/30" />
            Zero risk. Zero friction.
          </span>
          <h2
            className={`text-3xl lg:text-5xl xl:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From application to
            <br />
            live site in days —
            <br />
            <span className="text-background/50">not months.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Steps List */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl lg:text-4xl text-background/30">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed text-base">
                      {step.description}
                    </p>
                    
                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div 
                          className="h-full bg-background w-0"
                          style={{
                            animation: 'progress 6s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visual Display */}
          <div className="lg:sticky lg:top-32 self-start hidden lg:block">
            <div className="border border-background/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-12">
                <span className="font-display text-8xl text-background/10">{steps[activeStep].number}</span>
                <p className="mt-4 text-xl font-display text-background/60">{steps[activeStep].title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
