// src/components/AboutMe.jsx
import React from 'react';
import image1 from "../assets/photo.jpg";

const AboutMe = () => {
  return (
    <>
    <div className="bg-gray-100 flex flex-col md:flex-row  py-12 px-8 space-y-8 md:space-y-0 md:space-x-8">
      <div className="bg-gray-100 flex flex-col  p-8 rounded-lg w-full md:w-1/3">
        <h1 className="text-4xl font-bold">AWA DIATTA</h1>
        <p className="text-lg text-gray-700 mt-2">Développeur Web Full Stack</p>
        <div className="mt-4 justify-end mx-96">
          <button className="bg-transparent text-sky-800 border border-sky-800 rounded-lg px-4 py-2 hover:bg-white hover:text-gray-800 transition-colors">
            Contactez-moi
          </button>
        </div>
      </div>
    </div>
    <section id="about" className="p-8 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
            <p className="text-lg mb-4">
              Bonjour ! Je suis AWA DIATTA, un développeur web passionné par la création de solutions innovantes
              et élégantes.
              
            </p>
            <button className='bg-sky-600 w-96 h-12 rounded-lg'>telecharger cv</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={image1}
              alt="AWA DIATTA"
              className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section></>
  );
};

export default AboutMe;
