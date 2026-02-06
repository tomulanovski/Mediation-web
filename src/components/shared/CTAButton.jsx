import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export default function CTAButton({ text, className, variant = "default", size = "lg" }) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        "bg-[#8ab4d5] hover:bg-[#7aa3c4] text-[#1a1a1a] px-8 py-6 text-base font-medium group transition-all duration-300 font-sans",
        className
      )}
    >
      <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
        <Calendar className="mr-2 h-4 w-4" />
        {text || "Book Free Consultation"}
      </a>
    </Button>
  );
}
