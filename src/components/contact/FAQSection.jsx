import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf9f6]">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          label="FAQ"
          title={<>Frequently Asked <span className="font-semibold">Questions</span></>}
          subtitle="Common questions about the mediation process."
          centered
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white px-6 border border-[#e8dcc4] shadow-sm"
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
  );
}
