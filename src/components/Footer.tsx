import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/rifatcse09", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rifatcse09/", label: "LinkedIn" },
    { icon: BookOpen, href: "https://medium.com/@rifatcse09", label: "Medium" },
    { icon: Mail, href: "mailto:rifatcse09@gmail.com", label: "Email" },
  ];

  const CV_URL = "/cv.pdf";
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
        { label: "Download CV", href: CV_URL, external: true },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#" },
        { label: "Full-Stack Development", href: "#" },
        { label: "Consulting", href: "#" },
        { label: "Code Review", href: "#" },
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-background border-t relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              className="font-bold text-2xl mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">Rifatul</span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-stack developer passionate about creating innovative web applications
              that solve real-world problems and deliver exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-portfolio-primary/10 hover:text-portfolio-primary"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.href.endsWith(".pdf") ? "MD-Rifatul-Islam-CV.pdf" : undefined}
                        className="text-muted-foreground hover:text-portfolio-primary transition-colors text-sm hover:underline underline-offset-4"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-portfolio-primary transition-colors text-sm hover:underline underline-offset-4"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} mdrifatul.info. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
