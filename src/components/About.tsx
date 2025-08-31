import { Card, CardContent } from "@/components/ui/card";
import { SiPython, SiLinux, SiDocker, SiGithub } from "react-icons/si";
import { Shield, Network, Code, Lock, Brain } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Ethical hacking, threat management, network defense, and endpoint security"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Cisco and Juniper networking, intrusion detection, and system administration"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Python, Golang, Rust, and JavaScript for security tools and automation"
    },
    {
      icon: Lock,
      title: "Security Tools",
      description: "GPG encryption, password management, and custom security applications"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in cybersecurity, network defense, and building secure applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/20 group-hover:rotate-12 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-highlight" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto group hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/20 group-hover:rotate-12 transition-all duration-300">
                <Brain className="h-6 w-6 text-highlight" />
              </div>
              <h3 className="font-semibold mb-2">Continuous Learning Journey</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I embrace the mindset of a perpetual learner in the rapidly evolving field of cybersecurity. 
                Every project is an opportunity to explore new security concepts, implement innovative defenses, and push 
                the boundaries of what's possible with modern security tools and technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;