import React from "react";

const InternshipCertificate = () => {
  return (
    <div className="relative mt-4 w-full flex flex-col items-center py-32 px-6">
      {/* Heading Positioned Above the Parent Div */}
      <h1 className="absolute top-0 text-gray-900 font-montserrat font-bold text-[56px] leading-[100%] tracking-wide text-center">
        Get Your Internship Certificate
      </h1>

      {/* Certificate Box Positioned Above */}
      <div className="absolute top-20 flex flex-col justify-center items-center w-[95%] max-w-[1400px] rounded-[20px] shadow-2xl px-16 py-14 border border-gray-300 bg-white">
        <h2 className="text-gray-700 font-sans font-medium text-[22px] text-center mb-4">
          Enter your Intern ID below to download your verified certificate
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-[800px]">
          <input
            type="text"
            placeholder="Enter your Intern ID"
            className="w-full px-6 py-4 border border-gray-400 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm bg-gray-100"
          />
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition w-full md:w-auto">
            Get
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCertificate;
