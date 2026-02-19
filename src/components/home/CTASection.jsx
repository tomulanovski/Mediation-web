import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import { siteConfig } from "@/config/siteConfig";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Ready to Take the <span className="font-semibold">First Step?</span>
          </h2>
          <p className="text-[#a8b8c8] text-lg leading-relaxed mb-10 font-sans">
            Schedule a free 15-minute consultation to discuss your situation and
            learn how mediation can help your family move forward.
          </p>
          <CTAButton text="Schedule Free Consultation" className="mx-auto" />
          <p className="mt-6 text-[#a8b8c8] text-sm font-sans">
            Or call us directly at{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-[#8ab4d5] hover:underline">
              {siteConfig.phone}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
