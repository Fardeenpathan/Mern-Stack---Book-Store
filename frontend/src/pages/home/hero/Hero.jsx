import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
          <div className="left-side my-10 w-full md:w-1/2 mt-12 md:mt-24">
            <h1 className="text-4xl font-bold my-4">
              Hello, Welcome here to learn something
              <span className="text-info mx-3">new everyday!!!</span>
            </h1>
            <p className="text-lg">
              At our bookstore, we believe in the power of knowledge and the joy
              of discovery. Each book on our shelves is a gateway to new
              adventures, ideas, and perspectives. Whether you're a passionate
              reader, a curious learner, or simply looking to explore something
              new, we have something for everyone.
            </p>
            <label className="input input-bordered flex items-center gap-2 my-6 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-info text-white">Get Started</button>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
