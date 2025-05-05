import React from "react";

import girl from "../assets/girl.png";
import plane from "../assets/plane.png";
import decore from "../assets/decorate.png";
import baground from "../assets/baground.png"; 
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <Navbar />

      {/* Background image */}
      <img
        src={baground}
        alt="background"
        className="absolute top-0 right-0 w-[70%] h-full object-cover z-0 hidden md:block"
      />

      {/* Main content */}
      <div className="relative z-10  flex flex-col-reverse lg:flex-row items-center md:mx-30 lg:px-24 gap-y-10 lg:gap-x-20 md:mt-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h5 className="poppins font-bold uppercase text-[#DF6951] text-xl sm:text-2xl mb-4">
            Best Destinations around the world
          </h5>

          {/* Heading with decorative background */}
          <div className=" mb-6">
          
            <h1 className="relative main-head z-10 text-[#181E4B] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              Travel, enjoy <br />
              and live a new <br />
              and full life
            </h1>
          </div>

          <div className="text-[#5E6282] text-base sm:text-lg space-y-2 mb-6">
            <p>Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate
            sell they west hard for the.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 justify-center lg:justify-start">
            <button className="poppins bg-amber-300 px-6 py-3 font-bold text-white rounded">
              Find Out More
            </button>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img className="w-[300px] sm:w-[400px] lg:w-[500px] z-10" src={girl} alt="girl" />
          <img className="absolute top-0 left-10 w-20 sm:w-28" src={plane} alt="plane1" />
          <img className="absolute top-5 right-5 w-16 sm:w-24 z-0" src={plane} alt="plane2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
