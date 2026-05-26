"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl lg:text-7xl font-display tracking-tight">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const metrics = [
  { 
    value: 8, 
    suffix: "s", 
    prefix: "",
    label: "Decision window",
    description: "How long a homeowner spends before she calls or bounces",
  },
  { 
    value: 3, 
    suffix: "s", 
    prefix: "<",
    label: "Page load target",
    description: "Every Dreamr site is built to hit this on mobile, every time",
  },
  { 
    value: 70, 
    suffix: "%", 
    prefix: "",
    label: "Mobile searches",
    description: "Of all emergency trade searches happen on a phone right now",
  },
  { 
    value: 1, 
    suffix: "", 
    prefix: "",
    label: "Contractor per market",
    description: "Your territory is exclusive. We won't build for your competitor.",
  },
];

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="metrics" ref={sectionRef} className="relative py-20 lg:py-28 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              The numbers
            </span>
            <h2
              className={`text-3xl lg:text-5xl xl:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Results contractors
              <br />
              <span className="text-muted-foreground">actually care about.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Not bounce rates. Not impressions. Booked jobs, scheduled trucks, and cash flow.
            </p>
          </div>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-8 lg:p-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter 
                end={typeof metric.value === 'number' ? metric.value : 0} 
                suffix={metric.suffix} 
                prefix={metric.prefix}
              />
              <div className="mt-3 text-lg font-medium">{metric.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{metric.description}</div>
            </div>
          ))}
        </div>
        
        {/* Bottom callout */}
        <div className={`mt-12 p-8 lg:p-10 border border-foreground/10 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <p className="text-lg lg:text-xl text-center">
            The average emergency HVAC or plumbing call is worth <span className="font-display">$800–$2,400</span>. 
            One additional call per month pays your retainer <span className="font-display">3× over</span>.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              We only serve 120 businesses at a time! Once capacity is reached, join the waiting list to ensure you can enter if a spot opens.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
