export const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as const
};

export const fastTransition = {
  duration: 0.2,
  ease: [0.25, 0.46, 0.45, 0.94] as const
};

export const slowTransition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94] as const
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25
};

export const staggerTransition = (delay: number = 0.08) => ({
  duration: 0.5,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as const
});
