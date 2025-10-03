import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Calendar,
  ExternalLink,
  Download,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Resume = () => {
  const experience = [
    {
      company: "Neelgai",
      position: "Cybersecurity Research Intern",
      duration: "Aug 2025 - Present",
      location: "Remote",
      achievements: [
        "Designed and built an MCP server to explore secure integrations with various services.",
        "Researched and implemented defenses against prompt injection, authentication flaws, and insecure agent behaviors.",
        "Developed proof-of-concepts and documented security findings to support blue team use cases."
      ]
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
      ]
    }
  ];

  const education = [
    {
      institution: "Patan Multiple Campus",
      degree: "B.Sc. in Computer Science and Information Technology",
      duration: "2023 - 2027 (Ongoing)",
      details: ""
    },
    {
      institution: "Prasadi Academy",
      degree: "Senior Secondary (+2), NEB – Science",
      duration: "Graduated 2022",
      details: "CGPA: 3.36 / 4.0"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Golang", "Rust", "JavaScript", "TypeScript", "C#"],
    "Web Development": ["React", "Tailwind CSS", "FastAPI", "Flask", "Gin"],
    "Database & Cloud": ["PostgreSQL", "Supabase", "SQLAlchemy", "Oracle Cloud", "Docker"],
    "Cybersecurity": ["Network Defense", "Ethical Hacking", "Cryptography", "Endpoint Security"],
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
    {
      name: "Derivative Calculator",
      description: "A Rust/Tauri derivative calculator supporting polynomials, trig functions, exponentials, and implicit multiplication.",
      link: "https://github.com/KronosWasTaken/Derivative_Calculator",
      technologies: ["Rust", "Tauri", "Mathematics", "Calculator", "Desktop App"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Aaditya Raj</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Security-focused CSIT student with hands-on experience in network defense, Python scripting, and intrusion detection systems
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
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/aaditya-raj-390113324" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Career Objective */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Career Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Security-focused CSIT student with hands-on experience in network defense, Python scripting, and 
                intrusion detection systems. Eager to contribute to a cybersecurity team through an internship or 
                entry-level opportunity where I can apply my training and continue growing as a blue team analyst.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.position}</h3>
                        <p className="text-highlight">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{exp.duration}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    {index < experience.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-highlight">{edu.institution}</p>
                        {edu.details && <p className="text-sm text-muted-foreground">{edu.details}</p>}
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </div>
                    {index < education.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{project.name}</h3>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {index < projects.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;