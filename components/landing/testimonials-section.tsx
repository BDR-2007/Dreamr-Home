"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I was skeptical — every agency I'd dealt with wanted $4,000 before building a single page. Dreamr showed me the site first. I approved it on a Thursday, it was live by Saturday. Booked three emergency calls the following week I never would've gotten on my old site.",
    author: "Mike R.",
    role: "HVAC Contractor",
    location: "Phoenix, AZ",
  },
  {
    quote: "My old site wasn't even loading right on phones. I didn't realize how bad it was until Dreamr showed me the side-by-side. The new one has a call button you can actually see. My phone started ringing differently — more jobs, less tire-kickers.",
    author: "Dave K.",
    role: "Plumbing",
    location: "Columbus, OH",
  },
  {
    quote: "The cancel-anytime thing was what got me to try it. No risk. But honestly, I haven't thought about canceling once. The site books jobs. That's all I need it to do. The update requests get handled same day. It's the best $249 I spend every month.",
    author: "Tony L.",
    role: "HVAC & Plumbing",
    location: "Denver, CO",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-20 lg:py-28 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Contractor results
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>
        
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-display tracking-tight">
            From the guys
            <br />
            <span className="text-muted-foreground">running the trucks.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No marketing fluff. Just what happened after their Dreamr site went live.
          </p>
        </div>

        {/* Main Quote */}
        <div className="max-w-4xl">
          {/* Stars */}
          <div className={`flex gap-1 mb-6 transition-all duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
            ))}
          </div>
          
          <blockquote
            className={`transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight text-foreground">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>
          </blockquote>

          {/* Author */}
          <div
            className={`mt-8 flex items-center gap-4 transition-all duration-300 delay-100 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
              <span className="font-display text-lg text-foreground">
                {activeTestimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-foreground">{activeTestimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {activeTestimonial.role} · {activeTestimonial.location}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(idx);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`h-2 transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-foreground"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
