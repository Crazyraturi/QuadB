import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: install lucide-react for icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav-wrapper flex justify-between items-center md:px-40 py-4 bg-white text-[#212832] z-50 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-24 md:w-32" src={logo} alt="Logo" />
      </div>

      {/* Hamburger menu - Mobile only */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Links - Desktop */}
      <div className="hidden md:flex gap-8 font-semibold">
        <Link className="hover:text-orange-300" to="/destinations">Destinations</Link>
        <Link className="hover:text-orange-300" to="/hotels">Hotels</Link>
        <Link className="hover:text-orange-300" to="/flights">Flights</Link>
        <Link className="hover:text-orange-300" to="/booking">Bookings</Link>
      </div>

      {/* Right Section - Desktop */}
      <div className="hidden md:flex gap-4 items-center font-semibold">
        <Link className="hover:text-orange-300" to="/login">Login</Link>
        <button
          onClick={() => navigate("/signup")}
          className="border hover:text-orange-300 border-black rounded px-4 py-2"
        >
          Sign Up
        </button>
        <select
          name="language"
          id="language"
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="english">EN</option>
          <option value="hindi">HIN</option>
        </select>
      </div>

      {/* Mobile Menu - only shows if open */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-auto max-h-[70%] bg-gradient-to-r from-[#FF946D] to-[#FF7D68] m-4 px-6 py-8 flex flex-col gap-6 font-semibold z-50 transition-all duration-300 border border-gray-300 rounded-lg shadow-md">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} color="white" />
            </button>
          </div>

          {/* Menu Items */}
          <Link to="/destinations" onClick={() => setMenuOpen(false)}>Destinations</Link>
          <Link to="/hotels" onClick={() => setMenuOpen(false)}>Hotels</Link>
          <Link to="/flights" onClick={() => setMenuOpen(false)}>Flights</Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>Bookings</Link>

          <hr />
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <button
            onClick={() => {
              navigate("/signup");
              setMenuOpen(false);
            }}
            className="border border-black rounded px-4 py-2 w-fit"
          >
            Sign Up
          </button>
          <select
            name="language"
            id="language"
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="english">EN</option>
            <option value="hindi">HIN</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Navbar;
