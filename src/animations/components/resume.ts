import { fadeInUp } from "../variants/fadeInUp";

export const resumeAnimations = {
  header: {
    initial: fadeInUp.initial,
    animate: fadeInUp.whileInView,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  container: {
    initial: "initial",
    animate: "animate",
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.05
        }
      }
    }
  },
  
  section: {
    initial: fadeInUp.initial,
    animate: fadeInUp.whileInView,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  item: {
    variants: {
      initial: { opacity: 0, y: 15 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
      }
    }
  }
};
