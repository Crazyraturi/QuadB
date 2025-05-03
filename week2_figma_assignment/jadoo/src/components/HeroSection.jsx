import React from "react";
import play from "../assets/play.png";
import girl from "../assets/girl.png";
import plane from "../assets/plane.png";
import decore from "../assets/decorate.png";
import baground from "../assets/baground.png"; 
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      {/* Background image for hero section only */}
      <img
        src={baground}
        alt="background"
        className="absolute top-0 right-0 w-[70%] h-full object-cover z-0"
      />

      {/* Main hero content */}
      <div className="flex gap-x-40 items-center justify-center relative z-10">
        <div className="hero-left relative">
          <h5 className="mt-10 poppins font-bold [color:#DF6951] text-2xl">
            Best Destinations around the world
          </h5>

          {/* Decorative background behind heading */}
          <div className="relative mt-10">
            <img
              src={decore}
              alt="decore"
              className="absolute top-17 left-55 z-0 w-[300px] h-auto"
            />
            <h1 className="main-head relative z-10 [color:#181E4B] text-7xl font-extrabold">
              Travel, enjoy <br /> and live a new <br />
              and full life
            </h1>
          </div>

          <p className="poppins mt-10 [color:#5E6282] font-bold">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
          <p className="[color:#5E6282] font-bold">
            Preferred to sportsmen it engrossed listening.
          </p>
          <p className="[color:#5E6282] font-bold">
            Park gate sell they west hard for the.
          </p>

          <div className="mt-10 gap-10 flex items-center">
            <button className="poppins bg-amber-300 px-6 py-3 font-bold text-white rounded">
              Find Out More
            </button>
            <div className="flex mt-5">
              <img width={"120px"} src={play} alt="play" />
              <h5 className="poppins mt-7 font-bold [color:#5E6282]">
                play Demo
              </h5>
            </div>
          </div>
        </div>

        <div className="hero-right relative flex">
          <img className="w-2xl z-3" src={girl} alt="girl" />
          <img className="absolute" width={"200px"} src={plane} alt="plane1" />
          <img
            className="absolute z-2 top-5 right-2"
            width={"150px"}
            src={plane}
            alt="plane2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
