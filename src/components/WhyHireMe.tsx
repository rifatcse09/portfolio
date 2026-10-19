import { HIRE_BENEFITS } from "@/data/site";
import { RevealGroup, ScrollReveal, revealItem } from "./ScrollReveal";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WhyHireMe = () => {
  return (
    <section id="why-hire" className="section-noise relative overflow-hidden bg-background py-24">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-portfolio-primary/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-14 text-center">
            <p className="section-kicker">
              Why work with me
            </p>
            <h2 className="section-header section-title mb-6">
              Why this <span className="gradient-text">focus</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Hire me when the product needs an AI backend, a SaaS integration, or architecture that has to survive launch.
            </p>
          </ScrollReveal>

          <RevealGroup className="grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
            {HIRE_BENEFITS.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={revealItem}
                whileHover={{ y: -5 }}
                className="flex gap-4 rounded-2xl border border-border/70 bg-background/60 p-6 glass-panel"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-portfolio-accent" />
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
