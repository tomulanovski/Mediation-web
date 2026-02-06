import AnimatedSection from "./AnimatedSection";

export default function SectionHeader({ label, title, subtitle, centered = false, light = false }) {
  return (
    <AnimatedSection className={`mb-16 ${centered ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-12 bg-[#8ab4d5]" />
        <span className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase font-sans">
          {label}
        </span>
        {centered && <div className="h-px w-12 bg-[#8ab4d5]" />}
      </div>
      <h2 className={`text-3xl lg:text-4xl font-light ${light ? "text-white" : "text-[#1a1a1a]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-[#a8b8c8]" : "text-[#5a6a7a]"}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
