import React from "react";
import InternshipCard from "../components/InternshipCard";

const InternshipOffers = () => {
  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <h1 className="text-black font-montserrat font-bold text-[56px] leading-[100%] tracking-wide mb-6">
        Top Internships Offered by Us
      </h1>

      {/* Cards Container */}
      <div className="flex justify-between w-[90%] max-w-[1578px] gap-6">
        <InternshipCard
          title="Cloud Computing"
          description="Cloud Computing (AWS, AZURE, GCP)"
          location="Delhi"
          duration="3 Months"
          type="Unpaid Internship"
          bgColor="bg-[#FFDFDF]" // Light Red
        />
        <InternshipCard
          title="Web Development"
          description="MERN Stack Development"
          location="Remote"
          duration="6 Months"
          type="Paid Internship"
          bgColor="bg-[#DFFFD8]" // Light Green
        />
        <InternshipCard
          title="AI & Machine Learning"
          description="Deep Learning & Data Science"
          location="Bangalore"
          duration="4 Months"
          type="Unpaid Internship"
          bgColor="bg-[#D8E4FF]" // Light Blue
        />
        <InternshipCard
          title="Cybersecurity"
          description="Ethical Hacking & Security Analysis"
          location="Mumbai"
          duration="5 Months"
          type="Paid Internship"
          bgColor="bg-[#FCE4FF]" // Light Purple
        />
      </div>
    </div>
  );
};

export default InternshipOffers;
