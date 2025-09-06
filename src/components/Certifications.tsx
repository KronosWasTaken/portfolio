import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  SiOracle,
  SiGoogle,
  SiJunipernetworks,
  SiCisco,
  SiFortinet
} from "react-icons/si";
import { Shield } from "lucide-react";
import { motion } from "motion/react";
import { certificationsAnimations } from "@/animations";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Networking Professional",
      issuer: "Oracle",
      date: "September 2025",
      description: "Professional certification in Oracle Cloud Infrastructure networking services and solutions",
      credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AAD114450C5C2A72ABF108B067E8420E9C80CB8C985ACB75FD8103F137B49A12",
      icon: SiOracle,
      featured: true
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle",
      date: "September 2025",
      description: "Professional certification in Oracle Cloud Infrastructure DevOps practices and solutions",
      credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=682D36DF25A1F92246D19E905BE1A7B607EE5CE04BA24304CE18184580FC1E27",
      icon: SiOracle,
      featured: true
    },
    {
      title: "Google Cybersecurity Professional",
      issuer: "Google",
      date: "August 2025",
      description: "Comprehensive cybersecurity certification covering fundamental security concepts and practices",
      credentialLink: "https://coursera.org/share/a55bf7c9a80544e82a22ae5f3e6228a7",
      icon: SiGoogle,
      featured: true
    },
    {
      title: "Juniper Networks Certified Associate - Junos (JNCIA-Junos)",
      issuer: "Juniper Networks",
      date: "August 2025",
      description: "Certification in Juniper Networks Junos operating system and networking fundamentals",
      credentialLink: "https://linkedin.com/in/aaditya-raj-390113324",
      icon: SiJunipernetworks,
      featured: true
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Comprehensive cybersecurity analyst training and certification program",
      credentialLink: "https://www.credly.com/badges/a3419572-06e9-4379-a275-df0a58e9ba1b",
      icon: SiCisco,
      featured: false
    },
    {
      title: "Blue Team Junior Analyst (BTJA)",
      issuer: "Security Blue Team",
      date: "July 2025",
      description: "Specialized certification in defensive cybersecurity and blue team operations",
      credentialLink: "https://linkedin.com/in/aaditya-raj-390113324",
      icon: Shield,
      featured: false
    },
    {
      title: "Network Technician Career Path",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Network infrastructure and troubleshooting certification program",
      credentialLink: "https://www.credly.com/badges/42093463-8938-4b15-9bc1-5473d495c652",
      icon: SiCisco,
      featured: false
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Specialized training in identifying and managing cyber threats",
      credentialLink: "https://www.credly.com/badges/b93779cf-371d-4bf9-8b93-325028a9a542",
      icon: SiCisco,
      featured: false
    },
    {
      title: "Network Defense",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Network security and defense strategies certification",
      credentialLink: "https://www.credly.com/badges/32a3503f-c359-4600-b433-af5eae2bb7e3",
      icon: SiCisco,
      featured: false
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Endpoint protection and security management certification",
      credentialLink: "https://www.credly.com/badges/166adc4c-afa6-45d3-82c2-fdf92c11c086",
      icon: SiCisco,
      featured: false
    },
    {
      title: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Network device setup and configuration fundamentals",
      credentialLink: "https://www.credly.com/badges/1046b94b-8720-4540-a0f1-7adb1c645b45/linked_in_profile",
      icon: SiCisco,
      featured: false
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "Jan-Feb 2025",
      description: "Advanced Python programming for network automation and security",
      credentialLink: "https://www.credly.com/badges/10c2d2f2-470e-453f-9a63-4719adbd5396/public_url",
      icon: SiCisco,
      featured: false
    },
    {
      title: "Fortinet Certified Associate in Cybersecurity",
      issuer: "Fortinet",
      date: "December 2024",
      description: "Cybersecurity fundamentals and Fortinet security solutions",
      credentialLink: "https://www.credly.com/badges/7ed3bf86-585a-45fe-b9b7-fbf738802cf8/linked_in_profile",
      icon: SiFortinet,
      featured: false
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          {...certificationsAnimations.header}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating my expertise in cybersecurity and networking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                {...certificationsAnimations.card(index)}
                {...certificationsAnimations.cardHover}
              >
                <Card className="group hover:shadow-lg border-border/50 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                         <motion.div 
                           className="flex-shrink-0 mt-1"
                           {...certificationsAnimations.iconHover}
                         >
                           <IconComponent className="h-8 w-8 text-highlight" />
                         </motion.div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg group-hover:text-highlight transition-colors">
                            {cert.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{cert.date}</span>
                          </div>
                          {cert.featured && (
                            <motion.div
                              {...certificationsAnimations.featuredBadge(index)}
                            >
                              <Badge variant="secondary" className="mt-2 bg-highlight/15 text-highlight border border-highlight/30">
                                Featured
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </CardDescription>
                    
                    <motion.div 
                      className="flex items-center space-x-3 pt-2"
                      {...certificationsAnimations.buttonHover}
                    >
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Credential
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-12 text-center"
          {...certificationsAnimations.footer}
        >
          <p className="text-muted-foreground max-w-3xl mx-auto">
            These certifications represent my commitment to continuous learning and professional development 
            in the field of cybersecurity. I'm always seeking new opportunities to expand my knowledge and skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
