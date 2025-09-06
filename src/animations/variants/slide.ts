export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0, x: 50 },
  viewport: { 
    once: false,
    margin: "-100px 0px -100px 0px"
  }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0, x: -50 },
  viewport: { 
    once: false,
    margin: "-100px 0px -100px 0px"
  }
};

export const slideUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0, y: -30 },
  viewport: { 
    once: false,
    margin: "-100px 0px -100px 0px"
  }
};

export const slideDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0, y: 30 },
  viewport: { 
    once: false,
    margin: "-100px 0px -100px 0px"
  }
};
