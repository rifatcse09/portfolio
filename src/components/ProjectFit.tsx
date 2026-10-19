import { useEffect } from "react";
import { motion } from "framer-motion";
import { PROJECT_FIT } from "@/data/projectFit";
import { SITE } from "@/data/site";
import { easeOut } from "@/lib/motion";

const ProjectFit = () => {
  useEffect(() => {
    if (window.location.hash === "#fit") {
      document.getElementById("fit")?.scrollIntoView();
    }
  }, []);

  return (
    <section id="fit" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="section-kicker">Projects I take</p>
            <h2 className="section-title mt-3 text-foreground">
              Bring it in the <span className="gradient-text">shape it's in</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Send a blank brief, a prototype, or a product that already has users. I take web, SaaS, ecommerce, mobile, automation, APIs, and AI work through to production.
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {PROJECT_FIT.map((item, index) => (
              <a key={item.label} href="#contact" className="group relative block border-t border-border/80 py-6">
                <motion.span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left bg-portfolio-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: easeOut }}
                />
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, delay: 0.05 + (index % 4) * 0.08, ease: easeOut }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-primary">{item.label}</span>
                  <span className="mt-2 block font-display text-2xl text-foreground transition-colors duration-300 group-hover:text-portfolio-primary">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{item.detail}</span>
                </motion.span>
              </a>
            ))}
          </div>

          <p className="mt-10 text-base text-muted-foreground">
            Email the project as it is today:{" "}
            <a href={`mailto:${SITE.email}`} className="font-bold text-portfolio-primary underline underline-offset-4">
              {SITE.email}
            </a>
            . I reply within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectFit;
