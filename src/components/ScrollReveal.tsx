import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { easeOut, rise, stagger } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
  amount?: number;
}

const offsets = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
};

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.72,
  once = true,
  amount = 0.18,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const reduce = useReducedMotion();
  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, x, y }}
      animate={isInView || reduce ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export const RevealGroup = ({
  children,
  className = "",
  staggerDelay = 0.08,
  once = true,
  amount = 0.12,
}: RevealGroupProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView || reduce ? "show" : "hidden"}
      variants={reduce ? undefined : stagger(staggerDelay)}
    >
      {children}
    </motion.div>
  );
};

export const revealItem = rise;
