import Header from "@/components/Header";
import { motion } from "motion/react";
import { useMobileAnimations } from "@/animations/hooks/useMobileAnimations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  ExternalLink,
  Download,
  ChevronDown,
  GraduationCap
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ResumeProjectCard = ({ project, index, animations }: { project: any, index: number, animations: any }) => {
  return (
    <motion.div
      key={index}
      {...animations.item}
      className="group h-full"
    >
      <Card className="h-full border-border/50 hover:border-highlight/30 transition-all duration-300 flex flex-col overflow-hidden bg-background shadow-xs">
        
        <CardHeader className="pb-2 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-lg group-hover:text-highlight transition-colors flex items-center">
              {project.name}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                  <ExternalLink className="h-3 w-3 text-muted-foreground hover:text-highlight transition-colors" />
                </a>
              )}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col relative z-10">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.technologies.map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="text-[10px] border-border/40 bg-background/50">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Resume = () => {
  const { resume: resumeAnimations } = useMobileAnimations();
  const experience = [
    {
      company: "Programiz",
      position: "Cybersecurity Trainee",
      duration: "April 2026 - Present",
      location: "Nepal",
      achievements: [
        "Managing granular access control levels across Production, Staging, and Dev environments to ensure security compliance.",
        "Optimizing DevOps workflows and resource transparency via cloud API integrations and DevContainer orchestration.",
        "Hardening system security through rigorous Access Management, Software Inventory Management (SBOM), and the implementation of organizational Compliance frameworks."
      ],
      technologies: ["Cybersecurity", "DevSecOps", "DevOps", "Network Security", "Cloud Security", "FinOps"],
      logo: "/programiz.jpeg",
      logoBg: "bg-white"
    },
    {
      company: "Neelgai",
      position: "Cybersecurity Research Intern",
      duration: "Aug 2025 - Jan 2025",
      location: "Remote",
      achievements: [
        "Designed and built an MCP server to explore secure integrations with various services.",
        "Researched and implemented defenses against prompt injection, authentication flaws, and insecure agent behaviors.",
        "Developed proof-of-concepts and documented security findings to support blue team use cases."
      ],
      technologies: ["MCP Server", "Security Research", "Blue Team", "Documentation"],
      logo: "/neelgai.png",
      logoBg: "bg-white"
    },
    {
      company: "Innovative Communication System Pvt. Ltd.",
      position: "Network and System Administrator Intern",
      duration: "Feb 2025 - Aug 2025",
      location: "Nepal",
      achievements: [
        "Monitored and maintained data center hardware, network, and IT systems.",
        "Performed preventive maintenance and daily infrastructure checks.",
        "Escalated and restored critical faults while maintaining reports and logs.",
        "Worked with Cisco Networking and Juniper Networks products."
      ],
      technologies: ["Cisco", "Juniper", "Network Administration", "System Maintenance", "Infrastructure"],
      logo: "/ics-logo.png",
      logoBg: "bg-white"
    }
  ];

  const education = [
    {
      institution: "Patan Multiple Campus",
      degree: "Bachelor of Science in Computer Science and Information Technology",
      duration: "2023 - Present",
      location: "Lalitpur, Nepal",
      details: ""
    },
    {
      institution: "Prasadi Academy",
      degree: "Senior Secondary (+2), NEB – Science",
      duration: "Graduated 2022",
      location: "Nepal",
      details: "CGPA: 3.36 / 4.0"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Golang", "Rust", "Zig", "JavaScript", "TypeScript", "C#"],
    "Web Development": ["React", "Tailwind CSS", "Electron", "FastAPI", "Flask", "Gin"],
    "Database & Cloud": ["PostgreSQL", "Supabase", "SQLAlchemy", "Oracle Cloud", "Docker", "FinOps", "DevOps"],
    "Cybersecurity": ["Network Defense", "Ethical Hacking", "Cryptography", "Endpoint Security", "Cloud Security", "Network Security", "DevSecOps"],
    "Systems & Tools": ["Linux", "Git", "Tauri", "Selenium"]
  };

  const certifications = [
    { name: "Oracle Cloud Infrastructure 2025 Certified Networking Professional", issuer: "Oracle", date: "September 2025" },
    { name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional", issuer: "Oracle", date: "September 2025" },
    { name: "Google Cybersecurity Professional", issuer: "Google", date: "August 2025" },
    { name: "Juniper Networks Certified Associate - Junos (JNCIA-Junos)", issuer: "Juniper Networks", date: "August 2025" },
    { name: "Junior Cybersecurity Analyst Career Path", issuer: "Cisco Networking Academy", date: "June 2025" },
    { name: "Blue Team Junior Analyst (BTJA)", issuer: "Security Blue Team", date: "July 2025" },
    { name: "Network Technician Career Path", issuer: "Cisco Networking Academy", date: "June 2025" },
    { name: "Cyber Threat Management", issuer: "Cisco Networking Academy", date: "June 2025" },
    { name: "Network Defense", issuer: "Cisco Networking Academy", date: "June 2025" },
    { name: "Endpoint Security", issuer: "Cisco Networking Academy", date: "June 2025" },
    { name: "Networking Devices and Initial Configuration", issuer: "Cisco Networking Academy", date: "June 2025" },
    { name: "Python Essentials 2", issuer: "Cisco Networking Academy", date: "Jan-Feb 2025" },
    { name: "Fortinet Certified Associate in Cybersecurity", issuer: "Fortinet", date: "December 2024" }
  ];

  const projects = [
    {
      name: "Eon",
      description: "Eon is a small, statically-typed, expression-oriented language that compiles to bytecode and runs on a custom VM.",
      link: "https://github.com/KronosWasTaken/Eon",
      technologies: ["Rust", "Programming Language", "Bytecode VM", "Compiler", "Type System"]
    },
    {
      name: "Advent of Code",
      description: "Advent of Code solutions starting from 2015.",
      link: "https://github.com/KronosWasTaken/Advent_Of_Code",
      technologies: ["Algorithms", "Problem Solving", "Advent of Code", "Multi-year", "Zig"]
    },
    {
      name: "AniRyu",
      description: "A modern, full-stack anime and manga tracking application with beautiful statistics, bulk management features, and seamless AniList import functionality. Features responsive design, dark theme, and comprehensive progress tracking.",
      link: "https://github.com/KronosWasTaken/AniRyu",
      technologies: ["React", "TypeScript", "Go", "Gin", "GORM", "SQLite", "Tailwind CSS", "shadcn/ui", "Framer Motion"]
    },
    {
      name: "VFlix",
      description: "A sophisticated, full-stack streaming platform built with cutting-edge technologies. Features real-time data synchronization, user authentication, and comprehensive movie/TV show database integration.",
      link: "https://github.com/KronosWasTaken/VFlix",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "TMDb API", "Vercel"]
    },
    {
      name: "Xylem",
      description: "Statically-typed, block-structured programming language with functions and type checking. Built in Rust.",
      link: "https://github.com/KronosWasTaken/Xylem",
      technologies: ["Rust", "Programming Language", "Type System", "Compiler"]
    },
    {
      name: "GPG-Lite",
      description: "A simple, modular, and educational GPG-like encryption tool in Python supporting AES, Argon2, and RSA hybrid encryption.",
      link: "https://github.com/KronosWasTaken/GPG-Lite",
      technologies: ["Python", "Cryptography", "AES", "Argon2", "RSA", "Security"]
    },
    {
      name: "Onyx",
      description: "A modern, fast, and beautiful note-taking application built with Electron and React. Features rich text editing, customizable themes, local data storage with encryption, and offline functionality.",
      link: "https://github.com/KronosWasTaken/Onyx",
      technologies: ["React", "TypeScript", "Electron", "Tailwind CSS", "Better-SQLite3", "SQLCipher", "TipTap", "Zustand", "Vite", "pnpm"]
    },
    {
      name: "Intrusion Detector",
      description: "Go-based client with Python server for real-time threat detection and network monitoring.",
      link: "https://github.com/KronosWasTaken/Intrusion Detector",
      technologies: ["Go", "Python", "Network Security", "Threat Detection", "Real-time Monitoring"]
    },
    {
      name: "Pass-CLI",
      description: "Secure CLI password manager using Python, SQLite3, Argon2, and Fernet encryption for safe credential storage and management.",
      link: "https://github.com/KronosWasTaken/pass-cli",
      technologies: ["Python", "CLI", "SQLite3", "Argon2", "Fernet", "Password Management"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
            <motion.div 
              className="text-center mb-12" 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={resumeAnimations.header}
            >
            <h1 className="text-4xl font-bold mb-4">Aaditya Raj</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Security-focused CSIT student and Cybersecurity Trainee at Programiz with hands-on experience in
              network defense, Python scripting, and intrusion detection systems
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground p-0 h-auto font-normal"
                    >
                      <span>aaditya12raj@gmail.com</span>
                      <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    <DropdownMenuItem asChild>
                      <a
                        href="mailto:aaditya12raj@gmail.com"
                        className="flex items-center space-x-2 w-full"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Gmail</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="mailto:aaditya12raj@tuta.io"
                        className="flex items-center space-x-2 w-full"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Tutanota</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="mailto:InfiniteEcl1pse@protonmail.com"
                        className="flex items-center space-x-2 w-full"
                      >
                        <Mail className="h-4 w-4" />
                        <span>ProtonMail</span>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+977 9840251279</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lalitpur, Nepal</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/KronosWasTaken" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/aaditya-raj-390113324" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="h-4 w-4 mr-2" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Career Objective */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={resumeAnimations.item.variants}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Career Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Security-focused CSIT student and Cybersecurity Trainee at Programiz with hands-on experience
                  in network defense, Python scripting, and intrusion detection systems. Eager to contribute
                  to a cybersecurity team where I can apply my training and continue growing as a blue team analyst.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.section 
            className="mb-12" 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-20px" }}
            variants={resumeAnimations.section}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Separator className="flex-1 mr-4" />
              Education
              <Separator className="flex-1 ml-4" />
            </h2>
            <div className="space-y-10 pl-2">
              {education.map((edu, index) => (
                <motion.div key={index} {...resumeAnimations.item}>
                  <div className="relative pl-8 border-l border-border hover:border-highlight transition-colors duration-300 group">
                    {/* The Dot on the line */}
                    <div className="absolute left-[-5px] top-[10px] w-2.5 h-2.5 rounded-full bg-border group-hover:bg-highlight transition-all duration-300 border-2 border-background" />
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-highlight transition-colors leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground font-medium mt-1 uppercase tracking-tight text-xs opacity-80">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="md:text-right shrink-0">
                        <div className="inline-flex items-center text-highlight font-bold text-sm">
                           <Calendar className="h-3 w-3 mr-1.5" />
                           {edu.duration}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1 md:justify-end opacity-70">
                           <MapPin className="h-3 w-3 mr-1" />
                           {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    {edu.details && (
                      <div className="mt-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-highlight/90 bg-highlight/10 px-2.5 py-1 rounded-sm">
                          {edu.details}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section 
            className="mb-12" 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-20px" }}
            variants={resumeAnimations.section}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Separator className="flex-1 mr-4" />
              Work Experience
              <Separator className="flex-1 ml-4" />
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div key={index} {...resumeAnimations.item}>
                  <Card className="group border-border/50 hover:border-highlight/30 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`w-10 h-10 mt-1 ${exp.logoBg || 'bg-white'} rounded-lg flex items-center justify-center overflow-hidden shrink-0 border border-border/50 shadow-sm`}>
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1.5" />
                          </div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-highlight transition-colors">{exp.position}</CardTitle>
                            <p className="text-muted-foreground font-medium">{exp.company}</p>
                            <div className="flex items-center gap-4 mt-1">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-muted-foreground leading-relaxed">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="pl-1">{achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px] h-5 bg-highlight/5 text-highlight hover:bg-highlight/10 border-highlight/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section 
            className="mb-12" 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-20px" }}
            variants={resumeAnimations.section}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Separator className="flex-1 mr-4" />
              Selected Projects
              <Separator className="flex-1 ml-4" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ResumeProjectCard 
                  key={index} 
                  project={project} 
                  index={index} 
                  animations={resumeAnimations} 
                />
              ))}
            </div>
          </motion.section>

          {/* Certifications & Training */}
          <motion.section 
            className="mb-12" 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              initial: { opacity: 0, y: 15 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.4,
                  staggerChildren: 0.03
                } 
              }
            }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Separator className="flex-1 mr-4" />
              Certifications & Training
              <Separator className="flex-1 ml-4" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} {...resumeAnimations.item}>
                  <div className="flex justify-between items-center p-3 border rounded-lg hover:border-highlight/40 transition-colors">
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <p className="text-xs text-muted-foreground shrink-0 ml-2">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills */}
          <motion.section 
            className="mb-12" 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              initial: { opacity: 0, y: 15 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.4,
                  staggerChildren: 0.02 // Very fast stagger for skills
                } 
              }
            }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Separator className="flex-1 mr-4" />
              Technical Skills
              <Separator className="flex-1 ml-4" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div key={category} {...resumeAnimations.item}>
                  <h3 className="font-semibold mb-3 text-highlight uppercase tracking-wider text-xs">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-muted/50 hover:bg-muted text-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;