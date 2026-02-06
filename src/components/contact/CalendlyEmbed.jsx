import { InlineWidget } from "react-calendly";
import { siteConfig } from "@/config/siteConfig";
import CTAButton from "@/components/shared/CTAButton";

export default function CalendlyEmbed() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
        Book a Free Consultation
      </h2>
      <p className="text-[#5a6a7a] mb-6 font-sans text-sm">
        Select a time for a free 15-minute consultation to discuss your situation.
      </p>

      {/* Desktop: inline widget */}
      <div className="hidden md:block border border-[#e8dcc4] overflow-hidden">
        <InlineWidget
          url={siteConfig.calendlyUrl}
          styles={{ height: "700px", minWidth: "320px" }}
        />
      </div>

      {/* Mobile: button fallback (avoids iframe scroll issues) */}
      <div className="md:hidden">
        <CTAButton text="Schedule Your Consultation" className="w-full" />
        <p className="text-center text-[#5a6a7a] text-xs mt-3 font-sans">
          Opens scheduling in a new tab
        </p>
      </div>
    </div>
  );
}
