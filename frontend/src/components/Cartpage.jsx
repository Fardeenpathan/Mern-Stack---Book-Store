import React, { useEffect, useState } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../features/cartSlice";
const CartPage = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

  return (
    <div>
      <section className="md:pt-12">
        <div className="container md:py-28 py-16 mx-auto bg-slate-200 md:px-24 px-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="text-3xl font-semibold mb-8 text-info text-center">
                Cart
              </div>
              {cartItems.map((data) => (
                <div className="space-y-4" key={data.id}>
                  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
                    <div className="relative overflow-hidden rounded md:w-32 md:h-32 w-60 h-60 mb-4 md:mb-0">
                      <img
                        src={data.image}
                        className="w-full h-full object-cover"
                        alt="Blue Jeans Jacket"
                      />
                      <div className="mask bg-opacity-50 bg-gray-700"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 items-center md:items-start">
                      <div className="text-center md:text-left">
                        <p className="font-semibold">{data.title}</p>
                        <p>Author: {data.author}</p>
                        <p>Category: {data.category}</p>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none mt-4"
                          onClick={() => dispatch(removeItem(data.id))}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div>
                        <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-4 md:mt-0 md:pl-12">
                          <div className="flex items-center space-x-2">
                            <button
                              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none"
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                            >
                              <FaMinus />
                            </button>
                            <input
                              id="form1"
                              min="1"
                              name="quantity"
                              value={data.quantity}
                              readOnly
                              type="number"
                              className="w-16 px-2 py-1 text-center border rounded-md focus:outline-none"
                            />
                            <button
                              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none"
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                        <p className="text-lg font-semibold mt-4 md:mt-0 md:ml-24 ml-12 md:pt-4">
                          ₹ {data.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4 py-4 border-gray-300" />
                </div>
              ))}
            </div>
            <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4 mb-4 md:mb-0 h-60">
              <div className="text-lg font-semibold mb-4">Summary</div>
              <ul className="space-y-2">
                <li className="flex justify-between items-center border-b border-gray-300 py-2">
                  <span>Total Quantity</span>
                  <span>{totalQuantity}</span>
                </li>

                <li className="flex justify-between items-center py-2">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span className="text-lg font-semibold">{totalPrice}</span>
                </li>
              </ul>

              <a
                className="btn bg-blue-500 text-white rounded-md px-5 py-2 hover:bg-black duration-300 cursor-pointer mt-2"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Go to checkout
              </a>
              <Login />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
