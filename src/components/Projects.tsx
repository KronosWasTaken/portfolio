import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Lock, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Xylem",
      description: "Statically-typed, block-structured programming language with functions and type checking. Built in Rust with a focus on security and performance.",
      technologies: ["Rust", "Programming Language", "Type System", "Compiler"],
      demoLink: null,
      githubLink: "https://github.com/KronosWasTaken/Xylem",
      icon: Code,
      featured: true
    },
    {
      title: "GPG-Lite",
      description: "A simple, modular, and educational GPG-like encryption tool in Python supporting AES, Argon2, and RSA hybrid encryption for secure communications.",
      technologies: ["Python", "Cryptography", "AES", "Argon2", "RSA", "Security"],
      demoLink: null,
      githubLink: "https://github.com/KronosWasTaken/GPG-Lite",
      icon: Lock,
      featured: true
    },
    {
      title: "Intrusion Detector",
      description: "Go-based client with Python server for real-time threat detection and network monitoring, providing comprehensive security analysis.",
      technologies: ["Go", "Python", "Network Security", "Threat Detection", "Real-time Monitoring"],
      demoLink: null,
      githubLink: "https://github.com/KronosWasTaken/Intrusion_Detector",
      icon: Shield,
      featured: false
    },
    {
      title: "Pass-CLI",
      description: "Secure CLI password manager using Python, SQLite3, Argon2, and Fernet encryption for safe credential storage and management.",
      technologies: ["Python", "CLI", "SQLite3", "Argon2", "Fernet", "Password Management"],
      demoLink: null,
      githubLink: "https://github.com/KronosWasTaken/pass-cli",
      icon: Lock,
      featured: false
    },
    {
      title: "Derivative Calculator",
      description: "A Rust/Tauri derivative calculator supporting polynomials, trig functions, exponentials, and implicit multiplication.",
      technologies: ["Rust", "Tauri", "Mathematics", "Calculator", "Desktop App"],
      demoLink: null,
      githubLink: "https://github.com/KronosWasTaken/Derivative_Calculator",
      icon: Code,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative cybersecurity tools and programming language projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-highlight/10 rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-highlight" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-highlight transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="mt-1 bg-highlight/15 text-highlight border border-highlight/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3 pt-4">
                  {project.demoLink && (
                    <Button variant="default" size="sm" asChild className="bg-highlight text-highlight-foreground hover:bg-highlight/90">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/KronosWasTaken" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;