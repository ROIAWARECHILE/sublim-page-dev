import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import TechInnovation from "@/components/TechInnovation";
import About from "@/components/About";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <TechInnovation />
      <About />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}
