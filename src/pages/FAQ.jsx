import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | Cavanaugh Mediation, PLLC";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#faf9f6] via-white to-[#f5f3ef]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8ab4d5]" />
              <span className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase font-sans">
                FAQ
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#1a1a1a] leading-[1.15] mb-6">
              Frequently Asked <span className="font-semibold">Questions</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#5a6a7a] leading-relaxed font-sans">
              Find answers to common questions about the mediation process and how we can help your family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-[#faf9f6] px-6 border border-[#e8dcc4] shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-[#1a1a1a] hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5a6a7a] leading-relaxed font-sans pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
