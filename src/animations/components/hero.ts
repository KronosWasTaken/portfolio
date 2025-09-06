import { scaleOnHover } from "../variants/scale";

export const heroAnimations = {
  statusBadge: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  name: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  role: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  titleWord: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  description: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  buttons: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  
  buttonHover: scaleOnHover,
  
  statusDot: {
    animate: { 
      scale: [1, 1.2, 1],
      opacity: [1, 0.7, 1]
    },
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const
    }
  },
  
  wordTransition: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.3 }
  }
};
