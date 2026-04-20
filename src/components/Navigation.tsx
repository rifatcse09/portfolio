import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CV_URL = "/cv.pdf";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      if (scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const sections = navItems.map((item) => ({
        id: item.href.replace("#", ""),
        element: document.querySelector(item.href),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i];
        if (element && id !== "home") {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/45 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-black/20 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="group relative font-bold text-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bg-gradient-to-r from-portfolio-cool via-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent drop-shadow-[0_2px_8px_hsl(var(--portfolio-primary)/0.35)]">
              mdrifatul.info
            </span>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-portfolio-cool via-portfolio-primary to-portfolio-secondary transition-all duration-300 group-hover:w-full" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 font-medium transition-colors rounded-lg ${
                      isScrolled
                        ? isActive
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                        : isActive
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className={`absolute inset-0 rounded-lg -z-10 ${
                          isScrolled ? "bg-white/15" : "bg-white/10"
                        }`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="gradient"
                size="sm"
                className="ml-8"
                onClick={() => scrollToSection("#contact")}
              >
                Hire Me
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-black/65 backdrop-blur-xl border-t border-white/10 py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 font-medium transition-colors rounded-lg ${
                      activeSection === item.href.replace("#", "")
                        ? "text-white bg-white/15"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="px-4 pt-4 flex gap-2">
                  <a href={CV_URL} target="_blank" rel="noopener noreferrer" download="MD-Rifatul-Islam-CV.pdf" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full gap-1">
                      <FileDown className="h-4 w-4" />
                      Download CV
                    </Button>
                  </a>
                  <Button variant="gradient" size="sm" className="flex-1" onClick={() => scrollToSection("#contact")}>
                    Hire Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
