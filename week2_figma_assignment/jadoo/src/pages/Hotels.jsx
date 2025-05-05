// HotelsPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Ocean View Resort",
    location: "Goa, India",
    price: "₹4,500/night",
    image: "https://r1imghtlak.mmtcdn.com/215e3c120d2e11f087810a58a9feac02.jpg?&output-quality=75&downsize=243:162&output-format=jpg",
  },
  {
    id: 2,
    name: "Mountain Escape",
    location: "Manali, India",
    price: "₹3,200/night",
    image: "https://r1imghtlak.mmtcdn.com/8b93422052dc11eeb5fa0a58a9feac02.jpg?&output-quality=75&downsize=243:162&output-format=jpg",
  },
  {
    id: 3,
    name: "City Lights Hotel",
    location: "Mumbai, India",
    price: "₹5,000/night",
    image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202305101523462211-59b7a97f-5770-4c87-ad45-77c590cbebf9.jpg?&output-quality=75&downsize=243:162&output-format=jpg",
  },
];

export default function HotelsPage() {

  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className=" main-head text-3xl font-bold mb-6">Hotels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-indigo-600 font-medium mt-2">{hotel.price}</p>
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
}
