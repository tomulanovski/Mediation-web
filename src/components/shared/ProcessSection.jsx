import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { processSteps } from "@/data/services";

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          label="How It Works"
          title={<>The Mediation <span className="font-semibold">Process</span></>}
          subtitle="A clear, structured approach designed to guide you from conflict to resolution."
          centered
          light
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 0.15}>
              <div className="relative">
                <div className="text-6xl font-light text-[#8ab4d5]/20 mb-4 font-sans">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[#a8b8c8] leading-relaxed font-sans">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-[#8ab4d5]/50 to-transparent" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
