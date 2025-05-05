import React from "react";
import { useNavigate } from "react-router-dom";

const bookings = [
  {
    id: 1,
    hotelName: "Ocean View Resort",
    checkIn: "2025-05-10",
    checkOut: "2025-05-14",
    guests: 2,
    totalPrice: "₹18,000",
  },
  {
    id: 2,
    hotelName: "Mountain Escape",
    checkIn: "2025-06-01",
    checkOut: "2025-06-05",
    guests: 3,
    totalPrice: "₹12,800",
  },
];

export default function BookingsPage() {

  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-3xl main-head font-bold mb-6">My Bookings</h1>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{booking.hotelName}</h2>
            <p className="text-gray-600">
              Check-in: {booking.checkIn} | Check-out: {booking.checkOut}
            </p>
            <p className="text-gray-600">Guests: {booking.guests}</p>
            <p className="text-indigo-600 font-medium mt-2">
              Total: {booking.totalPrice}
            </p>
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
