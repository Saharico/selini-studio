import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DirectorHero from "@/components/DirectorHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sahar Machluf Ziv — Director",
  description:
    "Sahar Machluf Ziv, director and founder of Selíni — working across live action, CGI and AI-driven filmmaking, from concept to final frame.",
};

export default function DirectorPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <DirectorHero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
