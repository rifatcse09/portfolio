import { WORK_PROCESS } from "@/data/site";
import { RevealGroup, ScrollReveal, revealItem } from "./ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Process = () => {
  return (
    <section id="process" className="section-noise relative overflow-hidden py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--portfolio-primary) / 0.04) 0%, transparent 50%, hsl(var(--portfolio-secondary) / 0.04) 100%)",
        }}
      />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="section-header section-title">
              How a project <span className="gradient-text">starts</span>
            </h2>
          </ScrollReveal>

          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.09}>
            {WORK_PROCESS.map((step, index) => (
              <motion.div
                key={step.step}
                variants={revealItem}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-border/70 bg-background/70 p-6 glass-panel"
              >
                <span className="font-display text-[2.4rem] font-medium leading-none text-portfolio-primary/25">{step.step}</span>
                <h3 className="mt-2 mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                {index < WORK_PROCESS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-portfolio-primary/40 lg:block" />
                )}
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default Process;
