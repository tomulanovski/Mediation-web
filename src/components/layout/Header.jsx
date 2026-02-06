import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { navLinks } from "@/config/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#1a1a1a] text-white text-sm py-2">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6 font-sans">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-[#8ab4d5] transition-colors">
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[#8ab4d5] transition-colors">
              <Mail className="w-4 h-4" />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2 font-sans">
            <MapPin className="w-4 h-4 text-[#8ab4d5]" />
            <span>{siteConfig.address.serviceArea}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.name}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group font-sans ${
                    location.pathname === link.path
                      ? "text-[#1a1a1a]"
                      : "text-[#5a6a7a] hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#8ab4d5] transition-all duration-300 ${
                      location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] hover:bg-[#333333] text-white px-6 py-2.5 text-sm font-medium transition-all duration-300 font-sans"
              >
                Book Consultation
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#1a1a1a]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
            style={{ top: "80px" }}
          >
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex flex-col p-6 gap-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 text-lg font-medium transition-colors font-sans ${
                    location.pathname === link.path
                      ? "text-[#1a1a1a] bg-[#f5f3ef]"
                      : "text-[#5a6a7a] hover:text-[#1a1a1a] hover:bg-[#faf9f6]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#e8dcc4]">
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#1a1a1a] text-white text-center py-3 px-6 text-base font-medium font-sans"
                >
                  Book Consultation
                </a>
              </div>
              <div className="mt-6 space-y-3 text-sm text-[#5a6a7a] font-sans">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
