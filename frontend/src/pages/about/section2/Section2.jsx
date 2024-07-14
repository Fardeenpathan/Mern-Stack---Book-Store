import React from "react";
import section2_image from "../../../assets/section2_image.webp";
import "./section2.css";
const Section2 = () => {
  return (
    <div className="section2 mt-20 md:py-28 md:px-36 px-10 py-10">
      <div className="section_2_image flex justify-center items-center mb-12">
        <img src={section2_image} alt="section2_image" />
      </div>
      <div className="section_2_content">
        <h1 className="text-4xl my-4 text-center">
          The Internet's Largest<br></br> Bookstore
        </h1>
        <h4 className="text-xl font-bold my-4 text-info text-center">
          Get behind the scenes with us and explore the re-use revolution
        </h4>
        <p className="text-md text-center ">
          Book Haven is India's premier online independent bookstore, offering a
          vast selection of books across genres. It promotes literary culture
          and supports local authors, ensuring book lovers can easily access
          diverse and unique titles from the comfort of their homes.
        </p>
      </div>
    </div>
  );
};

export default Section2;
