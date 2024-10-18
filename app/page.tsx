import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";
import Nav from "@/components/ui/Nav";

export default function Home() {
  return (
    <main>
      <div>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
