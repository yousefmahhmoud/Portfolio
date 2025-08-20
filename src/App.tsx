import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Header />
      <ProfessionalSummary />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;