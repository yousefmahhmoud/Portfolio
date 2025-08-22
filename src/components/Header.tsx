import React from 'react';
import { Download, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
  const scrollToNext = () => {
    const summarySection = document.getElementById('summary');
    if (summarySection) {
      summarySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="header" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="block text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Yousef Mahmoud
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Frontend Developer (React.js)
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and building exceptional digital experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/Yousef-Mahmoud-FlowCV-Resume-20250820.pdf"
              download
              className="group inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-mahmoud-4a624322b"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Animated Scroll Button */}
        <button
          onClick={scrollToNext}
          className="absolute bottom 10 right-8 p-4 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-full text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/20 transition-all duration-300 group animate-pulse hover:animate-bounce"
        >
          <ChevronDown size={24} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping"></div>
        </button>
      </div>
    </section>
  );
};

export default Header;