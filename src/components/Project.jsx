// src/components/Projects.jsx
import React from 'react';

const Project = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Portfolio */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
            <p className="text-gray-700 mb-4">
              Découvrez mes projets récents et mes réalisations dans différents domaines.
            </p>
            <a href="#portfolio" className="text-blue-500 hover:underline">Voir plus</a>
          </div>
          
          {/* Application mobile */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Application Mobile</h3>
            <p className="text-gray-700 mb-4">
              Explorez les applications mobiles que j'ai développées avec des fonctionnalités innovantes.
            </p>
            <a href="#mobile-apps" className="text-blue-500 hover:underline">Voir plus</a>
          </div>
          
          {/* Site web */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Site Web</h3>
            <p className="text-gray-700 mb-4">
              Jetez un œil aux sites web que j'ai conçus, chacun avec une interface utilisateur unique.
            </p>
            <a href="#web-sites" className="text-blue-500 hover:underline">Voir plus</a>
          </div>
          
          {/* Modélisation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Modélisation</h3>
            <p className="text-gray-700 mb-4">
              Découvrez mes travaux de modélisation 3D et de conception graphique.
            </p>
            <a href="#modeling" className="text-blue-500 hover:underline">Voir plus</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
