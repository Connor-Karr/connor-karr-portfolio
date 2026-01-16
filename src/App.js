import React, { useState, useEffect } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CursorGlow from './components/CursorGlow';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <CursorGlow />
      <ScrollIndicator />
      
      <div className="container">
        <LeftPanel 
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        
        <div className="right-panel">
          <About />
          <Experience />
          <Projects />
          
          <footer className="footer">
            <p>
              Designed in <a href="#" className="inline-link">Figma</a> and built with{' '}
              <a href="https://react.dev" className="inline-link" target="_blank" rel="noopener noreferrer">React</a>.
              Inspired by{' '}
              <a href="https://brittanychiang.com" className="inline-link" target="_blank" rel="noopener noreferrer">
                Brittany Chiang
              </a>.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
