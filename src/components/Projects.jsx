// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Application de Gestion de Budget',
    description: 'Une application web permettant aux utilisateurs de suivre et gérer leur budget. Utilise React pour le frontend et NestJS pour le backend.',
     // Remplacez par le lien de votre projet
    image: '/path/to/project1.jpg', // Remplacez par le chemin vers l'image du projet
  },
  {
    title: 'Portfolio Personnel',
    description: 'Un portfolio personnel pour présenter mes compétences, projets et informations de contact. Développé avec React et Tailwind CSS.',
    
    image: '/path/to/project2.jpg', // Remplacez par le chemin vers l'image du projet
  },
  // Ajoutez d'autres projets ici
];

const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
