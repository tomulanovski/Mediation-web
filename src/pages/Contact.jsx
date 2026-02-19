import { useEffect } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/siteConfig";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: siteConfig.phone,
    link: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    title: "Service Area",
    content: siteConfig.address.serviceArea,
    link: null,
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Monday - Saturday\n9:00 AM - 9:00 PM",
    link: null,
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Cavanaugh Mediation, PLLC";
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
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#1a1a1a] leading-[1.15] mb-6">
              Let's Start a <span className="font-semibold">Conversation</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#5a6a7a] leading-relaxed font-sans">
              Ready to explore how mediation can help your family?
              We're here to listen and guide you toward resolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#8ab4d5]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a1a] mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-[#5a6a7a] hover:text-[#8ab4d5] transition-colors whitespace-pre-line font-sans text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-[#5a6a7a] whitespace-pre-line font-sans text-sm">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
