import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";
import Nav from "@/components/ui/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <div className="relative bg-black text-white rounded-3xl z-10 px-space-lg py-space-2xl">
          <Skills />
          <Projects />
          <About />
        </div>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
