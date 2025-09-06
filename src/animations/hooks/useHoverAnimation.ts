export const useHoverAnimation = () => {
  const cardHover = {
    hover: { 
      y: -12,
      scale: 1.02,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const buttonHover = {
    hover: { 
      scale: 1.08,
      y: -2,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const iconHover = {
    hover: { 
      scale: 1.2,
      rotate: 12,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const slideHover = {
    hover: { 
      x: 12,
      scale: 1.05,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return {
    cardHover,
    buttonHover,
    iconHover,
    slideHover
  };
};
