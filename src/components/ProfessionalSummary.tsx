import React from 'react';
import { Code, Lightbulb, Target } from 'lucide-react';

const ProfessionalSummary = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Proficient in modern web technologies and software development practices"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Passionate about creating innovative solutions to complex problems"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Focused on delivering high-quality software that meets business objectives"
    }
  ];

  return (
    <section id="summary" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Professional <span className="text-yellow-500">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a dedicated and results-driven software engineer with a strong foundation in 
              full-stack development. My expertise spans across modern web technologies, with a 
              particular focus on creating scalable, user-centric applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a passion for continuous learning and innovation, I thrive in collaborative 
              environments where I can contribute to meaningful projects that make a real impact. 
              My approach combines technical excellence with creative problem-solving to deliver 
              exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices to ensure 
              long-term project success. My goal is to leverage technology to solve complex challenges 
              and create value for both users and businesses.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 p-3 bg-yellow-500 text-black rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;