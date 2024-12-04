import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Hero />
      <Projects />
      <Skills />
      <Footer />  
    </div>
  );
}

export default App;
