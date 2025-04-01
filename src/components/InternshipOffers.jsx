import React from "react";
import InternshipTraining from "./InternshipTraining";

const InternshipOffers = () => {
  // Example data array
  const internships = [
    {
      id: 1,
      title: "Cloud Computing",
      description: "Cloud Computing (AWS, AZURE, GCP)",
      location: "Delhi",
      duration: "3 Months",
      type: "Unpaid Internship",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Learn and build web applications.",
      location: "Mumbai",
      duration: "6 Months",
      type: "Paid Internship",
    },
    {
      id: 3,
      title: "Data Science",
      description: "Work on data analysis and machine learning.",
      location: "Bangalore",
      duration: "4 Months",
      type: "Unpaid Internship",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Design user-friendly interfaces.",
      location: "Chennai",
      duration: "2 Months",
      type: "Paid Internship",
    },
  ];

  return (
    <div className="internship-offers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {internships.map((internship) => (
        <InternshipTraining key={internship.id} internship={internship} />
      ))}
    </div>
  );
};

export default InternshipOffers;
