import React from "react";
import InternshipSection from "../components/InternshipSection";
import InternshipOffers from "../components/InternshipOffers";
import InternshipCertificate from "../components/InternshipCertificate";
import InternshipDetails from "./InternshipDetails";
import ApplyForm from "./ApplyForm";

const InternshipTraining = () => {
  return (
    <div className="max-w-[90%] w-full mx-auto mt-20 space-y-10">
      {/* Internship Section */}
      <InternshipSection />

      {/* Internship Offers Section */}
      {/* Ensure unique data is passed to InternshipOffers */}
      <InternshipOffers />

      {/* Internship Certificate Section */}
      <InternshipCertificate />
      <InternshipDetails />
      <ApplyForm />
    </div>
  );
};

export default InternshipTraining;