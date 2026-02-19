import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { mediators } from "@/data/mediators";

export default function MediatorsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Our Team"
          title={<>Meet Our <span className="font-semibold">Mediators</span></>}
          subtitle="Experienced professionals dedicated to helping your family find resolution."
          centered
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {mediators.map((mediator, index) => (
            <AnimatedSection key={mediator.id} delay={index * 0.15}>
              <div className="group text-center">
                <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                  <img
                    src={mediator.image}
                    alt={mediator.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase font-sans mb-2">
                  {mediator.title}
                </p>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
                  {mediator.name}
                </h3>
                <p className="text-[#5a6a7a] text-sm font-sans mb-1">
                  {mediator.credentials}
                </p>
                <p className="text-[#5a6a7a] text-sm leading-relaxed font-sans mt-3 mb-4">
                  {mediator.shortBio}
                </p>
                <Link
                  to={`/about#${mediator.id}`}
                  className="inline-flex items-center gap-2 text-[#1a1a1a] text-sm font-medium font-sans group-hover:gap-3 transition-all"
                >
                  Read Full Bio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
