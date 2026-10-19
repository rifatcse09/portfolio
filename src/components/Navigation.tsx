import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/data/site";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
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

  const navLinkClass = (isActive: boolean) =>
    cn(
      "relative px-3 py-2 text-sm font-medium transition-colors rounded-lg",
      isScrolled || isActive
        ? "dark:text-white text-foreground"
        : "dark:text-white/90 text-muted-foreground dark:hover:text-white hover:text-foreground",
      isActive && !isScrolled && "text-foreground dark:text-white"
    );

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b",
        isScrolled
          ? "shadow-lg bg-white/90 border-border/60 dark:bg-slate-950/90 dark:border-white/10"
          : "bg-white/55 border-portfolio-primary/10 dark:bg-slate-950/60 dark:border-white/10"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="group relative cursor-pointer font-display text-[1.35rem] font-medium tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-foreground dark:text-white">{SITE.domain}</span>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-portfolio-primary transition-all duration-300 group-hover:w-full dark:bg-white/80" />
          </motion.a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={navLinkClass(isActive)}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg -z-10 bg-portfolio-primary/10 dark:bg-white/15"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
            <ThemeToggle />
            <a
              href={`mailto:${SITE.email}`}
              className="ml-2 hidden rounded-full bg-portfolio-primary/15 px-3 py-1.5 text-sm font-bold text-portfolio-primary underline decoration-2 underline-offset-2 lg:inline-flex"
            >
              {SITE.email}
            </a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gradient" size="sm" className="ml-2" onClick={() => scrollToSection("#contact")}>
                Hire Me
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground dark:text-white hover:bg-portfolio-primary/10 dark:hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-border/60 bg-background/95 dark:bg-slate-950/95 dark:border-white/10 backdrop-blur-xl">
                <a
                  href={`mailto:${SITE.email}`}
                  className="mx-4 mb-2 block rounded-xl bg-portfolio-primary/15 px-4 py-3 text-center text-base font-bold text-portfolio-primary underline decoration-2 underline-offset-2"
                >
                  {SITE.email}
                </a>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "block w-full text-left px-4 py-3 font-medium transition-colors rounded-lg",
                      activeSection === item.href.replace("#", "")
                        ? "text-foreground bg-portfolio-primary/10 dark:text-white dark:bg-white/15"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground dark:hover:bg-white/10 dark:hover:text-white"
                    )}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="px-4 pt-4 flex gap-2">
                  <a href={SITE.cv} target="_blank" rel="noopener noreferrer" download="MD-Rifatul-Islam-CV.pdf" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full gap-1">
                      <FileDown className="h-4 w-4" />
                      CV
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
