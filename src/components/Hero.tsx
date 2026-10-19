import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.png";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/data/site";
import HeroBackground from "./HeroBackground";
import Services from "./Services";
import { easeOut } from "@/lib/motion";

const MaskLine = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: easeOut }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-32 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.p
              className="mb-6 text-sm font-medium text-emerald-700 dark:text-emerald-400"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {SITE.availability}
              <span className="text-muted-foreground"> · {SITE.location} · remote</span>
            </motion.p>

            <motion.p
              className="mb-3 text-sm font-medium tracking-wide text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.02 }}
            >
              {SITE.name}
            </motion.p>

            <h1 className="hero-title text-balance text-foreground">
              <MaskLine delay={0.05}>AI backends, SaaS</MaskLine>
              <MaskLine delay={0.18} className="gradient-text">
                integrations, and agents
                <span className="text-muted-foreground">.</span>
              </MaskLine>
            </h1>
            <motion.span
              aria-hidden
              className="mt-4 block h-px max-w-[8rem] origin-left bg-portfolio-primary"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: easeOut }}
            />

            <motion.p
              className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Production systems for product teams. The work stays up after launch.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-center lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Button variant="hero" size="lg">
                  See the work
                </Button>
              </motion.a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-base font-bold text-portfolio-primary underline decoration-2 underline-offset-4"
              >
                {SITE.email}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto flex w-full max-w-[340px] justify-center lg:col-span-5 lg:mx-0 lg:max-w-none lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: easeOut }}
          >
            <div className="relative w-full max-w-[min(100%,280px)]">
              <motion.svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute -inset-3 text-portfolio-primary/60"
                aria-hidden
              >
                <motion.rect
                  x="1.5"
                  y="1.5"
                  width="97"
                  height="97"
                  rx="6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  initial={reduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.35, ease: easeOut }}
                />
              </motion.svg>
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/20"
                initial={reduceMotion ? false : { clipPath: "inset(14% 14% 14% 14% round 16px)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0% round 16px)" }}
                transition={{ duration: 1.05, delay: 0.15, ease: easeOut }}
              >
                <motion.img
                  src={heroPortrait}
                  alt={SITE.name}
                  className="aspect-square w-full object-cover object-center"
                  width={1024}
                  height={1024}
                  loading="eager"
                  decoding="async"
                  initial={reduceMotion ? false : { scale: 1.14 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.35, delay: 0.15, ease: easeOut }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Services />
      </div>
    </section>
  );
};

export default Hero;
