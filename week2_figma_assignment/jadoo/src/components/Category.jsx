import React from "react";
import plus from "../assets/plus.png";
import antena from "../assets/antena.png";
import tilltedPlane from "../assets/cplane.png";
import mike from "../assets/mike.png";
import setting from "../assets/setting.png";

const Category = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4 sm:px-10 relative">
      <h2 className="text-md sm:text-xl font-semibold text-[#5E6282]">CATEGORY</h2>
      <h1 className="mt-3 main-head text-[#181E4B] text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        We Offer Best Services
      </h1>
      <img className="absolute top-0 right-4 w-20 sm:w-28 md:w-40" src={plus} alt="plus" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg rounded-2xl bg-white">
          <img src={antena} alt="Antena" className="w-16 sm:w-20 mb-4" />
          <h1 className="text-[#181E4B] text-lg sm:text-xl font-semibold">Calculated Weather</h1>
          <p className="mt-2 text-[#5E6282] text-sm sm:text-base">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg rounded-2xl bg-white">
          <img src={tilltedPlane} alt="Plane" className="w-20 sm:w-24 mb-4" />
          <h1 className="text-[#181E4B] text-lg sm:text-xl font-semibold">Best Flights</h1>
          <p className="mt-2 text-[#5E6282] text-sm sm:text-base">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg rounded-2xl bg-white">
          <img src={mike} alt="Mike" className="w-20 sm:w-24 mb-4" />
          <h1 className="text-[#181E4B] text-lg sm:text-xl font-semibold">Local Events</h1>
          <p className="mt-2 text-[#5E6282] text-sm sm:text-base">
            Barton vanity itself do in it. Preferred to men it engrossed listening.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg rounded-2xl bg-white">
          <img src={setting} alt="Setting" className="w-20 sm:w-24 mb-4" />
          <h1 className="text-[#181E4B] text-lg sm:text-xl font-semibold">Customization</h1>
          <p className="mt-2 text-[#5E6282] text-sm sm:text-base">
            We deliver outsourced aviation services for military customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
