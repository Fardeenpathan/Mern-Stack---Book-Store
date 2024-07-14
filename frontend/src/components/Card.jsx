import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="card bg-base-100 w-25 mx-2 mt-6 hover:scale-105 duration-200 cursor-pointer">
      <figure>
        <img
          src={item.image}
          alt="books"
          className=""
          style={{ height: "35vh", width: "100%" }}
        />
      </figure>
      <div className="card-body border-solid border-2 border-slate-400 border-t-0 border-l-1 border-r-1 border-b-1 rounded mb-12">
        <h2 className="card-title text-info ">{item.title}</h2>
        <div className="flex">
          <p>By - {item.author}</p>
          <div className="badge text-white py-3 bg-red-600">Trending </div>
        </div>

        <div className="flex">
          <p className="badge badge-outline mr-20">₹ {item.price}</p>
          <div
            className="badge badge-info text-white rounded-md px-3 py-4 hover:bg-black duration-300 cursor-pointer"
            onClick={() => handleAddToCart(item)}
          >
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
