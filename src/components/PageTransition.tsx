import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { useLocation, type Location } from "react-router-dom";
import { easeOut } from "@/lib/motion";

const PageTransition = ({ children }: { children: (location: Location) => ReactNode }) => {
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: easeOut }}
      >
        {!reduce && (
          <motion.span
            className="pointer-events-none fixed inset-x-0 top-0 z-[80] block h-0.5 origin-left bg-portfolio-primary"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.75, ease: easeOut, opacity: { delay: 0.4, duration: 0.3 } }}
            aria-hidden
          />
        )}
        {children(location)}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
