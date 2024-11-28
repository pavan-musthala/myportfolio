import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Open to Opportunities
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
            I am actively looking for new opportunities where I can leverage my data analysis and development skills. 
            If you think I can be helpful to you or your team, feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a
            href="mailto:pavanmusthala@gmail.com"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white 
                     transition-all duration-300 border border-white/10 hover:border-white/20
                     hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-sai-musthala/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white 
                     transition-all duration-300 border border-white/10 hover:border-white/20
                     hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://github.com/pavan-musthala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white 
                     transition-all duration-300 border border-white/10 hover:border-white/20
                     hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>

        <div className="text-center text-gray-500 text-xs sm:text-sm">
          <p> {new Date().getFullYear()} Pavan Sai Musthala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
