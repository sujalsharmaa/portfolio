import Hero from '@/components/sections/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';
import Projects from '@/components/sections/Projects';
import OpenSource from '@/components/sections/OpenSource';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <OpenSource />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
