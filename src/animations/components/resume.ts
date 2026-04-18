import { fadeInUp } from "../variants/fadeInUp";

export const resumeAnimations = {
  header: {
    ...fadeInUp,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  container: {
    initial: "initial",
    animate: "animate",
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }
  },
  
  section: {
    ...fadeInUp,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  item: {
    variants: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
      }
    }
  }
};
