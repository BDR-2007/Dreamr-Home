"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I really get to see the site before paying?",
    answer:
      "Yes. Dreamr prepares a preview first so you can see the direction, layout, and messaging before deciding whether to move forward.",
  },
  {
    question: "Is there an upfront setup fee?",
    answer:
      "No. The monthly plan is built around $0 upfront. The monthly retainer starts on the day everythgin is setup and we go live.",
  },
  {
    question: "What kinds of contractors do you work with?",
    answer:
      "Dreamr is focused on HVAC and plumbing contractors that need a fast, conversion-first website built around calls, emergency jobs, and local trust.",
  },
  {
    question: "Can I cancel if the site is not working for me?",
    answer:
      "Yes. The retainer is designed to be cancel-anytime, without long-term contracts or cancellation penalties.",
  },
  {
    question: "What is included in the monthly updates?",
    answer:
      "Monthly updates can cover practical site changes like promotions, service area edits, photos, seasonal messaging, business hours, and small copy adjustments.",
  },
  {
    question: "Do I keep my domain?",
    answer:
      "Yes. Your domain stays yours. Dreamr can help connect and launch it, but you should retain ownership of your business domain.",
  },
  {
    question: "How quickly can a site go live?",
    answer:
      "After approval, most launches are intended to move quickly. Timing depends on feedback, domain access, content readiness, and any final changes.",
  },
  {
    question: "How do I get started?",
    answer:
      "Submit the form on the page or email contact@dreamr.store with your business name, current website, service area, and what you want improved.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 lg:py-28 border-t border-foreground/10"
      style={{ backgroundColor: '#DB8B4B' }}
      >
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground">
            Questions before you decide.
          </h2>
        </div>

        <Accordion type="single" collapsible className="border-t border-foreground/10">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="border-foreground/10">
              <AccordionTrigger className="py-6 text-base md:text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-white-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
