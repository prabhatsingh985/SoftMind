import React from 'react';
import homepageimage1 from "../assets/homepageimage1.jpg";
 const HeroSection = () => {
    return (
        <div>
            <img src={homepageimage1} alt="homepageimage1" style={{
                width: "90%",       // Leaves 20% space on both sides
                height: "80vh",
                display: "block",   // Ensures centering works
                margin: "30px auto",   // Centers the image horizontally
                objectFit: "cover",
                borderRadius: "20px",
                opacity: "0.9",
            }} />

           

            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "70px",   // Reduced font size to prevent overflow
                fontWeight: "bold",
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                width: "80%",      // Limits text width to prevent overflow
                padding: "10px",
                maxWidth: "800px",
                // backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent background for readability
                borderRadius: "10px",
                boxSizing: "border-box",
            }}>

                <div style={{
                    // width: "80%",
                    fontSize: "5vw", // Responsive font size
                    fontWeight: "bold",
                    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
                    wordWrap: "break-word",
                }}>
                    Building the Future with Scalable Software Solutions
                </div>
                <div style={{
                    // // width: "80%",
                    // color: "white",
                    // fontSize: "20px",
                    // // fontWeight: "bold",
                    // padding: "10px",
                    // // backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent background for readability
                    // // borderRadius: "10px",
                    // // boxSizing: "border-box",   
                    

                    fontSize: "1.5vw", // Responsive font size
                    marginTop: "10px",
                    wordWrap: "break-word",
                    
                }}>
                    Tailored Development Services for a Rapidly Evolving World
                </div>
                <button style={{
                    // color: "black",
                    // fontSize: "20px",
                    // fontWeight: "-moz-initial",
                    // borderRadius: "100px",
                    // backgroundColor: 'white',
                    // border: "20px solid white"



                    marginTop: "20px",
                    fontSize: "1.2vw",  // Responsive font size
                    borderRadius: "50px",
                    backgroundColor: "white",
                    color: "black",
                    border: "4px solid white",
                    padding: "10px 20px",
                    cursor: "pointer",
                    transition: "0.3s ease-in-out"

                }}>
                    Explore more</button>
            </div>


        </div>
    );
};

export default HeroSection;