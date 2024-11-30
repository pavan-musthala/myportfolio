import React, { memo, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';

// Lazy load non-critical components
const AboutMe = React.lazy(() => import('./components/AboutMe'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Footer = React.lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Sections with minimal gradient overlays */}
      <div className="relative z-10">
        <div className="relative bg-black">
          <Navigation />
          <Hero />
        </div>

        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </div>

      {/* Particles overlay */}
      <ParticlesBackground />
    </main>
  );
};

export default memo(App);