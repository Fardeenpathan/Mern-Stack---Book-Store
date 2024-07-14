import React from "react";
import Signup from "./Signup";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-info text-3xl text-center">Login</h3>
          <form action="/">
            <div className="my-6 px-12">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full mt-2"
              />
              <br />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full mt-2"
              />
              <br />
              <button className="btn btn-info text-white w-full">Login</button>
              <p className="py-4 text-center">
                Not registered?
                <a
                  className="text-info cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_3").close();
                    document.getElementById("my_modal_4").showModal();
                  }}
                >
                  Signup
                </a>
              </p>
            </div>
          </form>
          <Signup />
        </div>
      </dialog>
    </div>
  );
};

export default Login;
