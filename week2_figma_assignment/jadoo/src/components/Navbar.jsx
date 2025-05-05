import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: install lucide-react for icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper flex justify-between items-center md:px-40 py-4 bg-white text-[#212832] z-10 relative">
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
        <Link to="/">Destinations</Link>
        <Link to="/">Hotels</Link>
        <Link to="/">Flights</Link>
        <Link to="/">Bookings</Link>
      </div>

      {/* Right Section - Desktop */}
      <div className="hidden md:flex gap-4 items-center font-semibold">
        <Link to="/">Login</Link>
        <button className="border border-black rounded px-4 py-2">Sign Up</button>
        <select name="language" id="language" className="border border-gray-300 rounded px-2 py-1">
          <option value="english">EN</option>
          <option value="hindi">HIN</option>
        </select>
      </div>

      {/* Mobile Menu - only shows if open */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 font-semibold md:hidden">
          <Link to="/">Destinations</Link>
          <Link to="/">Hotels</Link>
          <Link to="/">Flights</Link>
          <Link to="/">Bookings</Link>
          <hr />
          <Link to="/">Login</Link>
          <button className="border border-black rounded px-4 py-2 w-fit">Sign Up</button>
          <select name="language" id="language" className="border border-gray-300 rounded px-2 py-1">
            <option value="english">EN</option>
            <option value="hindi">HIN</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Navbar;
