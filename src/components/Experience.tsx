import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      location: "Remote",
      period: "2025 - Present",
      description: "Developing modern, responsive web applications using React.js, TypeScript, and Tailwind CSS for various clients.",
      achievements: [
        "Built multiple production-ready applications using React and TypeScript",
        "Implemented responsive designs with Tailwind CSS for optimal user experience",
        "Collaborated with clients to deliver projects on time and within budget",
        "Maintained high code quality standards and best practices"
      ]
    },
    {
      title: "Full Stack Web Developer Trainee",
      company: "YAT",
      location: "Cairo, Egypt",
      period: "Sep 2020 - Jan 2021",
      description: "Completed intensive full-stack development training program covering frontend and backend technologies.",
      achievements: [
        "Graduated as Valedictorian with 95% overall grade",
        "Developed full-featured web applications using Laravel, PHP, and jQuery",
        "Worked on team projects using Agile methodologies",
        "Built a Learning Management System as final graduation project"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Work <span className="text-yellow-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl border border-gray-200 hover:border-yellow-500/30"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 rounded-l-xl"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="flex-shrink-0 p-3 bg-yellow-500 text-black rounded-lg">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-yellow-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 lg:text-right">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="ml-16 space-y-3">
                <h4 className="text-lg font-semibold text-black mb-3">Key Achievements:</h4>
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
