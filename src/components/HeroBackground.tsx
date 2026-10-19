import { motion, useReducedMotion } from "framer-motion";

const StudioLight = ({ side }: { side: "left" | "right" }) => {
  const reduce = useReducedMotion();
  const left = side === "left";

  return (
    <div className={`absolute top-[4.25rem] ${left ? "left-1" : "right-1"}`}>
      <motion.div
        className={left ? "origin-top-left" : "origin-top-right"}
        initial={false}
        animate={reduce ? { rotate: left ? 16 : -16 } : { rotate: left ? [10, 24, 10] : [-10, -24, -10] }}
        transition={reduce ? { duration: 0 } : { duration: left ? 8 : 9.5, repeat: Infinity, ease: "easeInOut", delay: left ? 0 : 0.8 }}
      >
        <div
          className={`relative z-10 h-3 w-9 rounded-[3px] bg-white shadow-[0_0_16px_3px_rgba(255,255,255,0.95)] ${left ? "" : "ml-auto"}`}
        />
        <motion.div
          className="absolute top-1 h-[34rem] w-[18rem] mix-blend-screen sm:h-[42rem] sm:w-[26rem]"
          style={{
            left: left ? 0 : undefined,
            right: left ? undefined : 0,
            background: left
              ? "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(196,214,255,0.35) 32%, transparent 74%)"
              : "linear-gradient(to bottom, rgba(255,255,255,0.82), rgba(255,220,190,0.28) 32%, transparent 74%)",
            clipPath: left ? "polygon(0 0, 14% 0, 88% 100%, 34% 100%)" : "polygon(86% 0, 100% 0, 66% 100%, 12% 100%)",
            filter: "blur(8px)",
          }}
          initial={false}
          animate={reduce ? { opacity: 0.85 } : { opacity: [0.55, 1, 0.55] }}
          transition={reduce ? { duration: 0 } : { duration: left ? 6.5 : 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/90 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/80" />

      {/* Animated mesh orbs */}
      <motion.div
        className="absolute -left-[10%] top-[5%] h-[520px] w-[520px] rounded-full bg-portfolio-primary/25 blur-[100px] dark:bg-portfolio-primary/20"
        animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[5%] top-[10%] h-[480px] w-[480px] rounded-full bg-portfolio-secondary/22 blur-[100px] dark:bg-portfolio-secondary/18"
        animate={{ x: [0, -35, 0], y: [0, 30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[20%] h-[400px] w-[400px] rounded-full bg-portfolio-cool/20 blur-[90px] dark:bg-portfolio-cool/15"
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[15%] h-[320px] w-[320px] rounded-full bg-portfolio-accent/15 blur-[80px]"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Mesh gradient overlay */}
      <div className="hero-mesh absolute inset-0 opacity-80" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(hsl(var(--portfolio-primary)/0.35)_1px,transparent_1px)] [background-size:28px_28px]"
        style={{
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 10%, transparent 70%)",
        }}
      />

      {/* Fine line grid */}
      <div
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,hsl(var(--portfolio-primary)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--portfolio-primary)/0.2)_1px,transparent_1px)] [background-size:64px_64px]"
        style={{
          maskImage: "radial-gradient(ellipse 100% 70% at 50% 0%, black 15%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 70% at 50% 0%, black 15%, transparent 65%)",
        }}
      />

      {/* Diagonal shimmer */}
      <div className="hero-shimmer absolute -inset-[50%] opacity-[0.07] dark:opacity-[0.12]" />

      {/* Spotlight behind portrait area */}
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-gradient-to-br from-portfolio-primary/12 via-portfolio-secondary/8 to-transparent blur-3xl lg:block" />

      {/* Studio lamps aimed at the page */}
      <StudioLight side="left" />
      <StudioLight side="right" />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Decorative rings */}
      <motion.div
        className="absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full border border-portfolio-primary/10 lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[12%] top-[22%] hidden h-48 w-48 rounded-full border border-dashed border-portfolio-secondary/15 lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating accent dots */}
      {[
        { top: "18%", left: "12%", delay: 0 },
        { top: "35%", left: "8%", delay: 1.2 },
        { top: "60%", left: "15%", delay: 0.6 },
        { top: "25%", right: "35%", delay: 2 },
        { top: "70%", right: "25%", delay: 1.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-portfolio-primary/50 shadow-[0_0_12px_hsl(var(--portfolio-primary)/0.6)]"
          style={{ top: dot.top, left: dot.left, right: dot.right }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: dot.delay }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
