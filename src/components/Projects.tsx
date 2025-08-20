import React from 'react';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/yousef/ecommerce-platform",
      featured: true,
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built using modern React patterns and WebSocket technology.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      demoUrl: "https://demo-taskapp.example.com",
      githubUrl: "https://github.com/yousef/task-management",
      featured: true,
      date: "2024"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that provides detailed weather information, forecasts, and beautiful visualizations. Integrates with multiple weather APIs for accurate data.",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      demoUrl: "https://demo-weather.example.com",
      githubUrl: "https://github.com/yousef/weather-dashboard",
      featured: false,
      date: "2023"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance and SEO.",
      technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://yousef-portfolio.example.com",
      githubUrl: "https://github.com/yousef/portfolio",
      featured: false,
      date: "2023"
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with multiple rooms, file sharing, and emoji support. Features end-to-end encryption and modern UI/UX design.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      demoUrl: "https://demo-chat.example.com",
      githubUrl: "https://github.com/yousef/chat-app",
      featured: false,
      date: "2023"
    },
    {
      title: "Blog Platform",
      description: "A content management system for bloggers with markdown support, SEO optimization, and analytics dashboard. Includes admin panel for content management.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Markdown", "Vercel"],
      demoUrl: "https://demo-blog.example.com",
      githubUrl: "https://github.com/yousef/blog-platform",
      featured: false,
      date: "2023"
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
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <ExternalLink size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Github size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yousef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;