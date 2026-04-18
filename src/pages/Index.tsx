import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Experience = lazy(() => import("@/components/Experience"));
const TechStack = lazy(() => import("@/components/TechStack"));
const Projects = lazy(() => import("@/components/Projects"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="h-64 flex items-center justify-center py-10">
    <div className="h-10 w-10 border-4 border-highlight border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Suspense fallback={<SectionLoader />}>
        <Experience />
        <TechStack />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
