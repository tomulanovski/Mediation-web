import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Users, FileText, Shield, Home, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { services, processSteps } from "@/data/services";

const iconMap = { Heart, Users, FileText, Shield, Home, Briefcase };

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Cavanaugh Mediation, PLLC";
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
              <span className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase font-sans">Our Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#1a1a1a] leading-[1.15] mb-6">
              Comprehensive <span className="font-semibold">Family Mediation</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#5a6a7a] leading-relaxed font-sans">
              We offer a full range of family law mediation services,
              tailored to your unique situation and designed to help you
              reach fair, lasting agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <div className="bg-[#faf9f6] p-8 lg:p-10 hover:shadow-xl transition-shadow duration-500">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                        {Icon && <Icon className="w-7 h-7 text-[#8ab4d5]" strokeWidth={1.5} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">{service.title}</h3>
                        <p className="text-[#5a6a7a] leading-relaxed mb-6 font-sans">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-[#5a6a7a] text-sm font-sans">
                              <CheckCircle className="w-4 h-4 text-[#8ab4d5] flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-28 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="How It Works"
            title={<>The Mediation <span className="font-semibold">Process</span></>}
            subtitle="A clear, structured approach designed to guide you from conflict to resolution."
            centered
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Fees & Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-light text-[#1a1a1a] mb-6">
                Investment in Your <span className="font-semibold">Future</span>
              </h2>
              <div className="space-y-4 text-[#5a6a7a] leading-relaxed font-sans">
                <p>
                  Mediation typically costs a fraction of traditional litigation, both
                  financially and emotionally. Our transparent fee structure ensures you
                  know what to expect from the start.
                </p>
                <p>
                  Initial consultations are offered at no charge, giving you the
                  opportunity to meet with a mediator, discuss your situation, and
                  determine if mediation is right for you — with no obligation.
                </p>
                <p>
                  Contact us to discuss your specific situation and receive a
                  customized estimate based on the complexity of your case.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#faf9f6] p-10">
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {[
                    "Free initial consultation",
                    "Comprehensive intake process",
                    "Flexible scheduling options",
                    "Professional mediation sessions",
                    "Document preparation assistance",
                    "Final agreement drafting",
                    "Follow-up support as needed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#5a6a7a] font-sans">
                      <CheckCircle className="w-5 h-5 text-[#8ab4d5] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-[#1a1a1a] mb-6">
              Start Your Journey to <span className="font-semibold">Resolution</span>
            </h2>
            <p className="text-[#5a6a7a] text-lg leading-relaxed mb-10 font-sans">
              Every family's situation is unique. Schedule a free consultation to
              discuss your needs and learn how our services can help you move forward.
            </p>
            <Link to="/contact">
              <Button className="bg-[#1a1a1a] hover:bg-[#333333] text-white px-10 py-6 text-base group transition-all duration-300 font-sans">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
