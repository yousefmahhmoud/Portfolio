import React from 'react';
<<<<<<< HEAD
import { ExternalLink, Github, Star, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Huna-alriyadh",
      description: "Huna Alriyadh is a comprehensive platform dedicated to showcasing the rich cultural heritage, events, and attractions of Riyadh. It serves as a one-stop destination for residents and tourists to explore the city's vibrant culture, historical sites, and upcoming events.",
      technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://ruhhere.com/",
      featured: true,
      date: "2026"
    },
    {
      title: "Na capital solutions",
      description: "NA Capital Solutions is a leading financial services firm specializing in investment management, financial planning, and advisory services. Our mission is to help clients achieve their financial goals through personalized strategies and expert guidance.",
      technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://nacapitalsolutions.com/",
      featured: true,
      date: "2026"
    },
=======
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    
>>>>>>> 254d6fc8b0b9cc0630bb6c929d93b3c9bf5b6d29
    {
      title: "SKIP-EG",
      description: "SKIP is a modern,responsive e-commerce website showcasing premium casual wear with a focus on comfort, style, and quality. The platform features an elegant design that reflects the brand's philosophy of \"thinking globally while wearing locally.\"",
      technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://skipeg.vercel.app/",
      githubUrl: "https://github.com/yousefmahhmoud/skipeg_.git",
      featured: true,
      date: "2023"
<<<<<<< HEAD
    },
    {
      title: "Hass",
      description: "Hass is a web app that shows a saudian graduation project which shows the news by 3 ways (text, audio, and video) with a focus on accessibility and user experience.",
      technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://grad-khaki.vercel.app/",
      featured: false,
      date: "2026"
    },
    {
=======
    }
    ,{
>>>>>>> 254d6fc8b0b9cc0630bb6c929d93b3c9bf5b6d29
      title: "LMS - Graduation project",
      description: "Developed a full-featured web-based learning management system supporting course creation, user roles, authentication, and progress tracking.",
      technologies: ["JQuery", "PHP", "SQL", "Laravel", "Blade code"],
      demoUrl: "",
      githubUrl: "https://github.com/yousefmahhmoud/Sharks-LMS-Graduation-project-.git",
      featured: false,
      date: "2023"
    },
    {
      title: "Situation Awareness Map",
      description: "Created a real-time mapping application for tracking aircraft, previewing geolocated news, and integrating SDR tower data.",
      technologies: ["React", "TypeScript", "Leaflet library"],
      demoUrl: "",
      githubUrl: "https://github.com/yousefmahmoud/leaflet-map.git",
      featured: true,
      date: "2024"
    },
    {
      title: "Air Coordinates Table",
      description: "Implemented algorithms to calculate the nearest SDR station and determine optimal antenna angle for maximum signal quality from aircraft.",
      technologies: ["React", "Chart.js", "Tailwind CSS"],
      demoUrl: "",
      githubUrl: "",
      featured: false,
      date: "2024"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance and SEO.",
      technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://yousefmahmoud.vercel.app",
      githubUrl: "https://github.com/yousefmahhmoud/Portfolio.git",
      featured: false,
      date: "2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2">
                  <div className="flex items-center space-x-2 text-black font-semibold">
                    <Star size={16} />
                    <span>Featured Project</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-sm font-medium border border-yellow-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <ExternalLink size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 group ${
                        project.demoUrl ? 'flex-1' : 'w-full'
                      }`}
                    >
                      <Github size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        
      </div>
      
=======
        <div className="text-center mt-12">
          <a
            href="https://github.com/yousefmahhmoud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
>>>>>>> 254d6fc8b0b9cc0630bb6c929d93b3c9bf5b6d29
    </section>
  );
};

export default Projects;