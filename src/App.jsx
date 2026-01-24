/*src/App.jsx*/

import React from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor'; // Import it

function App() {
  return (
    <div className="main-container bg-white min-h-screen relative cursor-none">
      <CustomCursor />
      
      <Preloader />
      <Hero />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;

