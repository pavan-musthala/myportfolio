import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, LineChart, Code, Database, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: LineChart,
    title: 'Data Analysis & Visualization',
    skills: ['MySQL', 'PowerBI', 'Advanced Excel', 'Statistical Analysis', 'Data Visualization'],
  },
  {
    icon: Code,
    title: 'Programming & Libraries',
    skills: ['Python', 'SQL', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: ['Data Wrangling', 'Data Cleaning', 'Data Modeling', 'ETL Processes', 'Database Management'],
  },
  {
    icon: Users,
    title: 'Professional Skills',
    skills: ['Cross-functional Team Collaboration', 'Technical Communication', 'Business Domain Analysis', 'Project Management', 'Problem Solving'],
  },
  {
    icon: Terminal,
    title: 'Development Tools',
    skills: ['Visual Studio Code', 'Jupyter Notebook', 'Git Version Control'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          Skills & Technologies
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm
                       border border-purple-500/10 hover:border-purple-500/30
                       transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                    <category.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-200 to-blue-200 
                               bg-clip-text text-transparent">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/5 backdrop-blur-sm 
                               border border-purple-500/10 hover:bg-purple-500/10 
                               hover:border-purple-500/20 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;