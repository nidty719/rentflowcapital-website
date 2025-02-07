"use client";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  className?: string;
}

export function FAQSection({ className }: FAQSectionProps) {
  const faqs = [
    {
      question: "What is a DSCR loan?",
      answer: "A DSCR (Debt Service Coverage Ratio) loan is a type of mortgage that qualifies you based on the property's rental income rather than your personal income. This makes it ideal for real estate investors who may have complex tax returns or want to scale their portfolio without personal income limitations."
    },
    {
      question: "What's the minimum DSCR ratio required?",
      answer: "We typically look for a minimum DSCR of 1.0, meaning the property's rental income should at least cover the monthly mortgage payment. However, better rates and terms are available for properties with higher DSCR ratios, typically 1.25 or above."
    },
    {
      question: "What documentation do I need to provide?",
      answer: "Unlike traditional loans, we don't require tax returns or W-2s. Key documents include: property details, rent roll or market rent analysis, bank statements for reserves, and basic personal information. Our process is streamlined to get you approved quickly."
    },
    {
      question: "What property types do you finance?",
      answer: "We finance a wide range of investment properties including single-family homes, multi-family properties (2-4 units), condos, townhouses, and planned unit developments. Both short-term rentals (Airbnb/VRBO) and long-term rentals are eligible."
    },
    {
      question: "What are your typical rates and terms?",
      answer: "Rates start at 6.99% and vary based on property type, DSCR ratio, and loan-to-value (LTV). We offer 30-year terms with various prepayment options. Maximum LTV is typically 80% for long-term rentals and 75% for short-term rentals."
    },
    {
      question: "How quickly can I close?",
      answer: "We can typically close in as little as 21 days from application, assuming all required documentation is provided promptly. Our streamlined process and experienced team help ensure a smooth and efficient closing."
    },
    {
      question: "Do you have a minimum credit score requirement?",
      answer: "Yes, we typically require a minimum credit score of 640. However, we place more emphasis on the property's performance and your real estate experience than traditional credit metrics."
    },
    {
      question: "Can I use a DSCR loan for a refinance?",
      answer: "Yes! DSCR loans are available for both purchases and refinances, including cash-out refinances. This can be a great way to access equity in your existing investment properties."
    }
  ];

  return (
    <section className={cn("py-16 px-4 md:px-6", className)}>
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about DSCR loans
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#apply" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
} 