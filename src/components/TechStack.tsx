import { 
  SiPython,
  SiGoland,
  SiRust,
  SiJavascript,
  SiTypescript,
  SiSharp,
  SiLinux,
  SiDocker,
  SiGithub,
  SiCisco,
  SiJunipernetworks
} from "react-icons/si";
import { Shield, Lock, Network, Code } from "lucide-react";
import { motion } from "motion/react";
import { useMobileAnimations } from "@/animations/hooks/useMobileAnimations";

const TechStack = () => {
  const { techStack: techStackAnimations } = useMobileAnimations();
  const technologies = [
    { name: "Python", icon: SiPython },
    { name: "Golang", icon: SiGoland },
    { name: "Rust", icon: SiRust },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "C#", icon: SiSharp },
    { name: "Linux", icon: SiLinux },
    { name: "Docker", icon: SiDocker },
    { name: "Cisco", icon: SiCisco },
    { name: "Juniper", icon: SiJunipernetworks },
    { name: "Network Security", icon: Network },
    { name: "Cryptography", icon: Lock }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          {...techStackAnimations.header}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build secure applications and cybersecurity solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div 
                key={index}
                className="flex flex-col items-center p-6 bg-card rounded-lg border hover:shadow-lg"
                {...techStackAnimations.techItem(index)}
              >
                <motion.div {...techStackAnimations.iconHover}>
                  <IconComponent className="h-8 w-8 mb-3 text-highlight" />
                </motion.div>
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-12 text-center"
          {...techStackAnimations.footer}
        >
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Constantly exploring and adapting to new technologies in the rapidly evolving landscape of 
            cybersecurity, network defense, and secure software development. Always eager to learn and implement cutting-edge security solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;