import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Calendar, Building } from "lucide-react";
import { motion } from "motion/react";
import { useMobileAnimations } from "@/animations/hooks/useMobileAnimations";
import neelgaiLogo from "@/assets/logos/neelgai.webp?width=80&format=webp";
import icsLogo from "@/assets/logos/ics-logo.webp?width=80&format=webp";
import programizLogo from "@/assets/logos/programiz.jpeg?width=80&format=webp";

const Experience = () => {
  const { experience: experienceAnimations } = useMobileAnimations();
  const experiences = [
    {
      title: "Cybersecurity Trainee",
      company: "Programiz",
      period: "April 2026 - Present",
      achievements: [
        "Managing granular access control levels across Production, Staging, and Dev environments to ensure security compliance.",
        "Optimizing DevOps workflows and resource transparency via cloud API integrations and DevContainer orchestration.",
        "Hardening system security through rigorous Access Management, Software Inventory Management (SBOM), and the implementation of organizational Compliance frameworks."
      ],
      technologies: ["Cybersecurity", "DevSecOps", "DevOps", "Network Security", "Cloud Security", "FinOps"],
      icon: Shield,
      logo: programizLogo,
      logoBg: "bg-white",
      featured: true
    },
    {
      title: "Cybersecurity Research Intern",
      company: "Neelgai",
      period: "Aug 2025 - Jan 2025",
      achievements: [
        "Designed and built an MCP server to explore secure integrations with various services.",
        "Researched and implemented defenses against prompt injection, authentication flaws, and insecure agent behaviors.",
        "Developed proof-of-concepts and documented security findings to support blue team use cases."
      ],
      technologies: ["MCP Server", "Security Research", "Blue Team", "Documentation"],
      icon: Shield,
      logo: neelgaiLogo,
      logoBg: "bg-white",
      featured: false
    },
    {
      title: "Network and System Administrator Intern",
      company: "Innovative Communication System Pvt. Ltd.",
      period: "Feb 2025 - Aug 2025",
      achievements: [
        "Monitored and maintained data center hardware, network, and IT systems.",
        "Performed preventive maintenance and daily infrastructure checks.",
        "Escalated and restored critical faults while maintaining reports and logs.",
        "Worked with Cisco Networking and Juniper Networks products."
      ],
      technologies: ["Cisco", "Juniper", "Network Administration", "System Maintenance", "Infrastructure"],
      icon: Network,
      logo: icsLogo,
      logoBg: "bg-white",
      featured: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          {...experienceAnimations.header}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in cybersecurity and network administration through internships and research
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-highlight/5 via-highlight/40 to-highlight/5 hidden md:block"
            {...experienceAnimations.timelineLine}
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-[-6px] md:left-1/2 md:ml-[-6px] top-8 w-3 h-3 rounded-full bg-highlight shadow-[0_0_15px_hsl(var(--highlight))] z-10 hidden md:block"
                  {...experienceAnimations.timelineDot(index)}
                />

                {/* Card Side */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    {...experienceAnimations.experienceCard(index)}
                  >
                    <Card className="group hover:shadow-xl border-border/50 overflow-hidden transition-all duration-300 hover:border-highlight/30">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <motion.div 
                              className={`w-10 h-10 mt-1 ${experience.logoBg || 'bg-white'} rounded-lg flex items-center justify-center overflow-hidden shrink-0 shadow-sm border border-border/50`}
                              {...experienceAnimations.iconHover}
                            >
                              {experience.logo ? (
                                <img 
                                  src={experience.logo} 
                                  alt={`${experience.company} logo`} 
                                  loading="lazy"
                                  decoding="async"
                                  width="40"
                                  height="40"
                                  className="w-full h-full object-contain p-1.5 group-hover:scale-110 transition-transform duration-300"
                                />
                              ) : (
                                <experience.icon className="h-5 w-5 text-highlight" />
                              )}
                            </motion.div>
                            <div>
                              <CardTitle className="text-xl group-hover:text-highlight transition-colors">
                                {experience.title}
                              </CardTitle>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:space-x-2 mt-1">
                                <div className="flex items-center space-x-1">
                                  <Building className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">{experience.company}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4 text-muted-foreground sm:ml-2" />
                                  <span className="text-sm text-muted-foreground">{experience.period}</span>
                                </div>
                              </div>
                              {experience.featured && (
                                <motion.div
                                  {...experienceAnimations.featuredBadge(index)}
                                >
                                  <Badge variant="secondary" className="mt-2 bg-highlight/15 text-highlight border border-highlight/30">
                                    Current Role
                                  </Badge>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          <ul className="list-disc list-inside space-y-1">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="pl-1">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              {...experienceAnimations.techBadge(techIndex, index)}
                            >
                              <Badge variant="outline" className="text-[10px] py-0 h-5 border-border/50">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Empty Side (for Desktop Timeline) */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Removed Career Objective Section */}
      </div>
    </section>
  );
};

export default Experience;
