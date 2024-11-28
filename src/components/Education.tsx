import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      school: "NIT WARANGAL",
      degree: "Bachelor of Technology in Biotechnology",
      year: "2019-2023",
      description: "During my tenure at NIT Warangal, I gained a comprehensive foundation in biotechnology with a focus on integrating biological sciences with technology. The program emphasized critical thinking, problem-solving, and advanced technical skills, equipping me with a strong understanding of both theoretical and practical aspects of biotechnology.",
    },
    {
      school: "Sri Chaitanya Jr Kalasala",
      degree: "Intermediate Education",
      year: "2017-2019",
      description: "At Sri Chaitanya Jr Kalasala, I focused on core subjects essential for engineering and scientific studies. I prepared extensively for the Joint Entrance Examination (JEE), which enhanced my understanding of complex concepts in mathematics, physics, and chemistry. My dedication to academics is reflected in my board examination score of 981/1000, showcasing my strong grasp of the subjects and my commitment to academic excellence.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap size={40} className="text-purple-500" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 
                       transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                       hover:shadow-purple-500/10 hover:border-purple-500/20"
            >
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {edu.school}
                </h3>
                <span className="text-gray-400 font-medium mt-2 sm:mt-0">{edu.year}</span>
              </div>
              
              <div className="text-gray-300 mb-4 font-medium">{edu.degree}</div>
              <p className="text-gray-400 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;