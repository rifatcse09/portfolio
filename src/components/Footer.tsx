import { motion } from "framer-motion";
import { SITE } from "@/data/site";
import ProfileLinks from "./ProfileLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t relative overflow-hidden pb-20 md:pb-12">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div>
            <motion.div
              className="font-display mb-4 text-[1.65rem] font-medium tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">{SITE.name}</span>
            </motion.div>
            <a
              href={`mailto:${SITE.email}`}
              className="mb-6 inline-flex rounded-full bg-portfolio-primary/15 px-4 py-2 text-lg font-bold text-portfolio-primary underline decoration-2 underline-offset-4"
            >
              {SITE.email}
            </a>
            <ProfileLinks className="justify-start" />
            <p className="mt-4 text-sm text-muted-foreground">
              <a href={SITE.cv} target="_blank" rel="noopener noreferrer" download="MD-Rifatul-Islam-CV.pdf" className="hover:text-foreground">
                CV
              </a>
            </p>
        </div>

        <motion.div
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} {SITE.domain}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
