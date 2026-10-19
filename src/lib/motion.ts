export const easeOut = [0.22, 1, 0.36, 1] as const;

export const rise = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const stagger = (delay = 0.07) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay, delayChildren: 0.04 },
  },
});
