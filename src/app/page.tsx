import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsCounter from "@/components/StatsCounter";
import Services from "@/components/Services";
import TechInnovation from "@/components/TechInnovation";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <StatsCounter />
      <Services />
      <TechInnovation />
      <Projects />
      <About />
      <Clients />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}
