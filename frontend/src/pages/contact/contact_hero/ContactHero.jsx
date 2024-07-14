import React from "react";
import contact from "../../../assets/contact.jpg";
const ContactHero = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:pt-20 ">
      <div className="left-side my-10 w-full md:w-1/2 md:mt-32">
        <img src={contact} alt="" />
      </div>
      <div className="w-full md:w-1/2 border-2 border-slate-300 py-16 rounded-lg ml-8s">
        <div>
          <h3 className="font-bold text-info text-3xl text-center">
            Contact Us
          </h3>
          <form action="/">
            <div className="my-6 px-12">
              <div className="flex w-full">
                <div className="first w-1/2 mr-8">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 mt-2 w-full"
                  />
                </div>

                <div className="Last w-1/2">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 mt-2 w-full"
                  />
                </div>
              </div>

              <br />
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full mt-2"
              />
              <br />
              <label>Mobile no.</label>
              <input
                type="number"
                placeholder="Enter your number"
                className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full mt-2"
              />
              <br />

              <label>Message</label>

              <textarea
                type="text-area"
                placeholder="Enter your message here...."
                className="block border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full mt-2"
              ></textarea>
              <br />
              <button className="btn btn-info text-white w-full mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
