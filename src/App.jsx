import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Hackathons from "./sections/Hackathons";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Basic SEO / Title update (In a real app, use React Helmet)
  useEffect(() => {
    document.title = "Saad Patkar | Frontend Developer";
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.main
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-full overflow-hidden text-[var(--text-primary)]"
        >
          <div className="bg-noise"></div>
          <ScrollProgress />
          <ParticlesBackground />
          <Navbar />

          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Hackathons />
          <Contact />

          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default App;
