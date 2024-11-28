import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" id="home">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Scanline effect */}
      <div className="scanline" />
      
      {/* Animated circuits */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{
              width: '100%',
              top: `${20 + i * 20}%`,
              left: 0,
              transform: 'scaleX(0)',
              transformOrigin: i % 2 === 0 ? 'left' : 'right',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-12">
          {/* Name with cyber effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 
              className="cyber-glitch neon-glow text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              data-text="Pavan Sai Musthala"
            >
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-400 text-transparent bg-clip-text">
                Pavan Sai Musthala
              </span>
            </h1>
          </motion.div>

          {/* Futuristic typewriter container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="cyber-border rounded-lg p-6 backdrop-blur-lg bg-black/30">
              <div className="h-20">
                <Typewriter
                  options={{
                    strings: [
                      "Transforming data into decisions.",
                      "Insights that drive impact.",
                      "Decoding numbers, empowering growth.",
                      "Where data meets strategy.",
                      "Data-driven. Results-focused."
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName: "text-xl sm:text-2xl md:text-3xl text-cyan-300 font-light",
                    cursorClassName: "text-xl sm:text-2xl md:text-3xl text-purple-400",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Cyberpunk-style button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={handleExploreClick}
              className="group relative px-8 py-4 bg-transparent overflow-hidden cyber-border rounded-lg
                       text-lg sm:text-xl text-white font-bold uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                <span>Explore about me</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Animated corner accents */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute w-16 h-16"
          style={{
            top: i < 2 ? '0' : 'auto',
            bottom: i >= 2 ? '0' : 'auto',
            left: i % 2 === 0 ? '0' : 'auto',
            right: i % 2 === 1 ? '0' : 'auto',
            background: `
              linear-gradient(${i < 2 ? '45deg' : '-135deg'},
              transparent 0%,
              transparent 40%,
              rgba(138, 60, 255, 0.4) 50%,
              transparent 60%,
              transparent 100%
            )`
          }}
        />
      ))}
    </section>
  );
};

export default Hero;