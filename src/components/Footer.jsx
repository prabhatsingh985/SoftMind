// import React from "react";
// import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
// import {Link} from "react-router-dom"
// import LinkedIn from "../assets/LinkedIn.png";
// import Instagram from "../assets/Instagram.png";
// import Facebook from "../assets/Facebook.png";
// import YouTube from "../assets/YouTube.png";
// import logo1 from "../assets/logo1.png";


 

// const Footer = () => {
//   const footerStyle = {
//      background: "linear-gradient(180deg, #8442F8 0%, #6276F1 100%)",

//     padding: "20px 50px",
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//     boxShadow: "0px -3px 4px 0px rgba(0, 0, 0, 0.25)",
//     width: "100%",
//   };

//   const topSectionStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "83%",
    
//   };

//   const logoStyle = {
//     display: "flex",
//     alignItems: "center",
//     // filter: "brightness(2) invert(1)",
//     width: "150px",
//   // mixBlendMode: "multiply",
//   };

//   const socialIconsStyle = {
//     display: "flex",
//     gap: "40px",
//   };

//   const bottomSectionStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "40px",
//     marginTop: "30px",
//     width: "83%",
//     fontSize: "1.3rem",
 
//   };

//   const columnStyle = {
//     textAlign: "left",
//   };

//   const headingStyle = {
//     fontWeight: "bold",
//     marginBottom: "10px",
//   };

//   const linkStyle = {
//     color: "white",
//     textDecoration: "none",
//     display: "block",
//     marginBottom: "5px",
//   };

//   return (
//     <footer style={footerStyle}>
//       {/* Top Section */}
//       <div style={topSectionStyle}>
//         <div style={logoStyle}>
//         <img src={logo1} alt="Softmind Technologies" style={logoStyle} />
//         </div>

//         {/* Social Icons */}
//         <div style={socialIconsStyle}>
//           <img src={LinkedIn} alt="LinkedIn" height="40" />
//           <img src={Facebook} alt="Facebook" height="40" />
//           <img src={YouTube} alt="YouTube" height="40" />
//           <img src={Instagram} alt="Instagram" height="40" />
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div style={bottomSectionStyle}>
//         {/* Column 1 */}
//         <div style={columnStyle}>
//           <p style={headingStyle}>NAVIGATION</p>
//           <a href="/" style={linkStyle}>Home</a>
//           <a href="/" style={linkStyle}>About Us</a>
//           <a href="/" style={linkStyle}>What We Do</a>
//           <a href="/" style={linkStyle}>To The Power of 10</a>
//           <a href="/" style={linkStyle}>Donate</a>
//         </div>

//         {/* Column 2 */}
//         <div style={columnStyle}>
//           <p style={headingStyle}>WHAT WE DO</p>
//           <a href="/" style={linkStyle}>Encouraging Testing</a>
//           <a href="/" style={linkStyle}>Strengthening Advocacy</a>
//           <a href="/" style={linkStyle}>Sharing Information</a>
//           <a href="/" style={linkStyle}>Building Leadership</a>
//           <a href="/" style={linkStyle}>Engaging With Global Fun</a>
//           <a href="/" style={linkStyle}>Shining a Light</a>
//         </div>

//         {/* Column 3 */}
//         <div style={columnStyle}>
//           <p style={headingStyle}>LEGAL</p>
//           <a href="/" style={linkStyle}>General Info</a>
//           <a href="/" style={linkStyle}>Privacy Policy</a>
//           <a href="/" style={linkStyle}>Terms of Service</a>
//         </div>

//         {/* Column 4 */}
//         <div style={columnStyle}>
//           <p style={headingStyle}>TALK TO US</p>
//           <a href="mailto:info@softmindtechnologies.com" style={linkStyle}>
//             info@softmindtechnologies.com
//           </a>
//           <a href="tel:+6623991145" style={linkStyle}>+66 2399 1145</a>
//           <a href="/" style={linkStyle}>Contact Us</a>
//           <a href="/" style={linkStyle}>Facebook</a>
//           <a href="/" style={linkStyle}>LinkedIn</a>
//           <a href="/" style={linkStyle}>Twitter</a>
//         </div>
//       </div>

//       {/* Copyright */}
//       <p style={{ marginTop: "30px", fontSize: "25px" }}>
//         © 2024 Softmind Technologies. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/LinkedIn.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import YouTube from "../assets/YouTube.png";
import logo1 from "../assets/logo1.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="top-section">
        <div className="logo">
          <img src={logo1} alt="Softmind Technologies" />
        </div>
        <div className="social-icons">
          <img src={LinkedIn} alt="LinkedIn" height="40" />
          <img src={Facebook} alt="Facebook" height="40" />
          <img src={YouTube} alt="YouTube" height="40" />
          <img src={Instagram} alt="Instagram" height="40" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="column">
          <h3>NAVIGATION</h3>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">What We Do</a>
          <a href="/">To The Power of 10</a>
          <a href="/">Donate</a>
        </div>
        <div className="column">
          <h3>WHAT WE DO</h3>
          <a href="/">Encouraging Testing</a>
          <a href="/">Strengthening Advocacy</a>
          <a href="/">Sharing Information</a>
          <a href="/">Building Leadership</a>
          <a href="/">Engaging With Global Fun</a>
          <a href="/">Shining a Light</a>
        </div>
        <div className="column">
          <h3>LEGAL</h3>
          <a href="/">General Info</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
        <div className="column">
          <h3>TALK TO US</h3>
          <a href="mailto:info@softmindtechnologies.com">
            info@softmindtechnologies.com
          </a>
          <a href="tel:+6623991145">+66 2399 1145</a>
          <a href="/">Contact Us</a>
          <a href="/">Facebook</a>
          <a href="/">LinkedIn</a>
          <a href="/">Twitter</a>
        </div>
      </div>

      {/* Copyright */}
      <p className="copyright">
        © 2024 Softmind Technologies. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
