import { useState, useEffect } from 'react';
import { getMobileAnimations } from '../components/mobile';
import { 
  heroAnimations, 
  certificationsAnimations, 
  techStackAnimations, 
  projectsAnimations, 
  aboutAnimations, 
  experienceAnimations,
  resumeAnimations
} from '../index';

export const useMobileAnimations = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Use matchMedia instead of window.innerWidth to avoid forced reflows
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const checkMobile = () => {
      setIsMobile(mediaQuery.matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    mediaQuery.addEventListener('change', checkMobile);
    return () => mediaQuery.removeEventListener('change', checkMobile);
  }, []);

  const mobileAnimations = getMobileAnimations();

  return {
    hero: isMobile && mobileAnimations ? mobileAnimations.hero : heroAnimations,
    certifications: isMobile && mobileAnimations ? mobileAnimations.certifications : certificationsAnimations,
    techStack: isMobile && mobileAnimations ? mobileAnimations.techStack : techStackAnimations,
    projects: isMobile && mobileAnimations ? mobileAnimations.projects : projectsAnimations,
    about: isMobile && mobileAnimations ? mobileAnimations.about : aboutAnimations,
    experience: isMobile && mobileAnimations ? mobileAnimations.experience : experienceAnimations,
    resume: resumeAnimations,
    isMobile
  };
};
