import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cybersecurity Professional",
      issuer: "Google",
      date: "August 2025",
      description: "Comprehensive cybersecurity certification covering fundamental security concepts and practices",
      credentialLink: "https://coursera.org/share/a55bf7c9a80544e82a22ae5f3e6228a7",
      icon: "🔒",
      featured: true
    },
    {
      title: "Juniper Networks Certified Associate - Junos (JNCIA-Junos)",
      issuer: "Juniper Networks",
      date: "August 2025",
      description: "Certification in Juniper Networks Junos operating system and networking fundamentals",
      credentialLink: "https://linkedin.com/in/aaditya-raj-390113324",
      icon: "🌐",
      featured: true
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Comprehensive cybersecurity analyst training and certification program",
      credentialLink: "https://www.credly.com/badges/a3419572-06e9-4379-a275-df0a58e9ba1b",
      icon: "🛡️",
      featured: false
    },
    {
      title: "Blue Team Junior Analyst (BTJA)",
      issuer: "Security Blue Team",
      date: "July 2025",
      description: "Specialized certification in defensive cybersecurity and blue team operations",
      credentialLink: "https://linkedin.com/in/aaditya-raj-390113324",
      icon: "🔵",
      featured: false
    },
    {
      title: "Network Technician Career Path",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Network infrastructure and troubleshooting certification program",
      credentialLink: "https://www.credly.com/badges/42093463-8938-4b15-9bc1-5473d495c652",
      icon: "🔧",
      featured: false
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Specialized training in identifying and managing cyber threats",
      credentialLink: "https://www.credly.com/badges/b93779cf-371d-4bf9-8b93-325028a9a542",
      icon: "⚠️",
      featured: false
    },
    {
      title: "Network Defense",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Network security and defense strategies certification",
      credentialLink: "https://www.credly.com/badges/32a3503f-c359-4600-b433-af5eae2bb7e3",
      icon: "🛡️",
      featured: false
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Endpoint protection and security management certification",
      credentialLink: "https://www.credly.com/badges/166adc4c-afa6-45d3-82c2-fdf92c11c086",
      icon: "💻",
      featured: false
    },
    {
      title: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Network device setup and configuration fundamentals",
      credentialLink: "https://www.credly.com/badges/1046b94b-8720-4540-a0f1-7adb1c645b45/linked_in_profile",
      icon: "⚙️",
      featured: false
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "Jan-Feb 2025",
      description: "Advanced Python programming for network automation and security",
      credentialLink: "https://www.credly.com/badges/10c2d2f2-470e-453f-9a63-4719adbd5396/public_url",
      icon: "🐍",
      featured: false
    },
    {
      title: "Fortinet Certified Associate in Cybersecurity",
      issuer: "Fortinet",
      date: "December 2024",
      description: "Cybersecurity fundamentals and Fortinet security solutions",
      credentialLink: "https://www.credly.com/badges/7ed3bf86-585a-45fe-b9b7-fbf738802cf8/linked_in_profile",
      icon: "🔐",
      featured: false
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating my expertise in cybersecurity and networking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{cert.icon}</div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-highlight transition-colors">
                        {cert.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                      </div>
                      {cert.featured && (
                        <Badge variant="secondary" className="mt-2 bg-highlight/15 text-highlight border border-highlight/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </CardDescription>
                
                <div className="flex items-center space-x-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            These certifications represent my commitment to continuous learning and professional development 
            in the field of cybersecurity. I'm always seeking new opportunities to expand my knowledge and skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
