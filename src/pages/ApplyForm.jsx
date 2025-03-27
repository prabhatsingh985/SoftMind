import React from 'react';

const ApplyForm = () => {
  return (
    <div className="max-w-[90%] w-full mx-auto mt-10 p-8 min-h-screen">
      {/* Heading and Description */}
      <div 
        className="p-8 rounded-[33px] shadow-md bg-[#F1F4F9] min-h-[200px] w-full max-w-[1200px] mx-auto"
        style={{ 
          boxShadow: '1px 1px 0.3px 1px #00000040' 
        }}
      >
        <h1 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2">
          Apply Now <img src="/src/assets/Vector 15.png" alt="Arrow" className="w-6 h-6" />
        </h1>
        <p className="text-gray-600 max-w-[1000px]">
          Welcome to SoftMind Technologies, where innovation meets expertise! Established with a vision to transform aspiring individuals into tech-savvy professionals, SoftMind Technologies is a cutting-edge institute that brings together a team of experienced and dedicated educators. Our mission is to bridge the gap between education and industry by offering comprehensive training programs and internships in various tech domains.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row items-center mt-8 gap-8 min-h-[400px]">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center min-h-[300px]">
          <img src="/src/assets/rb_939 1.png" alt="Illustration" className="w-[500px] h-auto" />
        </div>
        
        {/* Form */}
        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-md border border-gray-300 min-h-[350px]">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-3 border rounded" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-3 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" placeholder="Your Email ID" className="w-full p-3 border rounded" />
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">Apply Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
