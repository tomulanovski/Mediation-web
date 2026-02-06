import { Link } from "react-router-dom";
import { Heart, Users, FileText, Shield, Home, Briefcase, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";

const iconMap = { Heart, Users, FileText, Shield, Home, Briefcase };

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Our Services"
          title={<>Comprehensive <span className="font-semibold">Family Mediation</span></>}
          subtitle="We offer a full range of family law mediation services, tailored to your unique situation."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="group bg-[#faf9f6] p-8 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#8ab4d5]/30 h-full">
                  <div className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-7 h-7 text-[#8ab4d5]" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#5a6a7a] leading-relaxed mb-4 font-sans text-sm">
                    {service.description.substring(0, 120)}...
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-[#1a1a1a] text-sm font-medium font-sans group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
