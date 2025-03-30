import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import success from "../assets/success.jpg";
import teamwork from "../assets/teamwork.jpg";
import quote from "../assets/quaoteimg.jpg";

const AboutUs = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-purple-100 gap-2">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-700">
              We are Software Development Company.
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-purple-700 leading-tight mt-4">
              We set out to build <br /> the best products for you
            </h1>
            <div className="mt-6">
              <img
                src={teamwork}
                alt="Teamwork"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="order-first md:order-none mt-10 md:mt-20">
            <p className="text-lg md:text-xl font-bold text-gray-600">
              We are passionate about creating innovative software solutions that empower businesses 
              to reach their full potential.
            </p>
            <div className="mt-10 md:mt-20">
              <img
                src={success}
                alt="Success"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-10 gap-6">
        {/* Left Content */}
        <span className="md:w-1/2">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700">About us</h2>
            <img src="/src/assets/Vector 15.png" alt="Arrow" className="w-8 md:w-10 h-8 md:h-10 mt-4" />
          </div>
        </span>
        {/* Right Content */}
        <div className="md:w-1/2">
          <p className="m-6 md:m-10 relative top-4 md:top-10 text-lg md:text-2xl font-bold text-gray-700">
            Our mission is simple: to craft software<br /> that makes a difference.
            Whether you're a startup<br /> looking for a robust app to disrupt the
            market, or an established enterprise <br />needing to streamline operations,
            we're here to turn your vision<br /> into reality. We believe in building
            technology that <br />is not just functional but transformative.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-10 gap-10">
        {/* Left Quote */}
        <div className="md:w-1/2 order-last md:order-none">
          <blockquote className="italic text-2xl md:text-4xl font-extrabold text-gray-700 border-l-4 border-purple-600 pl-4">
            "Individually, we are skilled professionals. Together, <br/>we are a powerhouse of innovation and creativity."
          </blockquote>
        </div>
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={quote} alt="quote" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-purple-700 text-white py-6 flex flex-col md:flex-row justify-between px-6 md:px-10 text-lg md:text-2xl font-bold gap-4 md:gap-0">
        <span className="flex items-center gap-2">
          ⭐ Creative people
        </span>
        <span className="flex items-center gap-2">
          ⭐ Fast delivery
        </span>
        <span className="flex items-center gap-2">
          ⭐ Awesome services
        </span>
      </section>

      {/* Team Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-10 gap-10">
        {/* Left Content */}
        <span className="md:w-1/2">
          <div className="flex items-center gap-2">
            <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700">Let's get to know each other</h2>
            <img src="/src/assets/Vector 15.png" alt="Arrow" className="w-8 md:w-10 h-8 md:h-10 mt-4" />
          </div>
        </span>
        {/* Right Content */}
        <div className="md:w-1/2">
          <p className="mt-4 relative top-0 md:top-5 text-lg md:text-2xl font-bold text-gray-700">
            At Softmind Technologies, our team is our <br/>greatest asset. Comprising skilled developers, creative designers, 
            and dedicated project managers, we work together<br/> to bring innovative software solutions to life. 
            We believe in the power of collaboration and the <br/>unique value each team member contributes. 
            Our diverse skills and shared passion for <br/>technology drive us to exceed expectations on every project. 
            With a culture rooted in creativity <br/>and teamwork, we’re committed to turning your vision into reality.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-8">
        <div className="flex justify-center gap-6 text-xl md:text-2xl">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p className="mt-4 text-xs md:text-sm">© 2024 Softmind Technologies. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;