import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();  

  const items = useSelector((state) => state.cart);

  const handleRemove = (item) => dispatch(remove(item));
  return (
    <div className="volkhov w-[88%] flex m-auto mt-10  gap-10 ">
      <h1 className="text-xl uppercase text-violet-600">cart:</h1>
      <div className="flex flex-col  justify-center  w-[100%]">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between my-3 shadow rounded-lg p-4  items-center">
            <img
              className="w-16 rounded  object-contain mb-2"
              src={item.image}
              alt=""
            />
            <h5>{item.title}</h5>
            <h5>${item.price}</h5>
            <button
              onClick={() => handleRemove(item)}
              className="bg-violet-400  cursor-pointer px-3 py-3  rounded-md"
            >
              remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
