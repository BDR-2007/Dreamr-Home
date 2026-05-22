"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

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

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    <a href="#cta">
                      Send Me the Free Mockup
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-6 font-mono">
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
  );
}
