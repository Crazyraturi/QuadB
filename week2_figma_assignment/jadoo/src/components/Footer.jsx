import React from 'react';
import playstore from '../assets/playstore.png';

const Footer = () => {
  return (
    <footer className="bg-white text-[#5E6282] mt-20 px-4">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          
          {/* Brand */}
          <div className="flex-shrink-0">
            <h2 className="text-4xl text-[#181E4B] font-bold">Jadoo.</h2>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-[#181E4B]">Company</h2>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Mobile</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-[#181E4B]">Contact</h2>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="hover:underline">Help / FAQ</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Affiliates</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-[#181E4B]">More</h2>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="hover:underline">Airline Fees</a></li>
                <li><a href="#" className="hover:underline">Airline</a></li>
                <li><a href="#" className="hover:underline">Low Fare Tips</a></li>
              </ul>
            </div>
          </div>

          {/* Playstore Image */}
          <div className="flex justify-center md:justify-end">
            <img src={playstore} alt="playstore" className="w-[200px] sm:w-[250px] md:w-[300px]" />
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Footer bottom text */}
        <div className="text-center text-sm text-gray-500">
          © 2025 <a href="#" className="hover:underline">Jadoo™</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
