import React from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-wrapper flex justify-between mx-25 my-10 items-center">
      <div className="nav-left">
        <img className="nav-img w-30" src={logo} alt="" />
      </div>

      <div className="nav-middle flex gap-25">
        <Link>Desitnations</Link>
        <Link>Hotels</Link>
        <Link>Flights</Link>
        <Link>Bookings</Link>
      </div>

      <div className="nav-right flex gap-10 items-center">
        <Link>Bookings</Link>
        <button className="border-2 border-black rounded px-4 py-2">sign up</button>
        <select className="" name="language" id="language">
          <option value="enlish">Eng</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
