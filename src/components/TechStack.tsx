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
  SiJunipernetworks,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiFastapi,
  SiFlask,
  SiGin,
  SiBootstrap,
  SiSelenium,
  SiTauri,
  SiCapacitor,
  SiElectron,
  SiZig
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { Shield, Lock, Network, Code, Database, Globe, Palette, Cloud, Server, Terminal, Key, TestTube, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useMobileAnimations } from "@/animations/hooks/useMobileAnimations";
import { useState } from "react";
import LiquidProgress from "./ui/LiquidProgress";

const TechCard = ({ tech, activeTab }: { tech: any, activeTab: number }) => {
  const IconComponent = tech.icon;

  return (
    <div 
      className="group relative flex flex-col items-center p-6 bg-card rounded-xl border overflow-hidden cursor-default transition-colors hover:border-highlight/50"
    >
      <LiquidProgress
        progress={100}
        color="hsl(var(--highlight) / 0.15)"
        secondaryColor="transparent"
      />

      <div className="z-10 flex flex-col items-center">
        <div className="relative mb-4">
          <IconComponent className="h-10 w-10 transition-colors duration-300 text-highlight group-hover:text-primary" />
        </div>

        <span className="text-sm font-bold tracking-tight text-center z-10">{tech.name}</span>
      </div>
    </div>
  );
};

const TechStack = () => {
  const { techStack: techStackAnimations } = useMobileAnimations();
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      title: "Frontend & UI",
      description: "Modern web development and user interface technologies",
      technologies: [
        { name: "React", icon: SiReact, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "JavaScript", icon: SiJavascript, level: 95 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
        { name: "Bootstrap", icon: SiBootstrap, level: 80 },
        { name: "Radix UI", icon: Palette, level: 75 },
        { name: "Framer Motion", icon: Globe, level: 85 },
        { name: "Electron", icon: SiElectron, level: 70 },
        { name: "Capacitor", icon: SiCapacitor, level: 0 }
      ]
    },
    {
      title: "Backend & Database",
      description: "Server-side development and data management",
      technologies: [
        { name: "Python", icon: SiPython, level: 95 },
        { name: "FastAPI", icon: SiFastapi, level: 90 },
        { name: "Flask", icon: SiFlask, level: 85 },
        { name: "Golang", icon: SiGoland, level: 80 },
        { name: "Gin", icon: SiGin, level: 75 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
        { name: "SQLite", icon: Database, level: 90 },
        { name: "Supabase", icon: SiSupabase, level: 85 },
        { name: "SQLAlchemy", icon: Database, level: 85 },
        { name: "Alembic", icon: Database, level: 70 },
        { name: "GORM", icon: Database, level: 75 }
      ]
    },
    {
      title: "Systems & Security",
      description: "Infrastructure, security, and development tools",
      technologies: [
        { name: "Linux", icon: SiLinux, level: 90 },
        { name: "Docker", icon: SiDocker, level: 85 },
        { name: "Oracle Cloud", icon: GrOracle, level: 75 },
        { name: "Tauri", icon: SiTauri, level: 70 },
        { name: "Rust", icon: SiRust, level: 75 },
        { name: "Zig", icon: SiZig, level: 60 },
        { name: "C#", icon: SiSharp, level: 70 },
        { name: "Cisco", icon: SiCisco, level: 80 },
        { name: "Juniper", icon: SiJunipernetworks, level: 75 },
        { name: "Network Security", icon: Network, level: 85 },
        { name: "Cryptography", icon: Lock, level: 80 },
        { name: "Argon2", icon: Key, level: 85 },
        { name: "Fernet", icon: Shield, level: 85 },
        { name: "Selenium", icon: SiSelenium, level: 80 },
        { name: "Git", icon: SiGithub, level: 90 }
      ]
    }
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

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === index
                  ? 'bg-highlight text-highlight-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <motion.div
            key={`header-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-highlight mb-2">
              {techCategories[activeTab].title}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {techCategories[activeTab].description}
            </p>
          </motion.div>

          <motion.div
            key={`grid-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto"
          >
            {techCategories[activeTab].technologies.map((tech) => (
              <TechCard
                key={`${activeTab}-${tech.name}`}
                tech={tech}
                activeTab={activeTab}
              />
            ))}
          </motion.div>
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