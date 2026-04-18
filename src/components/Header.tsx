import { Button } from "@/components/ui/button";
import { Mail, FileText, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import NowPlaying from "./NowPlaying";
import { useLocation, Link } from "react-router";

const Header = () => {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Kaushan Script, cursive' }}>
            {isResumePage ? (
              <Link to="/" className="hover:text-highlight transition-colors">
                Aaditya
              </Link>
            ) : (
              "Aaditya"
            )}
          </div>
          
          {!isResumePage && (
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#/#about" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                About
              </a>
              <a href="/#/#experience" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Experience
              </a>
              <a href="/#/#tech-stack" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Tech Stack
              </a>
              <a href="/#/#projects" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Projects
              </a>
              <a href="/#/#certifications" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Certifications
              </a>
              <a href="/#/#contact" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Contact
              </a>
            </div>
          )}

          <div className="flex items-center space-x-1 sm:space-x-2">
            <ThemeToggle />
            
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/KronosWasTaken" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/aaditya-raj-390113324" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:aaditya12raj@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <NowPlaying />
              <Button variant="outline" className="border-highlight/30 text-highlight hover:bg-highlight/10 ml-2" asChild>
                <Link to={isResumePage ? "/" : "/resume"}>
                  <FileText className="h-4 w-4 mr-2" />
                  {isResumePage ? "Portfolio" : "Resume"}
                </Link>
              </Button>
              <Button className="bg-highlight text-highlight-foreground hover:bg-highlight/90 ml-2 btn-cv-glow" asChild>
                <a href="/Aaditya_Raj_CV.pdf" download="Aaditya_Raj_CV.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  CV
                </a>
              </Button>
            </div>

            <div className="flex sm:hidden items-center space-x-1">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/KronosWasTaken" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/aaditya-raj-390113324" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:aaditya12raj@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <NowPlaying />
              <Button variant="outline" size="icon" className="border-highlight/30 text-highlight hover:bg-highlight/10 ml-1" asChild>
                <Link to={isResumePage ? "/" : "/resume"}>
                  <FileText className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" className="bg-highlight text-highlight-foreground hover:bg-highlight/90 ml-1" asChild>
                <a href="/Aaditya_Raj_CV.pdf" download="Aaditya_Raj_CV.pdf">
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;