import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
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
      <Marquee />
      <Services />
      <TechInnovation />
      <About />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}
