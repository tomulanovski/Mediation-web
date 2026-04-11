import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

function PricingCard({ featured, badge, title, price, priceNote, pill, items, itemsLabel }) {
  return (
    <div
      className={`bg-white p-8 lg:p-10 flex flex-col h-full rounded-[12px] ${
        featured
          ? "border-2 border-[#8ab4d5] relative"
          : "border border-[#e8dcc4]"
      }`}
    >
      {badge && (
        <span className="absolute -top-3.5 left-8 bg-[#8ab4d5] text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 font-sans">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">{title}</h3>
      <div className="mb-1">
        <span className="text-4xl font-light text-[#1a1a1a]">{price}</span>
      </div>
      {priceNote && (
        <p className="text-[#5a6a7a] text-sm font-sans mb-3">{priceNote}</p>
      )}
      {pill && (
        <span className="inline-block bg-[#f0f7fb] text-[#3b7797] text-xs font-medium px-3 py-1.5 rounded-full font-sans mb-6 w-fit">
          {pill}
        </span>
      )}
      {itemsLabel && (
        <p className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider font-sans mb-3 mt-2">
          {itemsLabel}
        </p>
      )}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[#5a6a7a] text-sm font-sans leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8ab4d5] mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <AnimatedSection className="mb-10">
      <div className="border-b border-[#e8dcc4] pb-3">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5a6a7a] font-sans">
          {children}
        </span>
      </div>
    </AnimatedSection>
  );
}

export default function Pricing() {
  useSEO({
    title: "Pricing | Cavanaugh Mediation, PLLC",
    description:
      "Simple, transparent mediation pricing. Flat-fee divorce mediation for $2,500 or $350/hr. Prenuptial agreements from $1,100. No hidden fees.",
    canonical: "/pricing",
  });

  return (
    <div>
      {/* Hero */}
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
              <span className="text-[#3b7797] font-medium tracking-wider text-sm uppercase font-sans">
                Our Costs
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#1a1a1a] leading-[1.15] mb-6">
              Simple, transparent pricing.
            </h1>
            <p className="text-lg lg:text-xl text-[#5a6a7a] leading-relaxed font-sans">
              You'll know exactly what you're paying before we begin, including what's covered.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {[
                "No hidden fees, ever",
                "Price agreed before sessions start",
                "You choose your structure",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#8ab4d5] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[#1a1a1a] text-sm font-medium font-sans">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divorce Mediation */}
      <section className="py-14 lg:py-18 bg-[#faf9f6]">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <SectionLabel>Divorce Mediation</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <PricingCard
                featured
                badge="Most popular"
                title="Flat-Fee Package"
                price="$2,500"
                priceNote="One total. That's it."
                pill="$1,250 per person when split between parties"
                itemsLabel="Includes"
                items={[
                  "Up to 8 hours of mediation sessions",
                  "Pre-session preparation and document review",
                  "Drafting of the Martial Settlement Agreement and Parenting Plan",
                  "Walk through of how to file documents",
                  "No extra charges at any stage",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <PricingCard
                title="Hourly Rate"
                price="$350/hr"
                priceNote="Billed in 30-min increments"
                pill="Fee typically split between both parties"
                itemsLabel="Good if you expect"
                items={[
                  "A straightforward, quick resolution",
                  "Fewer than 4 to 5 hours of sessions",
                  "Minimal document preparation needed",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prenuptial & Postnuptial */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <SectionLabel>Prenuptial &amp; Postnuptial Agreements</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <PricingCard
                featured
                badge="Most popular"
                title="Flat-Fee Package"
                price="$1,100"
                priceNote="One total. That's it."
                pill="$550 per person when split between parties"
                itemsLabel="Includes"
                items={[
                  "Up to 3 hours of mediation sessions",
                  "Pre-session preparation and document review",
                  "Drafting of the final agreement",
                  "No extra charges at any stage",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <PricingCard
                title="Hourly Rate"
                price="$350/hr"
                priceNote="Billed in 30-min increments"
                pill="Fee typically split between both parties"
                itemsLabel="Good if you expect"
                items={[
                  "A focused, efficient session",
                  "Fewer than 2 hours of discussion",
                  "A largely agreed-upon starting point",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Post-Decree & Other */}
      <section className="py-14 lg:py-18 bg-[#faf9f6]">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <SectionLabel>
            Post-Decree Modifications &amp; Other Family Matters
          </SectionLabel>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-[#f5f3ef] p-8 lg:p-10 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    Post-Decree Modifications
                  </h3>
                  <p className="text-[#5a6a7a] text-sm font-sans leading-relaxed">
                    Parenting disputes, support adjustments, and more.
                  </p>
                </div>
                <span className="text-xl font-light text-[#1a1a1a] whitespace-nowrap">
                  $350 / hour
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-[#f5f3ef] p-8 lg:p-10 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    Other Family Mediation
                  </h3>
                  <p className="text-[#5a6a7a] text-sm font-sans leading-relaxed">
                    Elder care, inheritance, and other family matters.
                  </p>
                </div>
                <span className="text-xl font-light text-[#1a1a1a] whitespace-nowrap">
                  $350 / hour
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom Notes */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-6">
          <AnimatedSection>
            <div className="border-l-4 border-[#d4a853] pl-6 py-2">
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                A note on filing fees
              </h3>
              <p className="text-[#5a6a7a] text-sm font-sans leading-relaxed">
                Court filing fees are not included in any of our packages and
                are paid separately, directly to the court. The amount varies
                depending on your county and the type of matter.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="border-l-4 border-[#8ab4d5] pl-6 py-2">
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                The filing process
              </h3>
              <p className="text-[#5a6a7a] text-sm font-sans leading-relaxed">
                As mediators, we are not able to file documents on your behalf,
                but you won't be left on your own. Once your agreement is
                finalized, we'll walk you through exactly what needs to be
                filed, where to file it, and how to do it, step by step.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="border-l-4 border-[#8ab4d5] pl-6 py-2">
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                Pro-se divorces only
              </h3>
              <p className="text-[#5a6a7a] text-sm font-sans leading-relaxed">
                The pricing above applies to pro-se (self-represented) divorces.
                If you are working with an attorney, please{" "}
                <Link to="/contact" className="text-[#3b7797] underline underline-offset-2 hover:text-[#8ab4d5] transition-colors">
                  contact us
                </Link>{" "}
                for rates and availability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-14 lg:py-18 bg-[#faf9f6]">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <AnimatedSection>
            <div className="border border-[#e8dcc4] rounded-lg p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
                  Not sure where to start?
                </h3>
                <p className="text-[#5a6a7a] font-sans leading-relaxed">
                  We're happy to give you an honest estimate before you commit
                  to anything. Contact us today.
                </p>
              </div>
              <Link to="/contact" className="flex-shrink-0">
                <Button className="bg-[#8ab4d5] hover:bg-[#7aa5c6] text-white px-8 py-6 text-base group transition-all duration-300 font-sans">
                  Send us a message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
