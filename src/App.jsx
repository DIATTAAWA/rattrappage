import React from 'react';
import Header from './Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './Contact';
import Project from './components/Project';
import TechLogos from './components/TechLogos';


const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <AboutMe />
        <Project/>
        <Projects />
        <TechLogos />
        <Contact />
        
      </main>
      
    </div>
  );
};

export default App;
