import React from "react";
const Signup = () => {
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-info text-3xl text-center">
              Sign up
            </h3>
            <form action="/">
              <div className="my-6 px-12">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full mt-2"
                />
                <br />
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
                <button className="btn btn-info text-white w-full">
                  Sign up
                </button>
                <p className="py-4 text-center">
                  Already registered?
                  <a
                    className="text-info cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login Now
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;
