import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const InternshipDetails = () => {
  return (
    <div className="max-w-[90%] w-full mx-auto mt-20  mb-20 space-y-10">
      <h1 className="text-black font-bold text-3xl mb-6 text-left">
        Cloud Computing in 3 months
      </h1>

      <div className="p-8 bg-[#EBEAFF] shadow-lg rounded-xl border border-gray-300 space-y-8">
        {/* Internship Title & Description */}
        <div className="bg-gray-100 p-6 rounded-lg space-y-6">
          <h2 className="text-2xl font-bold">Cloud Computing</h2>
          <p className="text-gray-600">Cloud Computing (AWS, AZURE, GCP)</p>

          <div className="flex items-center gap-6 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Delhi
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarAlt /> 3 Months
            </p>
            <p className="flex items-center gap-2">
              <FaBriefcase /> Unpaid Internship
            </p>
          </div>
        </div>

        {/* Salary */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Salary</h3>
          <p>Annual CTC: 2.5 LPA to 5.5 LPA</p>
        </div>

        {/* Apply By */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Apply By</h3>
          <p>13/02/2024</p>
        </div>

        {/* About Us */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-gray-700">
            Welcome to SoftMind Technologies, where innovation meets expertise!
            Established with a vision to transform aspiring individuals into
            tech-savvy professionals, SoftMind Technologies is a cutting-edge
            institute that brings together a team of experienced and dedicated
            educators. At SoftMind Technologies, we understand the dynamic
            landscape of the technology industry and the growing demand for
            skilled professionals. Our mission is to bridge the gap between
            education and industry requirements by offering comprehensive
            training programs and internships in various tech domains.
          </p>
        </div>

        {/* About Internship */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About this Internship Program</h3>
          <p className="text-gray-700">
            Cloud computing internship programs provide students and aspiring
            professionals with the opportunity to gain hands-on experience in
            one of the most rapidly growing technology fields. These programs
            offer a chance to work with cloud services, infrastructure, and
            tools, helping interns develop practical skills and knowledge. It
            involves delivering various computing services (such as storage,
            processing, networking, and more) over the internet.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
            <li>Service Models</li>
            <li>Deployment Models</li>
            <li>Networking and Content Delivery</li>
            <li>Containers and Orchestration</li>
            <li>Architecture and Virtualization</li>
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">
            Selected intern’s day-to-day responsibilities include:
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
            <li>Building a blog right from scratch</li>
            <li>Understanding of cloud concepts and core concepts of different servcies</li>
            <li>Cloud computing concepts to a real-world scenario and Module Presentation</li>
          </ul>
        </div>

        {/* Skills Required */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Skill Required:</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
            <li>English Proficiency (at least Medium)</li>
            <li>10+2 Education</li>
          </ul>
        </div>

        {/* Number of Openings */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Number of Openings:</h3>
          <p><b>20</b></p>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
