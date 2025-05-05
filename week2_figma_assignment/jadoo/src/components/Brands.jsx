import React from 'react'

import axon from '../assets/Brands/axon.png'
import jetstar from '../assets/Brands/jetstar.png'
import xpedia from '../assets/Brands/xpedia.png'
import qantas from '../assets/Brands/qantas.png'
import alita from '../assets/Brands/alitalia.png'

const Brands = () => {
  const logos = [axon, jetstar, xpedia, qantas, alita]

  return (
    <div className="brands flex flex-wrap justify-center mt-2 items-center gap-20 max-w-screen-xl  mx-auto py-6">
      {logos.map((logo, index) => (
        <div key={index} className="h-30 w-36 flex items-center justify-center">
          <img
            src={logo}
            alt={`Brand ${index + 1}`}
            className="h-30 object-contain hover:shadow-md transition duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  )
}

export default Brands
