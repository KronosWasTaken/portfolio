import { fadeInUp } from "../variants/fadeInUp";
import { scaleIn, scaleOnHover } from "../variants/scale";

export const projectsAnimations = {
  header: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  },
  
  projectCard: (index: number) => ({
    ...fadeInUp,
    transition: { duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }),
  
  cardHover: {
    hover: { 
      y: -12,
      scale: 1.05,
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
  
  techBadge: (index: number) => ({
    initial: { opacity: 0, scale: 0.7 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.4 + index * 0.05,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }),
  
  buttonHover: scaleOnHover,
  
  footer: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }
};
