import React from "react";
import "./bottombanner.css";
import { Link } from "react-router-dom";
const BottomBanner = () => {
  return (
    <div className="bottom-banner text-center mt-0 flex items-center justify-center mt-24">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="text-5xl pt-16">
          Book Your <br />
          Own Adventures
        </h1>
        <h3 className="my-4">MORE BANG FOR YOUR BOOK</h3>
        <Link
          to="/all-book"
          className="btn bg-info text-white rounded-md px-5 py-2 hover:bg-black duration-300 cursor-pointer"
        >
          View All Books
        </Link>
      </div>
    </div>
  );
};

export default BottomBanner;
