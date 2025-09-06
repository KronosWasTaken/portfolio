import { useState, useEffect } from 'react';
import { getMobileAnimations } from '../components/mobile';
import { 
  heroAnimations, 
  certificationsAnimations, 
  techStackAnimations, 
  projectsAnimations, 
  aboutAnimations, 
  experienceAnimations 
} from '../index';

export const useMobileAnimations = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileAnimations = getMobileAnimations();

  return {
    hero: isMobile && mobileAnimations ? mobileAnimations.hero : heroAnimations,
    certifications: isMobile && mobileAnimations ? mobileAnimations.certifications : certificationsAnimations,
    techStack: isMobile && mobileAnimations ? mobileAnimations.techStack : techStackAnimations,
    projects: isMobile && mobileAnimations ? mobileAnimations.projects : projectsAnimations,
    about: isMobile && mobileAnimations ? mobileAnimations.about : aboutAnimations,
    experience: isMobile && mobileAnimations ? mobileAnimations.experience : experienceAnimations,
    isMobile
  };
};
