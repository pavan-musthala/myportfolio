import React from 'react';
import Navigation from './components/Navigation';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;