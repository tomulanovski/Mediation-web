import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Scale, Award, Users, Heart, ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { mediators } from "@/data/mediators";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We understand the emotional weight of family disputes and approach every case with empathy and care."
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "Our role is to ensure both parties have an equal voice and the opportunity to reach fair outcomes."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from working together, not against each other."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to the highest standards of professional practice and continued education."
  }
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | Cavanaugh Mediation, PLLC";
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
              <span className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase font-sans">About Our Firm</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#1a1a1a] leading-[1.15] mb-6">
              Dedicated to <span className="font-semibold">Peaceful Resolution</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#5a6a7a] leading-relaxed font-sans">
            Founded on the belief that families deserve a better way to resolve disputes, 
            Cavanaugh Mediation, PLLC brings together experienced mediators with deep 
            expertise in family law and conflict resolution, committed to helping Florida families 
            move forward with dignity and mutual respect.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Our Values"
            title={<>The principles we bring to <span className="font-semibold block">every client, every case, and every conversation.</span></>}
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1} className="text-center">
                <div className="w-16 h-16 bg-[#1a1a1a] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#8ab4d5]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-[#5a6a7a] leading-relaxed font-sans">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Our Team"
            title={<>Meet Our <span className="font-semibold">Mediators</span></>}
            subtitle="Experienced professionals dedicated to helping your family find resolution."
            centered
          />

          <div className="space-y-20">
            {mediators.map((mediator, index) => (
              <AnimatedSection key={mediator.id} id={mediator.id}>
                <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-br from-[#e8dcc4]/30 to-[#8ab4d5]/20" />
                      <img
                        src={mediator.image}
                        alt={mediator.name}
                        className="relative w-full aspect-[4/5] object-cover shadow-lg"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase mb-2 font-sans">
                      {mediator.title}
                    </p>
                    <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-2">
                      {mediator.name}
                    </h3>
                    <p className="text-[#5a6a7a] mb-6 font-medium font-sans">
                      {mediator.credentials}
                    </p>

                    {mediator.bio.map((paragraph, i) => (
                      <p key={i} className="text-[#5a6a7a] leading-relaxed mb-4 font-sans">
                        {paragraph}
                      </p>
                    ))}

                    <div className="space-y-6 mt-8">
                      {mediator.education && mediator.education.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <GraduationCap className="w-5 h-5 text-[#8ab4d5]" />
                            <span className="font-semibold text-[#1a1a1a]">Education & Background</span>
                          </div>
                          <ul className="space-y-1">
                            {mediator.education.map((edu, i) => (
                              <li key={i} className="text-[#5a6a7a] text-sm font-sans">{edu}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {mediator.certifications && mediator.certifications.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Briefcase className="w-5 h-5 text-[#8ab4d5]" />
                            <span className="font-semibold text-[#1a1a1a]">Recognition & Involvement</span>
                          </div>
                          <ul className="space-y-1">
                            {mediator.certifications.map((cert, i) => (
                              <li key={i} className="text-[#5a6a7a] text-sm font-sans">{cert}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Ready to Work <span className="font-semibold">Together?</span>
            </h2>
            <p className="text-[#a8b8c8] text-lg leading-relaxed mb-10 font-sans">
              We're here to help you find a path forward. Schedule a confidential
              consultation to discuss your situation and learn how mediation can help.
            </p>
            <Link to="/contact">
              <Button className="bg-[#8ab4d5] hover:bg-[#7aa3c4] text-[#1a1a1a] px-10 py-6 text-base group transition-all duration-300 font-medium font-sans">
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
