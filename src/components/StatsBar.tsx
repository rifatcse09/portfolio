import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/site";
import { RevealGroup, revealItem } from "./ScrollReveal";
import { motion, useInView, useReducedMotion } from "framer-motion";

const CountValue = ({ value }: { value: string }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";
  const numeric = Boolean(match);
  const [current, setCurrent] = useState(numeric && !reduce ? 0 : target);

  useEffect(() => {
    if (!numeric || !inView || reduce) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 900);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, reduce, target]);

  return (
    <span ref={ref}>
      {numeric ? `${current}${suffix}` : value}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="relative border-y border-border/60 bg-muted/30 py-12 dark:bg-muted/10 dark:border-border/40">
      <div className="container mx-auto px-6">
        <RevealGroup className="mx-auto grid max-w-3xl grid-cols-3 gap-6" staggerDelay={0.08}>
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={revealItem}
              >
                <div className="font-display text-[2.15rem] font-medium leading-none tracking-tight text-foreground md:text-[2.6rem]">
                  <span className="gradient-text">
                    <CountValue value={stat.value} />
                  </span>
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{stat.detail}</div>
              </motion.div>
            ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default StatsBar;
