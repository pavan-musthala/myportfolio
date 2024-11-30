import React, { useCallback, memo, useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, BarChart2, LineChart, TrendingUp, ChevronRight, Code2, Database } from 'lucide-react';

const Particle = memo(({ delay = 0 }: { delay?: number }) => {
  const randomPath = useCallback(() => {
    const start = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
    const end = {
      x: start.x + (Math.random() - 0.5) * 200,
      y: start.y + (Math.random() - 0.5) * 200
    };
    return `M ${start.x} ${start.y} Q ${(start.x + end.x) / 2 + (Math.random() - 0.5) * 100} 
            ${(start.y + end.y) / 2 + (Math.random() - 0.5) * 100} ${end.x} ${end.y}`;
  }, []);

  return (
    <motion.path
      d={randomPath()}
      stroke="url(#particleGradient)"
      strokeWidth="0.5"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 0],
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
});

const ParticleField = memo(() => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none">
    <defs>
      <linearGradient id="particleGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="50%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#A78BFA" />
      </linearGradient>
    </defs>
    {Array.from({ length: 20 }).map((_, i) => (
      <Particle key={i} delay={i * 0.2} />
    ))}
  </svg>
));

const AnimatedChart = memo(() => {
  const controls = useAnimation();
  const [data, setData] = useState(() => 
    Array.from({ length: 50 }, () => Math.random() * 50 + 25)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), Math.random() * 50 + 25];
        controls.start({ pathLength: 1 });
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [controls]);

  const points = data.map((d, i) => `${i * 2},${d}`).join(' ');
  const path = `M ${points}`;

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="absolute right-0 bottom-0 w-96 h-96 opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
        <clipPath id="chartClip">
          <rect x="0" y="0" width="100" height="100" />
        </clipPath>
      </defs>
      <motion.path
        d={path}
        fill="none"
        stroke="url(#chartGradient)"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut" }}
        clipPath="url(#chartClip)"
      />
      <motion.path
        d={`${path} V 100 H 0 Z`}
        fill="url(#chartGradient)"
        opacity="0.1"
        clipPath="url(#chartClip)"
      />
    </motion.svg>
  );
});

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleExploreClick = useCallback(() => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#000000] px-4 sm:px-6" 
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_25%,rgba(0,0,0,1)_100%)]" />
      <ParticleField />
      <AnimatedChart />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Name with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 blur-[120px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight
                         bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 text-transparent 
                         bg-clip-text pb-2 sm:pb-4 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]
                         mx-auto max-w-[90vw] sm:max-w-none leading-tight">
              Pavan Sai Musthala
            </h1>

            {/* Floating Icons */}
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 md:mt-10">
              {[Database, LineChart, Code2, BarChart2, TrendingUp].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <Icon className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-300/90 transition-colors duration-300 group-hover:text-purple-200" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Typewriter Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mx-auto max-w-[95vw] sm:max-w-2xl md:max-w-3xl"
          >
            <div className="relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl">
              <motion.div 
                className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative h-12 sm:h-14 flex items-center justify-center">
                <Typewriter
                  options={{
                    strings: [
                      "Transforming Data into Strategic Insights",
                      "Data-Driven Decision Making",
                      "Analytics • Visualization • Impact",
                      "Unlocking Patterns in Data",
                      "From Raw Data to Business Value"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName: "text-base sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-medium tracking-wide",
                    cursorClassName: "text-base sm:text-lg md:text-xl lg:text-2xl text-purple-300/70",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 sm:mt-8"
          >
            <motion.button
              onClick={handleExploreClick}
              className="group relative inline-flex items-center px-4 py-2 
                       bg-black border border-purple-500/30 rounded-lg overflow-hidden
                       shadow-[0_0_10px_rgba(139,92,246,0.15)]
                       transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10 flex items-center gap-1.5 text-sm font-medium">
                <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  "Lemme see what you got"
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Corner Glows */}
        <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-purple-500/5 to-transparent blur-[100px]" />
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-bl from-blue-500/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tr from-blue-500/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tl from-purple-500/5 to-transparent blur-[100px]" />
      </div>
    </motion.section>
  );
};

export default memo(Hero);