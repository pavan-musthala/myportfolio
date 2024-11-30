import React, { memo, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  image: string;
  links: {
    live: string;
    github: string;
  };
}

const ProjectCard = memo(({ title, description, tools, image, links }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // This ensures the callback only fires once
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`group relative rounded-xl bg-gray-900/50 overflow-hidden border border-gray-800 
                 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl 
                 hover:shadow-purple-500/10 hover:border-purple-500/20 
                 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="relative w-full h-48 sm:h-64 overflow-hidden">
        {/* Show skeleton loader before image loads */}
        <div className={`absolute inset-0 bg-gray-800 animate-pulse transition-opacity duration-300
                      ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
        
        {inView && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-center transition-all duration-500 
                     group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>
      
      <div className="relative flex-1 p-4 sm:p-6 bg-gray-900/90 backdrop-blur-sm">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-blue-500 
                     bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 line-clamp-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-800/80 text-gray-300 
                       backdrop-blur-sm border border-gray-700/50 shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 sm:gap-4 mt-auto">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                       transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              aria-label="View Live Demo"
            >
              <ExternalLink size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
            </a>
          )}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-xl bg-white/5 text-white hover:scale-110 transition-all duration-300 
                     hover:shadow-lg hover:shadow-white/25 hover:bg-white/10 backdrop-blur-sm 
                     border border-white/10 hover:border-white/20"
            aria-label="View Source Code"
          >
            <Github size={18} strokeWidth={2} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const projects = [
  {
    title: "Fitness WebApp, (FitFreak)",
    description: "Designed and deployed a fitness-focused web application offering workout plans, nutrition tracking, diet plans, and progress monitoring. " +
      "Leveraged Cursor AI to generate the application's code, streamlining the development process. " +
      "Gained hands-on experience with AI-powered development tools, application structure design, and deployment. " +
      "Deployed a fully functional prototype using Vercel, enabling seamless user interaction with core features.",
    tools: ['Python', 'AI/ML', 'React', 'Cursor AI', 'Vercel'],
    image: "/FitFreak.jpg",
    links: {
      live: "https://fitfreak-liard.vercel.app/",
      github: "https://github.com/pavan-musthala/fitfreak"
    }
  },
  {
    title: "Zomato Restaurants Analysis",
    description: "This project is an interactive data analysis dashboard built using Streamlit, designed to explore and visualize Zomato restaurant data effectively. Features include interactive data exploration, geographical analysis, price and rating insights, cuisine distribution analysis, and online ordering trends. The dashboard provides valuable insights into restaurant ratings, price distributions, popular cuisines, location patterns, and consumer behavior, making it a powerful tool for stakeholders in the restaurant industry to make informed decisions.",
    tools: ['Python', 'Pandas', 'Matplotlib'],
    image: "/zomato.jpg",
    links: {
      live: "https://zomato-analysis.streamlit.app/",
      github: "https://github.com/pavan-musthala/zomato-analysis"
    }
  },
  {
    title: "Olympics Analysis Dashboard",
    description: "An interactive web application that provides a comprehensive analysis of Olympic Games history from 1896 to 2016. This data visualization project, built with Streamlit, transforms historical Olympic data into meaningful insights through interactive visualizations. Key features include medal tally tracking, gender participation analysis, country-wise performance metrics, athlete demographic trends, and sport-specific insights, making it a valuable resource for sports analysts, researchers, and enthusiasts.",
    tools: ['Python', 'Streamlit', 'Pandas', 'Seaborn', 'Plotly'],
    image: "/olympics.jpg",
    links: {
      live: "https://olympics-dashboard.streamlit.app/",
      github: "https://github.com/pavan-musthala/olympics-dashboard"
    }
  },
  {
    title: "Diabetes Risk Predictor",
    description: "The Diabetes Risk Predictor is an interactive web application that leverages machine learning to assess an individual's risk of developing diabetes based on various health metrics. Using a Support Vector Machine (SVM) Classifier and the Pima Indians Diabetes Database, the application predicts diabetes risk based on 8 health indicators. Features include real-time risk prediction, confidence scoring, interactive dashboard with visual comparisons, and in-depth analysis of key health metrics. The project demonstrates practical applications of machine learning in healthcare while providing users with valuable health insights.",
    tools: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Plotly'],
    image: "/diabetes.png",
    links: {
      live: "https://diabetes-risk-predictor.streamlit.app/",
      github: "https://github.com/pavan-musthala/diabetes-risk-predictor"
    }
  },
  {
    title: "Calorie Tracker",
    description: "The Exercise Calorie Predictor is an interactive web application that predicts the number of calories burned during exercise based on various physical and exercise parameters. Using an XGBoost regression model, it provides real-time predictions based on inputs such as gender, age, height, weight, exercise duration, heart rate, and body temperature. The application helps users understand the impact of their exercise and make informed decisions for optimizing their fitness routines. Additionally, the app provides personalized feedback on exercise intensity and gives tips to maximize calorie burn.",
    tools: ['Python', 'Streamlit', 'XGBoost', 'Scikit-learn', 'Plotly'],
    image: "/calories.png",
    links: {
      live: "https://calorie-trackerr.streamlit.app/",
      github: "https://github.com/pavan-musthala/calorie-tracker"
    }
  },
  {
    title: "Sales Data Analysis Dashboard",
    description: "Developed an interactive Power BI dashboard to analyze sales data, uncover trends, and provide actionable insights. The dashboard offers a comprehensive view of sales performance, product trends, and customer behavior across categories and time periods. By leveraging Power BI's data modeling and visualization tools, it facilitates data-driven decision-making through dynamic, user-friendly visuals. Key insights include identification of top-performing SKUs, analysis of promotional events' impact, highlighting of underperforming categories, and demonstration of price sensitivity's influence on sales volume.",
    tools: ['Power BI', 'DAX', 'Power Query', 'Excel'],
    image: "/sales.jpg",
    links: {
      live: "",
      github: "https://github.com/pavan-musthala/powerbi-dashboard"
    }
  }
];

const Projects = memo(() => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={`py-12 sm:py-20 px-4 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 
                     bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;