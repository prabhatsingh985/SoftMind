import React from "react";
import logo from "../assets/logo.png";
import map from "../assets/map.jpg";

const ContactUs = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] flex flex-col items-center justify-center bg-white text-black text-center px-4">
        <h2 className="m-5 relative z-10 text-3xl md:text-5xl font-extrabold text-purple-700">
          Contact us
        </h2>
        <h1 className="relative z-10 text-4xl md:text-6xl text-black font-extrabold">
          Get in touch with our Team
        </h1>
        <p className="relative z-10 text-lg md:text-2xl">
          Our team will guide you better
        </p>
      </div>
      {/* Map Section */}
      <div className="px-4 md:px-30 py-10 relative w-full">
        <img
          src={map}
          alt="Map"
          className="w-full h-[300px] md:h-screen object-cover"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-purple-700 text-white mt-20 py-10">
        <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
            <p className="mt-4 text-sm md:text-base">
              📞 7391265552 <br />
              ✉️ info@softmindtechnologies.com <br />
              📍 Softmind Technologies, New Delhi - 110074
            </p>
          </div>
          {/* Right Section */}
          <div className="bg-gray-100 text-black p-6 md:p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Contact Information
            </h1>
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 rounded-lg border border-gray-300"
              />
              <input
                type="email"
                placeholder="Your Email ID"
                className="p-2 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-2 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                placeholder="Tell Us"
                className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
              />
              <h2 className="text-lg md:text-2xl font-semibold col-span-1 md:col-span-2">
                What can we help you with?
              </h2>
              <textarea
                placeholder="Your Message"
                className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="col-span-1 md:col-span-2 bg-black text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center mt-10">
        <div className="text-lg font-bold">Softmind</div>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          &copy; 2025 Softmind Technologies. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
