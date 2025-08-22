import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('header');

  const navItems = [
    
    { id: 'summary', label: 'Professional Summary' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <span className="text-xl lg:text-2xl font-bold text-white transition-all duration-300 hover:text-yellow-500">
              <span className="text-yellow-500">Y</span>ousef
            </span>
          </div>

          {/* Navigation Items - Always Visible */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-2 py-2 sm:px-3 lg:px-4 
                    text-xs sm:text-sm lg:text-base font-medium 
                    transition-all duration-300 ease-in-out
                    hover:text-yellow-500 hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-black
                    rounded-lg
                    ${
                    activeSection === item.id
                      ? 'text-yellow-500 bg-yellow-500/10 shadow-lg transform scale-105'
                      : 'text-white hover:bg-yellow-500/5'
                  }
                    before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 
                    before:bg-yellow-500 before:transition-all before:duration-300 before:transform before:-translate-x-1/2
                    ${activeSection === item.id ? 'before:w-full' : 'hover:before:w-full'}
                  `}
                >
                  <span className="relative z-10 whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;