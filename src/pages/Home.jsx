import HeroSection from "@/components/home/HeroSection";
import WhyMediation from "@/components/home/WhyMediation";
import ServicesPreview from "@/components/home/ServicesPreview";
import MediatorsPreview from "@/components/home/MediatorsPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {

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
