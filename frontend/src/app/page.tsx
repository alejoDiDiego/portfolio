import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ scrollBehavior: "smooth" }} className="relative z-0">
      <div className="bg bg-cover bg-no-repeat bg-center">
        {/* <div className="bg-white bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero />
      </div>
      <About />
      <Education />
      <Tech />
      <Projects />
      <Contact />
    </main>
  );
}
