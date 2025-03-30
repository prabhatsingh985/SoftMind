import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpg";
import bulkCard from "../assets/bulk.png";
import bulkDetail from "../assets/bulk.png";
import businessCard from "../assets/bintel.png";
import businessDetail from "../assets/bintel.png";
import uiuxCard from "../assets/uiux.png";
import uiuxDetail from "../assets/uiux.png";
import tdCard from "../assets/t&d.jpeg";
import tdDetail from "../assets/t&d.jpeg";
import dmsCard from "../assets/dms.jpg";
import dmsDetail from "../assets/dms.jpg";
import sdCard from "../assets/sd.jpeg";
import sdDetail from "../assets/sd.jpeg";

const services = [
  { title: "Software Development", description: "Custom software solutions tailored to your needs.", cardImage: sdCard, detailImage: sdDetail },
  { title: "Business Intelligence and Analytics", description: "Transform your data into insights and drive decision-making.", cardImage: businessCard, detailImage: businessDetail },
  { title: "Data Management & Integration", description: "Seamless data handling and integration across platforms.", cardImage: dmsCard, detailImage: dmsDetail },
  { title: "User Experience (UX) and User Interface (UI) Design", description: "Design intuitive and engaging user experiences.", cardImage: uiuxCard, detailImage: uiuxDetail },
  { title: "Digital Marketing & SEO Services", description: "Boost your online presence with effective marketing strategies.", cardImage: bulkCard, detailImage: bulkDetail },
  { title: "Training & Development", description: "Enhance skills and capabilities with expert training.", cardImage: tdCard, detailImage: tdDetail },
];

const ServicesPage = () => {
  return (
    <div className="bg-white font-sans">
      <div className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] flex items-center justify-center bg-white text-gray-900 font-bold px-4 sm:px-6 md:px-8">
        <img 
          src={hero} 
          alt="Services" 
          className="absolute inset-6 sm:inset-8 md:inset-12 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] md:h-[calc(100%-6rem)] object-cover rounded-2xl sm:rounded-3xl" 
        />
        <h1 className="absolute bottom-8 sm:bottom-12 md:bottom-16 z-10 drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">SERVICES</h1>
      </div>

      <section className="text-center py-8 sm:py-12 md:py-16 bg-gradient-to-b from-blue-500 to-purple-500 text-white">
        <h2 className="text-sm sm:text-base md:text-4xl font-extrabold">Our Services</h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">Feel the power of Technology Software Service</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={<span className="text-base sm:text-lg md:text-xl">{service.description}</span>} 
              image={service.cardImage} 
              buttonClassName="mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-purple-700 hover:text-white"
            />
          ))}
        </div>
      </section>

      <section className="space-y-6 sm:space-y-10 md:space-y-14 px-4 sm:px-6 md:px-20 py-6 sm:py-10 md:py-14">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between shadow-xl rounded-2xl p-4 sm:p-6 md:p-10 overflow-hidden 
              ${index % 2 === 0 ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white' : 'bg-white text-black'}
              ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2 p-4 sm:p-6 md:p-8 text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold">{service.title}</h3>
              <p className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl">{service.description}</p>
              <button
                className={`mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-md transition-transform duration-300 
                  ${index % 2 === 0 ? 'bg-white text-purple-700' : 'bg-blue-600 text-white'} 
                  hover:scale-110 hover:bg-purple-700 hover:text-white`}
              >
                Get Started
              </button>
            </div>
            <div 
              className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-[400px] md:h-[400px] shadow-2xl rounded-full border-4 sm:border-6 md:border-8 border-white transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:border-purple-500"
            >
              <img 
                src={service.detailImage} 
                alt={service.title} 
                className="w-full h-full object-cover rounded-full transition-opacity duration-300 hover:opacity-90" 
              />
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-gray-900 text-white py-4 sm:py-6 md:py-8 text-center">
        <div className="text-sm sm:text-base md:text-lg font-bold">Softmind</div>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">&copy; 2025 Softmind. All Rights Reserved.</p>
        <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm md:text-base">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm md:text-base">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm md:text-base">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
