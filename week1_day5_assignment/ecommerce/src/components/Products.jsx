import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Products = () => {
  
    const dispatch = useDispatch()

  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setproducts(data);
    };

    fetchProducts();
  }, []);

    function handleAdd(product) { 
        dispatch(add(product))
    
  } 

  return <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-5 " >
    {products.map((product)=>(
         <div className=" items-center bg-white gap-2 rounded-2xl  p-5 shadow w-80 justify-center flex flex-col" key={product.id}>
            <img className="rounded w-full h-50 object-contain mb-2"  src={product.image} alt="image" />
            <h4 className="text-lg text-center font-semibold truncate w-full" >{product.title}</h4>
            <h5 className="text-green-500">$ {product.price}</h5>
            <button onClick={()=> handleAdd(product)

            } className="bg-violet-400 w-full cursor-pointer px-2 py-2 rounded-md">Add To Cart</button>
         </div>
    ))}
  </div>;
};

export default Products;
