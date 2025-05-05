import React from "react";
import place1 from "../assets/place1.png";
import { ArrowUpRight } from "lucide-react";

const TopSelling = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-xl font-semibold text-[#5E6282]">Top Selling</h2>
      <h1 className="main-head mt-3 text-[#181E4B] text-5xl">
        Top Destinations
      </h1>

    <div className=" flex gap-20 justify-center">
        {/* Cards*/}

        <div class="max-w-sm bg-white  mt-15 shadow-sm w-[25%] rounded-2xl ">
        <img
          class="rounded-t-2xl"
          src="https://www.thetrainline.com/cms/media/11558/italy-rome-colosseum.jpg?mode=crop&width=1080&height=1080&quality=70"
          alt=""
        />

        <div class="p-5 flex flex-col  ">
          <div className="justify-between flex  [color:#5E6282] font-semibold">
            <span>Rome,Italty</span> <span>$5,42k</span>
          </div>
        <div className=" [color:#5E6282] flex gap-3  "><ArrowUpRight />
          <p>10 Days Trip</p></div>
        </div>
      </div>

      <div class="max-w-sm bg-white  mt-15 shadow-sm w-[25%] rounded-2xl">
        <img
          class="rounded-t-2xl"
          src="https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=1080&height=1080&quality=70"
          alt=""
        />

        <div class="p-5 flex flex-col  ">
          <div className="justify-between flex  [color:#5E6282] font-semibold">
            <span className="font-semibold">London, UK</span> <span>$4.2k</span>
          </div>
      <div className=" [color:#5E6282] flex gap-3  "><ArrowUpRight />
          <p className="font-">12 Days Trip</p></div>
        </div>
      </div>

    <div class="max-w-sm bg-white  mt-15 shadow-sm w-[25%] rounded-2xl">
        <img
          class="rounded-t-2xl"
        src="https://image.tallink.com/image/upload/c_fill,f_auto,fl_lossy,q_auto:best,h_2448,w_2448/travel/destinations/finland/helsinki/helsinki-cathedral-blossom.jpg "
          alt=""
        />

        <div class="p-5 flex flex-col  ">
          <div className="justify-between flex  [color:#5E6282] font-semibold">
            <span>Full Europe</span> <span>$15k</span>
          </div>
        <div className=" [color:#5E6282] flex gap-3 "><ArrowUpRight />
          <p>28 Days Trip</p></div>
        </div>
        


      </div>
    </div>

    </div>
  );
};

export default TopSelling;
