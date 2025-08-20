import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "City, Country",
      period: "2019 - 2023",
      gpa: "3.8/4.0",
      highlights: [
        "Graduated Magna Cum Laude",
        "Dean's List for 6 semesters",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Excellence High School",
      location: "City, Country",
      period: "2015 - 2019",
      gpa: "95%",
      highlights: [
        "Valedictorian",
        "Mathematics and Science Excellence Award",
        "Computer Science Club President"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500">Education</span> Background
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science principles and practical skills
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="flex-shrink-0 p-3 bg-yellow-500 text-black rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-yellow-500 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="text-yellow-500 font-semibold">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">{highlight}</span>
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

export default Education;