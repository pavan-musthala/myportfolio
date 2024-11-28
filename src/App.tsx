import React, { memo } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Sections with minimal gradient overlays */}
      <div className="relative z-10">
        <div className="relative bg-black">
          <Navigation />
          <Hero />
        </div>

        <div className="relative bg-black">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-blue-900/10" />
          <AboutMe />
          <Skills />
        </div>

        <div className="relative bg-black">
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/10 via-transparent to-purple-900/10" />
          <Projects />
          <Experience />
        </div>

        <div className="relative bg-black">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-blue-900/10" />
          <Education />
        </div>

        <Footer />
      </div>

      {/* Particles overlay */}
      <ParticlesBackground />
    </main>
  );
};

export default memo(App);