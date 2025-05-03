import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-wrapper flex relative justify-between mx-25 z-10 my-10 [color:#212832] items-center">
      <div className="nav-left">
        <img className="nav-img w-30" src={logo} alt="" />
      </div>

    <div className="nav-middle flex font-semibold [color:#212832] gap-25">
        <Link>Desitnations</Link>
        <Link>Hotels</Link>
        <Link>Flights</Link>
        <Link>Bookings</Link>
      </div>

      <div className="nav-right flex gap-10 font-semibold [color:#212832] items-center">
        <Link>Login</Link>
        <button className="border-black  border-1 rounded px-4 py-2 " >sign up</button>
        <select name="language" id="language">
          <option value="enlish">EN</option>
          <option value="hindi">HIN</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
