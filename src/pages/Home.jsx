import HeroSection from "@/components/home/HeroSection";
import WhyMediation from "@/components/home/WhyMediation";
import ServicesPreview from "@/components/home/ServicesPreview";
import MediatorsPreview from "@/components/home/MediatorsPreview";
import CTASection from "@/components/home/CTASection";
import useSEO from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Cavanaugh Mediation, PLLC | Family Mediation in All of Florida",
    description: "Florida Supreme Court Certified family mediators offering divorce mediation, parenting plans, and property division. Serving all of Florida virtually.",
    canonical: "/",
  });

  return (
    <div>
      <HeroSection />
      <WhyMediation />
      <ServicesPreview />
      <MediatorsPreview />
      <CTASection />
    </div>
  );
}
