import React from "react";
import plus from "../assets/plus.png"
import antena from "../assets/antena.png";
import tilltedPlane from "../assets/cplane.png";
import mike from "../assets/mike.png";
import setting from "../assets/setting.png";

const Category = () => {
  return (
    <div className="flex flex-col items-center mt-30 justify-center relative">
      <h2 className="text-xl font-semibold text-[#5E6282]">CATEGORY</h2>
      <h1 className="main-head mt-3 text-[#181E4B] text-5xl">
        We Offer Best Services
      </h1>
      <img className="absolute  top-0 right-8 w-50" src={plus} alt="plus" />

      <div className="cards flex gap-20 mt-15 items-center justify-center">
        {/* Card 1 */}
    <div className="flex flex-col items-center justify-center transition-all shadow w-[12%] h-80 gap-y-3 rounded-2xl">
          <img src={antena} alt="Antena" className="w-30  m-3" />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[#181E4B] font-semibold p-2">Calculated Weather</h1>
            <p className="m-3">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center transition-all shadow w-[12%] gap-y-3 h-80 rounded-2xl">
          <img src={tilltedPlane} alt="Plane" className="w-40 p-3" />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[#181E4B] font-semibold p-2">Best Flights</h1>
            <p className="m-3">Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center transition-all shadow w-[12%] gap-y-3 h-80 rounded-2xl">
          <img src={mike} alt="Mike" className="w-30 p-3" />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[#181E4B] font-semibold p-2">Local Events</h1>
            <p className="m-3">Barton vanity itself do in it. Preferred to men it engrossed listening.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center transition-all shadow w-[12%] gap-y-3 h-80 rounded-2xl">
          <img src={setting} alt="Setting" className="w-30 p-3" />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[#181E4B] font-semibold p-2">Customization</h1>
            <p className="m-3">We deliver outsourced aviation services for military customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
