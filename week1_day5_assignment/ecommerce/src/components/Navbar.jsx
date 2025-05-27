import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="poppins flex justify-between mx-30 my-5 p-5 shadow rounded-full">
      <span className="font-extrabold text-3xl text-violet-500 uppercase">
        Redux store
      </span>
      <span className="poppins text-xl font-extrabold  text-violet-500">
        cart items: {items.length}
      </span>
      <div className="text-xl  text-violet-500 pr-20  flex gap-20">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
