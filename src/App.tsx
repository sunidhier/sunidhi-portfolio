import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import SoftSkills from './components/sections/SoftSkills';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B14] text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Experience />
        <Skills />
        <SoftSkills />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
