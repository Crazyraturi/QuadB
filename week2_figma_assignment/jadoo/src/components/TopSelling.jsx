import React from "react";
import { ArrowUpRight } from "lucide-react";

const TopSelling = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <h2 className="text-md sm:text-xl font-semibold text-[#5E6282]">Top Selling</h2>
      <h1 className="mt-3 main-head text-[#181E4B] text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Top Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://www.thetrainline.com/cms/media/11558/italy-rome-colosseum.jpg?mode=crop&width=1080&height=1080&quality=70"
            alt="Rome"
          />
          <div className="p-5">
            <div className="flex justify-between text-[#5E6282] font-semibold mb-2">
              <span>Rome, Italy</span>
              <span>$5.42k</span>
            </div>
            <div className="flex items-center gap-2 text-[#5E6282] text-sm">
              <ArrowUpRight size={16} />
              <p>10 Days Trip</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=1080&height=1080&quality=70"
            alt="London"
          />
          <div className="p-5">
            <div className="flex justify-between text-[#5E6282] font-semibold mb-2">
              <span>London, UK</span>
              <span>$4.2k</span>
            </div>
            <div className="flex items-center gap-2 text-[#5E6282] text-sm">
              <ArrowUpRight size={16} />
              <p>12 Days Trip</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://image.tallink.com/image/upload/c_fill,f_auto,fl_lossy,q_auto:best,h_2448,w_2448/travel/destinations/finland/helsinki/helsinki-cathedral-blossom.jpg"
            alt="Full Europe"
          />
          <div className="p-5">
            <div className="flex justify-between text-[#5E6282] font-semibold mb-2">
              <span>Full Europe</span>
              <span>$15k</span>
            </div>
            <div className="flex items-center gap-2 text-[#5E6282] text-sm">
              <ArrowUpRight size={16} />
              <p>28 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
