import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import ParticleBackground from "./ParticleBackground";
import { motion } from "motion/react";
import { useMobileAnimations } from "@/animations/hooks/useMobileAnimations";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const titles = ["Analyst", "Engineer"];
  const { hero: heroAnimations, isMobile } = useMobileAnimations();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 300); // Half animation duration
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      {/* Elegant background - theme adaptive */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>
      
      {/* Interactive particle background - disabled on mobile for performance */}
      {!isMobile && <ParticleBackground />}
      
      {/* Floating shapes - theme adaptive - reduced on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/[0.03] dark:bg-highlight/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/[0.03] dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-highlight/15 text-highlight border border-highlight/30 mb-8"
          {...heroAnimations.statusBadge}
        >
          <motion.span 
            className="w-2 h-2 bg-green-400 rounded-full mr-2" 
            style={{ backgroundColor: '#00FF41' }}
            {...heroAnimations.statusDot}
          />
          Available for opportunities
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          {...heroAnimations.title}
        >
          Hi, I'm{" "}
          <motion.span 
            className="text-foreground"
            {...heroAnimations.name}
          >
            Aaditya
          </motion.span>
          <br />
          <motion.span 
            className="text-muted-foreground"
            {...heroAnimations.role}
          >
            Cybersecurity
          </motion.span>{" "}
          <motion.span 
            className="inline-block relative text-highlight"
            {...heroAnimations.titleWord}
          >
            <span className="invisible">{titles.reduce((a, b) => a.length > b.length ? a : b)}</span>
            <motion.span 
              className="absolute inset-0"
              key={currentTitle}
              {...heroAnimations.wordTransition}
            >
              {titles[currentTitle]}
            </motion.span>
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
          {...heroAnimations.description}
        >
          Security-focused CSIT student with hands-on experience in network defense, Python scripting, and 
          intrusion detection systems. Eager to contribute to cybersecurity teams through internships or 
          entry-level opportunities where I can apply my training and continue growing as a blue team analyst.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          {...heroAnimations.buttons}
        >
          <motion.div {...heroAnimations.buttonHover}>
            <Button size="lg" className="bg-highlight text-highlight-foreground hover:bg-highlight/90" asChild>
              <a href="mailto:aaditya12raj@gmail.com">
                <Calendar className="h-5 w-5 mr-2" />
                Get in Touch
              </a>
            </Button>
          </motion.div>
          <motion.div {...heroAnimations.buttonHover}>
            <Button variant="outline" size="lg" onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;