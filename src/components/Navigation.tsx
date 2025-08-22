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
           
          </div>

          {/* Navigation Items */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    nav-button relative px-2 py-2 sm:px-3 md:px-4 lg:px-6
                    text-xs sm:text-sm md:text-base lg:text-lg font-medium 
                    transition-all duration-300 ease-in-out transform
                    hover:text-yellow-500 hover:scale-105 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-black
                    rounded-lg overflow-hidden
                    ${
                    activeSection === item.id
                      ? 'text-yellow-500 bg-yellow-500/10 shadow-lg scale-105 border-b-2 border-yellow-500'
                      : 'text-white hover:bg-yellow-500/5 border-b-2 border-transparent'
                  }
                  `}
                >
                  <span className="relative z-10 whitespace-nowrap font-semibold">
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