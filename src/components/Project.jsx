import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 ">Portfolio</h2>
        
       {/* Barre grise avec border-radius et texte aligné à droite */}
       <div className="bg-gray-200 p-4 rounded-r-lg flex justify-end items-center mb-6">
          <span className="text-lg font-medium text-blue-500 mr-4">Application Mobile</span>
          <span className="text-lg font-medium mr-4">Site Web</span>
          <span className="text-lg font-medium">Modélisation</span>
        </div>

        <h3 className='mx-10'>projet</h3>
        <div className="flex justify-between mb-6">
        


          {/* Premier div pour les catégories alignées à droite */}
          <div className="p-4 rounded-r-lg flex flex-col items-end w-1/2">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum eveni
    et iusto blanditiis dolor, itaque unde doloremque autem quaerat tempore et modi nihil
    pariatur id natus, corporis tempora. Dicta, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus praesentium expedita numquam voluptatum impedit quaerat, quam, assumenda odio explicabo ullam 
    tempora debitis delectus nulla neque omnis libero! Nostrum, earum?</p>
  
  <button className='bg-sky-600 w-96 h-12 rounded-lg mt-4 mr-32'>Voir plus</button>
</div>

          {/* Deuxième div pour autre contenu ou vide */}
          <div className=" p-4 rounded-l-lg w-1/2">
            <img className='ml-32' src="/src/assets/mobile.jpeg" alt="mobile" />
          </div>
        </div>
      </div>
      


    </section>
  );
};

export default Projects;
