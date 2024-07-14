import React from "react";
import about_hero from "../../../assets/about_hero.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="about-hero">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pt-8">
        <div className="left-side w-full md:w-1/2 md:pr-12 pt-6">
          <img src={about_hero} alt="sda" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 pt-8">
          <h1 className="text-4xl font-bold my-4">
            Book Haven is India's Online Independent Bookstore
          </h1>
          <h4 className="text-xl font-bold my-4 text-info">
            Get behind the scenes with us and explore the re-use revolution
          </h4>
          <p className="text-md">
            Book Haven is India's premier online independent bookstore, offering
            a vast selection of books across genres. It promotes literary
            culture and supports local authors, ensuring book lovers can easily
            access diverse and unique titles from the comfort of their homes.
          </p>

          <Link to="/all-book" className="btn btn-info text-white mt-6 px-8">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
