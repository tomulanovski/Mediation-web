import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/shared/CTAButton";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/65" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[#8ab4d5]" />
            <span className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase font-sans">
              Cavanaugh Mediation, PLLC
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-6"
          >
            Resolve Family Conflicts with{" "}
            <span className="font-semibold">Compassion & Expertise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-sans"
          >
            A mother-daughter mediation team dedicated to helping Florida families
            navigate divorce, custody, and family disputes — with dignity, respect,
            and lasting solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton text="Schedule Free Consultation" />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-[#1a1a1a] px-8 py-6 text-base font-sans bg-transparent"
            >
              <Link to="/services">
                Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf9f6] to-transparent" />
    </section>
  );
}
