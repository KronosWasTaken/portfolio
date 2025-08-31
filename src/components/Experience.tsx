import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Calendar, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Research Intern",
      company: "Neelgai",
      period: "Aug 2025 - Present",
      description: "Designed and built an MCP server to explore secure integrations with various services. Researched and implemented defenses against prompt injection, authentication flaws, and insecure agent behaviors. Developed proof-of-concepts and documented security findings to support blue team use cases.",
      technologies: ["MCP Server", "Security Research", "Blue Team", "Documentation"],
      icon: Shield,
      featured: true
    },
    {
      title: "Network and System Administrator Intern",
      company: "Innovative Communication System Pvt. Ltd.",
      period: "Feb 2025 - Aug 2025",
      description: "Monitored and maintained data center hardware, network, and IT systems. Performed preventive maintenance and daily infrastructure checks. Escalated and restored critical faults while maintaining reports and logs. Worked with Cisco Networking and Juniper Networks products.",
      technologies: ["Cisco", "Juniper", "Network Administration", "System Maintenance", "Infrastructure"],
      icon: Network,
      featured: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in cybersecurity and network administration through internships and research
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-highlight/10 rounded-lg flex items-center justify-center">
                      <experience.icon className="h-5 w-5 text-highlight" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-highlight transition-colors">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{experience.company}</span>
                        <Calendar className="h-4 w-4 text-muted-foreground ml-2" />
                        <span className="text-sm text-muted-foreground">{experience.period}</span>
                      </div>
                      {experience.featured && (
                        <Badge variant="secondary" className="mt-2 bg-highlight/15 text-highlight border border-highlight/30">
                          Current Role
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto group hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/20 transition-colors">
                <Shield className="h-6 w-6 text-highlight" />
              </div>
              <h3 className="font-semibold mb-2">Career Objective</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Security-focused CSIT student with hands-on experience in network defense, Python scripting, and 
                intrusion detection systems. Eager to contribute to a cybersecurity team through an internship or 
                entry-level opportunity where I can apply my training and continue growing as a blue team analyst.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
