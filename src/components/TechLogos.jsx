// src/components/TechLogos.js
import React from 'react';

const logos = [
  { src: '/path/to/nodejs-logo.png', alt: 'Node.js Logo' },
  { src: '/path/to/python-logo.png', alt: 'Python Logo' },
  { src: '/path/to/javascript-logo.png', alt: 'JavaScript Logo' },
  { src: '/path/to/css-logo.png', alt: 'CSS Logo' },
  { src: '/path/to/react-logo.png', alt: 'React Logo' },
  { src: '/path/to/java-logo.png', alt: 'Java Logo' },
  { src: '/path/to/aws-logo.png', alt: 'AWS Logo' },
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
