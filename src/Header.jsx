// src/components/Header.jsx
import React from 'react';
import logo from './assets/logo.jpeg'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-12 h-12"/>
        <nav>
          <a href="#about" className="mr-4">Accueil</a>
          <a href="#projects" className="mr-4">A propos</a>
          <a href="#contact" className="mr-4">Portfolio</a>
          <a href="#contact" className="mr-4">Service</a>
          <a href="#contact"  className="mr-4">Experiences</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
