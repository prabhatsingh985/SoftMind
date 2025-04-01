import React from "react";
import { useNavigate } from "react-router-dom";

const InternshipSection = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/apply"); // Navigate to the apply form
  };

  const internships = [
    {
      title: "Web Development Internship",
      description: "Work on real-world projects and enhance your web skills.",
      location: "Remote",
      duration: "3 Months",
      type: "Part-time",
      bgColor: "bg-blue-200",
    },
    {
      title: "Cloud Computing Internship",
      description: "Learn AWS, Azure, and Google Cloud technologies.",
      location: "Hybrid",
      duration: "6 Months",
      type: "Full-time",
      bgColor: "bg-purple-200",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6 py-10">
      <h1 className="text-3xl font-bold text-center">Available Internships</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {internships.map((internship, index) => (
          <InternshipCard
            key={index}
            internship={internship}
          />
        ))}
      </div>
    </div>
  );
};

const InternshipCard = ({ internship }) => {
  return (
    <div className="internship-card bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4 border border-gray-200">
      <div className="icon bg-pink-100 p-4 rounded-full shadow self-center">
        <i className="fas fa-briefcase text-pink-500 text-2xl"></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 text-center">{internship.title}</h3>
      <p className="text-sm text-gray-600 text-center">{internship.description}</p>
      <div className="details text-sm text-gray-700 space-y-1 text-center">
        <p>
          <i className="fas fa-map-marker-alt mr-2"></i>
          {internship.location}
        </p>
        <p>
          <i className="fas fa-calendar-alt mr-2"></i>
          {internship.duration}
        </p>
        <p>
          <i className="fas fa-briefcase mr-2"></i>
          {internship.type}
        </p>
      </div>
      <div className="actions flex flex-col w-full space-y-2">
        <button className="bg-pink-500 text-white py-2 rounded-lg shadow hover:bg-pink-600">
          View Details
        </button>
        <button className="bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900">
          Apply →
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;