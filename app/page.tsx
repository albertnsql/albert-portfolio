import Hero from "@/components/hero/Hero";
import Impact from "@/components/impact/Impact";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ArchitectureDiagram from "@/components/architecture/ArchitectureDiagram";
import Technology from "@/components/technology/Technology";
import Experience from "@/components/experience/Experience";
import Education from "@/components/education/Education";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Technology />
      <Impact />
      <FeaturedProjects />
      <ArchitectureDiagram />
      <Experience />
      <Education />
      <About />
      <Contact />
    </>
  );
}
