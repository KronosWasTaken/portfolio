export const scaleIn = {
  initial: { scale: 0.7, opacity: 0 },
  whileInView: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { scale: 0.7, opacity: 0 },
  viewport: { 
    once: false,
    margin: "-100px 0px -100px 0px"
  }
};

export const scaleOnHover = {
  hover: { 
    scale: 1.08,
    y: -4,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};
