import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center text-white px-4 bg-transparent"
    >
      <div className="text-center z-10">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 
                     bg-gradient-to-r from-[#8a3cff] to-[#4a9fff] text-transparent bg-clip-text
                     drop-shadow-[0_0_25px_rgba(138,60,255,0.3)]
                     [text-shadow:_0_0_30px_rgb(138_60_255_/_20%)]"
        >
          Pavan Sai Musthala
        </motion.h1>
        
        <motion.h2
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-transparent bg-clip-text"
        >
          Data Enthusiast
        </motion.h2>
        
        <div className="text-xl md:text-2xl mb-8 h-12 text-gray-300">
          <Typewriter
            options={{
              strings: [
                "Transforming data into decisions.",
                "Insights that drive impact.",
                "Decoding numbers, empowering growth.",
                "Your guide through the data maze.",
                "Where data meets strategy.",
                "Turning complexity into clarity.",
                "Unveiling stories hidden in numbers.",
                "Data-driven. Results-focused.",
                "Your compass in the world of analytics.",
                "From raw data to refined insights."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="relative px-8 py-3 rounded-full 
                     bg-gradient-to-r from-[#6a11cb] to-[#2575fc]
                     text-white font-semibold
                     shadow-[0_0_15px_rgba(106,17,203,0.2)]
                     hover:shadow-[0_0_25px_rgba(106,17,203,0.3)]
                     before:absolute before:inset-0 
                     before:bg-gradient-to-r before:from-[#2575fc] before:to-[#6a11cb]
                     before:rounded-full before:opacity-0
                     hover:before:opacity-100
                     before:transition-opacity before:duration-300
                     transition-all duration-300"
        >
          <span className="relative z-10">View My Work</span>
        </motion.button>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;