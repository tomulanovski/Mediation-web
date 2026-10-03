import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProcessSection from "@/components/shared/ProcessSection";
import CTASection from "@/components/home/CTASection";
import NotFound from "@/pages/NotFound";
import { services } from "@/data/services";
import { formatPrice, hourlyRate, hourlyServices, packages } from "@/data/pricing";

function PriceSummary({ serviceId }) {
  const pkg = packages.find((p) => p.serviceId === serviceId);
  const isHourly = hourlyServices.some((s) => s.serviceId === serviceId);

  return (
    <div className="bg-[#faf9f6] p-8 lg:p-10 border border-[#e8dcc4]">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Pricing</h2>
      {(pkg || isHourly) && (
        <dl className="space-y-4 mb-8 font-sans">
          {pkg && (
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[#5a6a7a]">Flat-Fee Package</dt>
              <dd className="text-2xl font-light text-[#1a1a1a]">{formatPrice(pkg.flatFee)}</dd>
            </div>
          )}
          <div className="flex items-baseline justify-between gap-6">
            <dt className="text-[#5a6a7a]">Hourly Rate</dt>
            <dd className="text-2xl font-light text-[#1a1a1a]">{`${formatPrice(hourlyRate)}/hr`}</dd>
          </div>
        </dl>
      )}
      <Link
        to="/pricing"
        className="inline-flex items-center gap-2 text-[#1a1a1a] text-sm font-medium font-sans hover:gap-3 transition-all"
      >
        View Pricing
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  // Same markup as the catch-all route, so the prerendered 404 page hydrates cleanly here.
  if (!service) return <NotFound />;

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
            <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8ab4d5]" />
              <Link
                to="/services"
                className="text-[#3b7797] hover:text-[#1a1a1a] transition-colors font-medium tracking-wider text-sm uppercase font-sans"
              >
                Our Services
              </Link>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#1a1a1a] leading-[1.15] mb-6">
              {service.title}
            </h1>
            <p className="text-lg lg:text-xl text-[#5a6a7a] leading-relaxed font-sans">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#5a6a7a] font-sans">
                    <CheckCircle className="w-5 h-5 text-[#8ab4d5] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <PriceSummary serviceId={service.id} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Other Services */}
      <section className="py-16 lg:py-20 bg-[#faf9f6]">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Our Services</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services
                .filter((s) => s.id !== service.id)
                .map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.id}`}
                      className="inline-flex items-center gap-2 text-[#5a6a7a] hover:text-[#1a1a1a] transition-colors font-sans"
                    >
                      <ArrowRight className="w-4 h-4 text-[#8ab4d5]" />
                      {s.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
