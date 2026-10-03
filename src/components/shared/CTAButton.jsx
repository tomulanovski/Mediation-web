import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

// Goes to the contact page, or opens Calendly when siteConfig.bookingEnabled is true.
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
      {siteConfig.bookingEnabled ? (
        <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
          <Calendar className="mr-2 h-4 w-4" />
          {text || "Book Mediation"}
        </a>
      ) : (
        <Link to="/contact">
          {text || "Contact Us"}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </Button>
  );
}
