import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { navLinks } from "@/config/navigation";

const serviceLinks = [
  { label: "Divorce Mediation", path: "/services" },
  { label: "Child Custody", path: "/services" },
  { label: "Property Division", path: "/services" },
  { label: "Prenuptial Agreements", path: "/services" },
  { label: "Post-Decree Modifications", path: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <img
              src="/assets/logo-white.webp"
              alt={siteConfig.name}
              className="h-10 w-auto mb-6"
            />
            <p className="text-[#a8b8c8] leading-relaxed text-sm font-sans">
            Dedicated to guiding Florida families through divorce, custody, 
            and other legal matters with clarity, expertise, and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#a8b8c8] hover:text-[#8ab4d5] transition-colors text-sm font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-[#a8b8c8] hover:text-[#8ab4d5] transition-colors text-sm font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-[#a8b8c8] hover:text-[#8ab4d5] transition-colors text-sm font-sans"
                >
                  <Phone className="w-4 h-4 text-[#8ab4d5] flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#a8b8c8] text-sm font-sans">
                <MapPin className="w-4 h-4 text-[#8ab4d5] flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}
                  <br />
                  {siteConfig.address.serviceArea}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#a8b8c8] text-sm font-sans">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[#a8b8c8] text-sm font-sans">
            {siteConfig.address.city}, {siteConfig.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
