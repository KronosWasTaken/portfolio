import { mobileOptimizedFadeIn, mobileOptimizedCard, mobileOptimizedHeader, mobileOptimizedFooter, shouldReduceAnimations, shouldDisableAnimations } from "../mobile";

export const getMobileAnimations = () => {
  if (!shouldReduceAnimations()) {
    return null;
  }

  // For very low-end devices, disable animations entirely
  if (shouldDisableAnimations()) {
    return {
      hero: {
        statusBadge: { initial: { opacity: 1 }, animate: { opacity: 1 } },
        title: { initial: { opacity: 1 }, animate: { opacity: 1 } },
        name: { initial: { opacity: 1 }, animate: { opacity: 1 } },
        role: { initial: { opacity: 1 }, animate: { opacity: 1 } },
        titleWord: { initial: { opacity: 1 }, animate: { opacity: 1 } },
        description: { initial: { opacity: 1 }, animate: { opacity: 1 } },
        buttons: { initial: { opacity: 1 }, animate: { opacity: 1 } },
        buttonHover: {},
        statusDot: { animate: { scale: 1, opacity: 1 } },
        wordTransition: { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
      },
      certifications: {
        header: { initial: { opacity: 1 }, whileInView: { opacity: 1 } },
        card: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        cardHover: {},
        iconHover: { hover: {} },
        featuredBadge: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        buttonHover: {},
        footer: { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
      },
      techStack: {
        header: { initial: { opacity: 1 }, whileInView: { opacity: 1 } },
        techItem: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        iconHover: { hover: {} },
        footer: { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
      },
      projects: {
        header: { initial: { opacity: 1 }, whileInView: { opacity: 1 } },
        projectCard: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        cardHover: {},
        iconHover: { hover: {} },
        featuredBadge: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        techBadge: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        buttonHover: {},
        footer: { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
      },
      about: {
        header: { initial: { opacity: 1 }, whileInView: { opacity: 1 } },
        expertiseCard: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        cardHover: {},
        iconHover: { hover: {} },
        learningCard: { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
      },
      experience: {
        header: { initial: { opacity: 1 }, whileInView: { opacity: 1 } },
        experienceCard: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        cardHover: {},
        iconHover: { hover: {} },
        featuredBadge: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        techBadge: () => ({ initial: { opacity: 1 }, whileInView: { opacity: 1 } }),
        careerObjective: { initial: { opacity: 1 }, whileInView: { opacity: 1 } },
        objectiveCardHover: {},
        objectiveIconHover: { hover: {} }
      }
    };
  }

  return {
    hero: {
      statusBadge: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 }
      },
      title: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 }
      },
      name: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.15 }
      },
      role: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.2 }
      },
      titleWord: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.25 }
      },
      description: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.3 }
      },
      buttons: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.35 }
      },
      buttonHover: {},
      statusDot: {
        animate: { 
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1]
        },
        transition: { 
          duration: 3,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1] as const
        }
      },
      wordTransition: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 }
      }
    },

    certifications: {
      header: mobileOptimizedHeader,
      card: (index: number) => mobileOptimizedCard(index),
      cardHover: {},
      iconHover: {},
      featuredBadge: (index: number) => mobileOptimizedCard(index + 3),
      buttonHover: {},
      footer: mobileOptimizedFooter
    },

    techStack: {
      header: mobileOptimizedHeader,
      techItem: (index: number) => mobileOptimizedCard(index),
      iconHover: {
        hover: {}
      },
      footer: mobileOptimizedFooter
    },

    projects: {
      header: mobileOptimizedHeader,
      projectCard: (index: number) => mobileOptimizedCard(index),
      cardHover: {},
      iconHover: {},
      featuredBadge: (index: number) => mobileOptimizedCard(index + 3),
      techBadge: (index: number) => mobileOptimizedCard(index + 5),
      buttonHover: {},
      footer: mobileOptimizedFooter
    },

    about: {
      header: mobileOptimizedHeader,
      expertiseCard: (index: number) => mobileOptimizedCard(index),
      cardHover: {},
      iconHover: {},
      learningCard: mobileOptimizedFadeIn
    },

    experience: {
      header: mobileOptimizedHeader,
      experienceCard: (index: number) => mobileOptimizedCard(index),
      cardHover: {},
      iconHover: {},
      featuredBadge: (index: number) => mobileOptimizedCard(index + 3),
      techBadge: (index: number, cardIndex: number) => mobileOptimizedCard(cardIndex + index),
      careerObjective: mobileOptimizedFadeIn,
      objectiveCardHover: {},
      objectiveIconHover: {}
    }
  };
};
