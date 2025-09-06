import { fadeInUp } from "./variants/fadeInUp";

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isLowEndMobile = () => {
  if (typeof window === 'undefined') return false;
  const isMobileDevice = isMobile();
  const isLowEnd = window.innerWidth < 480 || /Android.*Chrome\/[0-5]|iPhone.*Version\/[0-9]|iPad.*Version\/[0-9]/.test(navigator.userAgent);
  return isMobileDevice && isLowEnd;
};

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const shouldReduceAnimations = () => {
  return isMobile() || prefersReducedMotion();
};

export const shouldDisableAnimations = () => {
  return isLowEndMobile() || prefersReducedMotion();
};

export const mobileOptimizedFadeIn = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { 
      duration: 0.2, 
      ease: [0.25, 0.46, 0.45, 0.94] as const 
    }
  },
  exit: { opacity: 0 },
  viewport: { 
    once: false,
    margin: "-20px 0px -20px 0px"
  }
};

export const mobileOptimizedCard = (index: number) => ({
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { 
      duration: 0.15, 
      delay: index * 0.01, 
      ease: [0.25, 0.46, 0.45, 0.94] as const 
    }
  },
  exit: { opacity: 0 },
  viewport: { 
    once: false,
    margin: "-20px 0px -20px 0px"
  }
});

export const mobileOptimizedHeader = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0 },
  viewport: { once: false, margin: "-20px 0px -20px 0px" }
};

export const mobileOptimizedFooter = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0 },
  viewport: { once: false, margin: "-20px 0px -20px 0px" }
};
