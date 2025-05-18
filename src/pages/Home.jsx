import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          <a href="#hero" className="text-white hover:text-indigo-400">Home</a>
          <a href="#projects" className="text-white hover:text-indigo-400">Projects</a>
          <a href="#skills" className="text-white hover:text-indigo-400">Skills</a>
          <a href="#about" className="text-white hover:text-indigo-400">About</a>
          <a href="#contact" className="text-white hover:text-indigo-400">Contact</a>
        </div>
      </nav>

      {/* Sections in desired order */}
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default Home;