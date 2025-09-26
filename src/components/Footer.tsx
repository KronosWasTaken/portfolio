import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Aaditya Raj</h3>
            <p className="text-muted-foreground">Cybersecurity Professional</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/KronosWasTaken" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/aaditya-raj-390113324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-foreground p-2 h-auto"
                >
                  <Mail className="h-5 w-5" />
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; 2025 Aaditya Raj. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;