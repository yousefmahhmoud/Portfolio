import React from 'react';
<<<<<<< HEAD
import { Code, Lightbulb, Target } from "lucide-react";
=======
import { Code, Lightbulb, Target } from 'lucide-react';
>>>>>>> 254d6fc8b0b9cc0630bb6c929d93b3c9bf5b6d29

const ProfessionalSummary = () => {
  const highlights = [
    {
<<<<<<< HEAD
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
=======
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
>>>>>>> 254d6fc8b0b9cc0630bb6c929d93b3c9bf5b6d29
    }
  ];

  return (
<<<<<<< HEAD
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
=======
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
              Junior Frontend Developer with a strong foundation in React and Next.js, experienced in creating responsive,
              user-focused web applications. Knowledgeable in backend integration with Laravel, RESTful APIs, and
              modern UI frameworks like Tailwind CSS. Fast learner with strong problem-solving skills, eager to grow
              within collaborative teams and contribute to impactful digital products.
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
>>>>>>> 254d6fc8b0b9cc0630bb6c929d93b3c9bf5b6d29
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;