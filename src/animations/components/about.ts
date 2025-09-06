import { fadeInUp } from "../variants/fadeInUp";

export const aboutAnimations = {
  header: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  },
  
  expertiseCard: (index: number) => ({
    ...fadeInUp,
    transition: { duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }),
  
  cardHover: {
    hover: { 
      y: -10,
      scale: 1.03,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  },
  
  iconHover: {
    hover: { 
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  },
  
  learningCard: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }
};
