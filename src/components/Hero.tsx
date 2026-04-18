import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "motion/react";
import { useMobileAnimations } from "@/animations/hooks/useMobileAnimations";

const ParticleBackground = lazy(() => import("./ParticleBackground"));

const typewriterTexts = [
  "> Securing the network...",
  "> Analyzing threats...",
  "> Building secure systems...",
  "> Automating workflows..."
];

const Hero = () => {
  const { hero: heroAnimations, isMobile } = useMobileAnimations();
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typewriterTexts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;
    
    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    } else {
      const nextText = isDeleting 
        ? currentFullText.substring(0, displayText.length - 1)
        : currentFullText.substring(0, displayText.length + 1);
      
      timeout = setTimeout(() => {
        setDisplayText(nextText);
      }, isDeleting ? 30 : 60);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="min-h-dvh flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden contain-layout">
      {/* Elegant background - theme adaptive */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-muted/20"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>
      
      {/* Interactive particle background - disabled on mobile for performance */}
      {!isMobile && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}
      
      {/* Floating shapes - theme adaptive - reduced on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/3 dark:bg-highlight/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/3 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}
      
      <div className="max-w-4xl mx-auto text-center relative z-10 will-change-transform">
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
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          {...heroAnimations.title}
        >
          Hi, I'm{" "}
          <span className="text-highlight">Aaditya</span>
        </motion.h1>

        <motion.div 
          className="h-8 mb-6 sm:mb-8 font-mono text-sm sm:text-base md:text-lg text-highlight/80 flex items-center justify-center min-h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="inline-block">{displayText}</span>
          <span className="inline-block w-2 sm:w-3 h-5 sm:h-6 ml-1 bg-highlight animate-pulse" />
        </motion.div>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
          {...heroAnimations.description}
        >
          Security-focused CSIT student and Cybersecurity Trainee at Programiz. Experienced in network 
          defense, Python scripting, and intrusion detection systems, with a passion for building 
          secure applications and protecting digital infrastructures.
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

      {/* Pure CSS Bouncing Scroll Indicator (Lighthouse Friendly) */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 cursor-pointer transition-opacity z-20"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest mb-2 font-mono text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-highlight to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;