import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-black" id="about">
      <div className="absolute inset-0 bg-transparent opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-full overflow-hidden rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
              <img
                src="/profile.jpg"
                alt="Pavan Sai Musthala"
                className="w-full h-full object-cover transform transition-all duration-500 
                         grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 p-6 rounded-xl backdrop-blur-sm bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors h-full flex flex-col"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Hi, I'm Pavan Sai Musthala</h3>
              <p className="text-gray-400 leading-relaxed">
                As an NIT Warangal B.Tech graduate, I leverage a robust analytical foundation in SQL, Python, and Power BI to effectively bridge the gap between raw data and impactful business strategy. My hands-on experience encompasses the end-to-end development of insightful dashboards designed for specific user needs – from optimizing hotel revenue by tracking critical KPIs and visualizing utilization trends, to enabling ESG investment analysis through AI-powered tools, and facilitating sports data exploration for analysts via interactive platforms.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I thrive on translating intricate technical findings into clear, understandable insights for diverse stakeholders, including investor clients, ensuring alignment and facilitating data-driven decision-making. Having contributed to projects involving detailed requirements gathering, MVP development, and ensuring data integrity for critical reporting, I am deeply passionate about understanding and addressing user needs. I am now actively seeking an entry-level Product Management role where I can apply my analytical rigor, problem-solving capabilities, and collaborative spirit to contribute meaningfully to building successful, user-centric products.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Github, href: 'https://github.com/pavan-musthala', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/pavanmusthala/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:musthalapavan@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center 
                           hover:bg-gradient-to-r hover:from-purple-900 hover:to-blue-900 
                           border border-purple-900/20 hover:border-purple-700/50 
                           transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;