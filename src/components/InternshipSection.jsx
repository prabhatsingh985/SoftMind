import React from "react";

const InternshipSection = () => {
  return (
    <div
      className="relative w-[90%] max-w-[1578px] h-[352px] mx-auto rounded-[44px] px-14 py-12 shadow-lg flex items-center"
      style={{
        background: "linear-gradient(0deg, #6770F3 0%, #8346F8 100%)",
      }}
    >
      {/* Left-aligned Content Section */}
      <div className="flex flex-col justify-start gap-6 w-full">
        <h1 className="text-white font-montserrat font-[700] text-[50px] leading-[100%] tracking-wide">
          Internships carefully crafted for you
        </h1>
        <p className="text-white font-montserrat text-lg leading-[140%] tracking-[0.02em] opacity-90">
          Launch your tech career! SoftMind Technologies offers internships in
          web development, cloud, & more.
          <br /> Gain experience, learn from experts, and build your future.
        </p>
        <button className="bg-white text-black font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center gap-3 tracking-wide w-fit">
          Apply Now
          <span className="text-3xl font-extrabold">→</span>
        </button>
      </div>
    </div>
  );
};

export default InternshipSection;
