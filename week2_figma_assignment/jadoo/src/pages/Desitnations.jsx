import React from 'react';
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    name: 'Rome, Italy',
    image:
      'https://www.thetrainline.com/cms/media/11558/italy-rome-colosseum.jpg?mode=crop&width=1080&height=1080&quality=70',
    price: '$5.4k',
    days: '10 Days Trip',
  },
  {
    name: 'London, UK',
    image:
      'https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=1080&height=1080&quality=70',
    price: '$4.2k',
    days: '12 Days Trip',
  },
  {
    name: 'Helsinki, Finland',
    image:
      'https://image.tallink.com/image/upload/c_fill,f_auto,fl_lossy,q_auto:best,h_2448,w_2448/travel/destinations/finland/helsinki/helsinki-cathedral-blossom.jpg',
    price: '$6.8k',
    days: '9 Days Trip',
  },
];

const Destination = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-[#5E6282] text-lg uppercase tracking-wider">Destinations</h2>
        <h1 className=" main-head text-4xl md:text-5xl font-bold text-[#181E4B] mt-2">Explore Top Travel Spots</h1>
        
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img src={dest.image} alt={dest.name} className="h-64 w-full object-cover" />
            <div className="p-5 text-[#5E6282]">
              <div className="flex justify-between font-semibold text-base mb-2">
                <span>{dest.name}</span>
                <span>{dest.price}</span>
              </div>
              <p className="text-sm">{dest.days}</p>
            </div>
          </div>
        ))}
      </div>
      <button
      onClick={() => navigate("/")}
      className="bg-blue-600 mt-10 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Go to Home
    </button>
    </div>
  );
};

export default Destination;
