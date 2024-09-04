// src/components/AboutMe.jsx
import React from 'react';
import image1 from "../assets/photo.jpg";

const AboutMe = () => {
  return (
    <>



    <div className="bg-gray-100 container mx-auto flex flex-col md:flex-row items-center">
    <div className="bg-gray-100 flex flex-col  p-8 rounded-lg w-full md:w-2/3">

                    <h1 className="text-4xl font-bold">AWA DIATTA</h1>

                    <p className="text-lg text-gray-700 mt-2">Développeuse Web Full Stack</p>

          </div>
          <div className="md:w-1/2 flex justify-center">
          <button className=" text-sky-800 border border-sky-800 rounded-lg px-4 py-2  hover:text-gray-800 transition-colors">
    Contactez-moi
  </button>
</div>

        </div>

    <section id="about" className="p-8 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
            <p className="text-lg mb-4">
              Bonjour ! Je suis AWA DIATTA, une développeuse web passionnée par la création de solutions innovantes
              et élégantes.
              
            </p>
            <button className='bg-sky-600 w-96 h-12 rounded-lg'>telecharger cv</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
  <img
    src={image1}
    alt="AWA DIATTA"
    className="w-36 mt-20 max-w-sm rounded-lg shadow-lg"
  />
</div>

        </div>
      </section></>
  );
};

export default AboutMe;
