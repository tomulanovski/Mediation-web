import { DollarSign, Clock, Lock, Handshake } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Mediation typically costs a fraction of traditional litigation, saving families thousands of dollars in legal fees."
  },
  {
    icon: Clock,
    title: "Faster Resolution",
    description: "Most cases are resolved in 1-2 sessions of 3-4 hours, compared to 12-18 months for litigated cases."
  },
  {
    icon: Lock,
    title: "Confidential",
    description: "Everything discussed in mediation is strictly confidential, allowing both parties to speak openly and honestly."
  },
  {
    icon: Handshake,
    title: "You Maintain Control",
    description: "Unlike court where a judge decides, mediation puts the decision-making power in your hands."
  }
];

export default function WhyMediation() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf9f6]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="Why Mediation"
              title={<>A Better Way to <span className="font-semibold">Resolve Disputes</span></>}
              subtitle="Mediation gives families a respectful, collaborative way to resolve conflict without the stress and expense of going to court."
            />

            <div className="grid grid-cols-2 gap-6 mt-2">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#8ab4d5]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{benefit.title}</h3>
                      <p className="text-[#5a6a7a] text-sm leading-relaxed font-sans">{benefit.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#e8dcc4]/30 to-[#8ab4d5]/20" />
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=600&fit=crop"
                alt="Professional mediation session"
                className="relative w-full h-auto shadow-xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
