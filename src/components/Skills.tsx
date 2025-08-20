import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Cloud,
  Palette,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 70 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Supabase", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Testing", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Figma", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Technical <span className="text-yellow-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-gray-200 hover:border-yellow-500/30"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-yellow-500 text-black rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-black">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-yellow-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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

export default Skills;