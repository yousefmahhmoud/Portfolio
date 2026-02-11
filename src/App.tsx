import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900" itemScope itemType="https://schema.org/Person">
      <Navigation />
      <Header />
      <main>
        <ProfessionalSummary />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;