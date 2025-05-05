import React from "react";
import { useNavigate } from "react-router-dom";

const flights = [
  {
    id: 1,
    airline: "IndiGo",
    from: "Delhi",
    to: "Mumbai",
    departure: "08:00 AM",
    arrival: "10:00 AM",
    duration: "2h",
    price: "₹3,200",
  },
  {
    id: 2,
    airline: "Air India",
    from: "Bangalore",
    to: "Kolkata",
    departure: "01:30 PM",
    arrival: "04:45 PM",
    duration: "3h 15m",
    price: "₹4,500",
  },
  {
    id: 3,
    airline: "SpiceJet",
    from: "Hyderabad",
    to: "Chennai",
    departure: "06:00 PM",
    arrival: "07:30 PM",
    duration: "1h 30m",
    price: "₹2,800",
  },
];

export default function FlightsPage() {
    const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="main-head text-3xl font-bold mb-6">Available Flights</h1>
      <div className="space-y-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{flight.airline}</h2>
              <span className="text-indigo-600 font-medium">{flight.price}</span>
            </div>
            <div className="text-gray-700">
              <p>
                {flight.from} → {flight.to}
              </p>
              <p>
                Departure: {flight.departure} | Arrival: {flight.arrival}
              </p>
              <p>Duration: {flight.duration}</p>
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
