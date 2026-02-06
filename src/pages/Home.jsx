import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyMediation from "@/components/home/WhyMediation";
import MediatorsPreview from "@/components/home/MediatorsPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  useEffect(() => {
    document.title = "Cavanaugh Mediation, PLLC | Family Mediation in Naples, FL";
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <WhyMediation />
      <MediatorsPreview />
      <CTASection />
    </div>
  );
}
