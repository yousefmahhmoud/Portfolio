import React from 'react';
import { Code, Lightbulb, Target } from "lucide-react";

const ProfessionalSummary = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Specialized in React.js, TypeScript, and modern web technologies to build responsive and performant user interfaces."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solving",
      description: "Passionate about solving complex problems with innovative solutions and clean, maintainable code."
    },
    {
      icon: <Target size={24} />,
      title: "Continuous Learning",
      description: "Always staying up-to-date with the latest technologies and best practices in web development."
    }
  ];

  return (
    <section id="summary" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional <span className="text-yellow-500">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A dedicated frontend developer with a passion for creating exceptional user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-yellow-500/30"
            >
              <div className="text-yellow-500 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;