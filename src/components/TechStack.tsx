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
  SiOracle,
  SiBootstrap,
  SiSelenium,
  SiTauri,
  SiCapacitor
} from "react-icons/si";
import { Shield, Lock, Network, Code, Database, Globe, Palette, Cloud, Server, Terminal, Key, TestTube, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import { useMobileAnimations } from "@/animations/hooks/useMobileAnimations";
import { useState } from "react";

const TechStack = () => {
  const { techStack: techStackAnimations } = useMobileAnimations();
  const [activeTab, setActiveTab] = useState(0);
  
  const techCategories = [
    {
      title: "Frontend & UI",
      description: "Modern web development and user interface technologies",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Radix UI", icon: Palette },
        { name: "Framer Motion", icon: Globe },
        { name: "Capacitor", icon: SiCapacitor }
      ]
    },
    {
      title: "Backend & Database",
      description: "Server-side development and data management",
      technologies: [
        { name: "Python", icon: SiPython },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Flask", icon: SiFlask },
        { name: "Golang", icon: SiGoland },
        { name: "Gin", icon: SiGin },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "SQLite", icon: Database },
        { name: "Supabase", icon: SiSupabase },
        { name: "SQLAlchemy", icon: Database },
        { name: "Alembic", icon: Database },
        { name: "GORM", icon: Database }
      ]
    },
    {
      title: "Systems & Security",
      description: "Infrastructure, security, and development tools",
      technologies: [
        { name: "Linux", icon: SiLinux },
        { name: "Docker", icon: SiDocker },
        { name: "Oracle Cloud", icon: SiOracle },
        { name: "Tauri", icon: SiTauri },
        { name: "Rust", icon: SiRust },
        { name: "C#", icon: SiSharp },
        { name: "Cisco", icon: SiCisco },
        { name: "Juniper", icon: SiJunipernetworks },
        { name: "Network Security", icon: Network },
        { name: "Cryptography", icon: Lock },
        { name: "Argon2", icon: Key },
        { name: "Fernet", icon: Shield },
        { name: "Selenium", icon: SiSelenium },
        { name: "Git", icon: SiGithub }
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

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-highlight text-highlight-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-highlight mb-2">
              {techCategories[activeTab].title}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {techCategories[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {techCategories[activeTab].technologies.map((tech, techIndex) => {
              const IconComponent = tech.icon;
              return (
                <motion.div 
                  key={techIndex}
                  className="flex flex-col items-center p-4 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.1 }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="h-8 w-8 mb-3 text-highlight" />
                  </motion.div>
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

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