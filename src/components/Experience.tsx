import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "PERSIST VENTURES",
      position: "AI Frontend Developer Internship",
      period: "Nov 2024 - Dec 2024",
      description: [
        "Defined and Developed an AI-Powered ESG Dashboard MVP: Translated investor requirements for identifying low-emission investment opportunities into a functional dashboard, visualizing complex global ESG data and CO₂ emissions",
        "Led Client-Centric Feature Development: Collaborated directly with an investor client (Alviridi) to understand specific needs, tailoring dashboard features to highlight top low-emission companies by region and country, ensuring product-market fit",
        "Enhanced User Engagement with Conversational AI: Integrated an AI chatbot to provide real-time, data-driven answers to user queries, improving data accessibility and user decision-making capabilities within the product",
        "Implemented Core Data Management Feature: Designed and developed functionality for direct company data updates via the dashboard, improving data accuracy and enabling efficient data management for product integrity",
        "Delivered Functional MVP: Successfully delivered a prototype leveraging AI, validating the product concept and demonstrating technical feasibility for ESG investment analysis tools",
      ],
    },
    {
      company: "RAAM GROUP",
      position: "Management Trainee",
      period: "Mar 2024 - May 2024",
      description: [
        "Analyzed automotive sales data to develop data-driven strategies for MG Motors",
        "Collaborated with corporate sales team on ground-level operations analysis",
        "Managed data quality assurance and extraction processes for sales reporting",
      ],
    },
    {
      company: "BONATRA HEALTHCARE",
      position: "Data Analyst Intern",
      period: "Oct 2023 - Dec 2023",
      description: [
        "Implemented METABASE migration from Google Sheets, optimizing data accessibility",
        "Generated monthly cohort analysis and revenue reports for strategic decision-making",
        "Enhanced operational efficiency through ERPNEXT task list implementation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase size={40} className="text-purple-500" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 
                       transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                       hover:shadow-purple-500/10 hover:border-purple-500/20"
            >
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-gray-300 mt-1">{exp.position}</div>
                </div>
                <span className="text-gray-400 font-medium mt-2 sm:mt-0">{exp.period}</span>
              </div>
              
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;