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
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          Skills & Technologies
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-colors
                 shadow-[0_0_15px_rgba(37,117,252,0.05)] hover:shadow-[0_0_20px_rgba(37,117,252,0.1)]"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-purple-400 mr-2" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="px-3 py-1 bg-gray-900/50 text-blue-300 rounded-full text-sm 
                     border border-gray-800 hover:border-blue-500/50 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;