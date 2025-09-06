import { fadeInUp } from "../variants/fadeInUp";
import { scaleIn } from "../variants/scale";

export const certificationsAnimations = {
  header: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  },
  
  card: (index: number) => ({
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
      rotate: 10,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  },
  
  featuredBadge: (index: number) => ({
    ...scaleIn,
    transition: { 
      delay: 0.3 + index * 0.1,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }),
  
  buttonHover: {
    hover: { 
      x: 10,
      scale: 1.05,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  },
  
  footer: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }
};
