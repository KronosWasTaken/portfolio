import { fadeInUp } from "../variants/fadeInUp";

export const techStackAnimations = {
  header: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  },
  
  techItem: (index: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        delay: index * 0.05, 
        ease: [0.25, 0.46, 0.45, 0.94] as const 
      }
    },
    exit: { opacity: 0, y: -20 },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }),
  
  iconHover: {},
  
  footer: {
    ...fadeInUp,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    viewport: { once: false, margin: "-100px 0px -100px 0px" }
  }
};
