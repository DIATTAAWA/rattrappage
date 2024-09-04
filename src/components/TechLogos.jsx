// src/components/TechLogos.js
import React from 'react';

const logos = [
  { src: '/src/assets/HTML LOGO.jpeg', alt: 'HTML' },
  { src: '/src/assets/nodjs.jpeg', alt: 'nodjs.jpeg' },
  { src: '/src/assets/CSS.jpeg', alt: 'css' },
  { src: '/src/assets/REACT LOGO.jpeg', alt: 'react' },
  { src: '/src/assets/JAVA.jpeg', alt: 'java' },
  { src: '/src/assets/AWS.jpeg', alt: 'aws' },
  { src: '/src/assets/python.jpeg', alt: 'python' },
];

const TechLogos = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 h-24 flex items-center justify-center">
              <img src={logo.src} alt={logo.alt} className="w-16 h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechLogos;
