export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0, y: -40 },
  viewport: { 
    once: false,
    margin: "-100px 0px -100px 0px"
  }
};

export const fadeInUpStagger = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.05,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

export const fadeInUpItem = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 }
};
