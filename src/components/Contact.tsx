import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Contact = () => {
  const emails = [
    { address: "aaditya12raj@gmail.com", provider: "Gmail" },
    { address: "aaditya12raj@tuta.io", provider: "Tutanota" },
    { address: "InfiniteEcl1pse@protonmail.com", provider: "ProtonMail" }
  ];

  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmailIndex((prev) => (prev + 1) % emails.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [emails.length]);

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative cybersecurity projects? 
            Let's discuss how we can build something secure and amazing together.
          </p>
        </div>

        <Card className="border-border/50 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you're looking for a cybersecurity analyst, network security specialist, or just want to chat about 
                    security technology, I'm always open to new opportunities and conversations.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-highlight" />
                    <span className="text-muted-foreground">Lalitpur, Nepal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-highlight" />
                    <div className="relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.a
                          key={currentEmailIndex}
                          href={`mailto:${emails[currentEmailIndex].address}`}
                          className="text-muted-foreground hover:text-foreground transition-colors block"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <span className="font-medium">{emails[currentEmailIndex].address}</span>
                          <span className="text-sm text-muted-foreground ml-2">({emails[currentEmailIndex].provider})</span>
                        </motion.a>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <Mail className="h-5 w-5 mr-3" />
                          Send Email
                          <ChevronDown className="h-3 w-3 ml-auto" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-full">
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
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://linkedin.com/in/aaditya-raj-390113324" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 mr-3" />
                        LinkedIn Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://github.com/KronosWasTaken" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-3" />
                        GitHub Profile
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="pt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="lg" className="w-full bg-highlight text-highlight-foreground hover:bg-highlight/90">
                        Get in Touch
                        <ChevronDown className="h-4 w-4 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-full">
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
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;