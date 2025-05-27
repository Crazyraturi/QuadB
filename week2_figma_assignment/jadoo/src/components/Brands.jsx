import React from 'react';

import axon from '../assets/Brands/axon.png';
import jetstar from '../assets/Brands/jetstar.png';
import xpedia from '../assets/Brands/xpedia.png';
import qantas from '../assets/Brands/qantas.png';
import alita from '../assets/Brands/alitalia.png';

const Brands = () => {
  const logos = [axon, jetstar, xpedia, qantas, alita];

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="w-24 sm:w-28 md:w-32 object-contain transition duration-300 ease-in-out hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
