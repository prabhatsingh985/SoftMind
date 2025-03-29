 
import React from "react";
import dataAnalysis from "../assets/dataAnalysis.png";
const BlogPage = () => {
  const containerStyle = {
    display: "flex",
    maxWidth: "80%",
     fontFamily: "poppins",
  };

  const leftSectionStyle = {
    width: "60%",
    padding: "45px",
    marginLeft: "50px",
    fontFamily: "poppins",
    
  };

  const rightSectionStyle = {
    width: "100%",
    padding: "20px",
    paddingLeft: "160px",
    fontFamily: "poppins",
  };

  const sidebarStyle = {
    backgroundColor: "#F3F1FF",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "120px",
    // width: "500px",
    // height: "300px",
    fontFamily: "poppins",
 
  };

  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor:"#F3F1FF",
    // padding: "23px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  };

  const searchInputStyle = {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "5px",
    fontSize: "50px",
  };

  const categoryTitleStyle = {
    fontSize: "80px",
    fontWeight: "bold",
    marginBottom: "10px",
    // marginLeft: "10px",
  };

  const categoryItemStyle = {
    fontSize: "40px",
    margin: "25px 40px",
    cursor: "pointer",
    
  };

  const topBlogTitleStyle = {
    fontSize: "80px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const topBlogItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
    fontSize: "40px",
    fontFamily: "poppins",
  };

  const blogIndexStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginRight: "10px",
    fontFamily: "poppins",
  };

  const textContainerStyle = {
    flex: 1,
  };

  const dateStyle = {
    fontSize: "25px",
    color: "gray",
  };

  const titleBoldStyle = {
    fontSize: "40px",
    // fontWeight: "bold",
  };

  const headerStyle = {
    background: "linear-gradient(0deg, #6770F3 0%, #8346F8 100%)",
    padding: "30px 110px",
    color: "white",
    fontSize: "75px",
    fontWeight: "bold",
    width: "100%",
    fontFamily: "poppins",
    
  };

  const blogListHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "38px",
    width:"130%"
  };

  const titleStyle = {
    fontSize: "90px",
    fontWeight: "bold",
    // paddingTop: "1px",
  };

  const viewAllStyle = {
    fontSize: "40px",
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    width: "10%",
    fontFamily: "poppins",
  };

  const blogItemStyle = {
    display: "flex",
    gap: "20px",
    // width: "100%",
    marginBottom: "20px",
    width: "130%",
  };

  const blogImageContainer = {
    // display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  const blogTextContainer = {
    textAlign: "center",
  };

  return (
    <div>
      {/* Header */}
      {/* <div style={headerStyle}> */}
        <h1 style={headerStyle} >Blogs</h1>    

      <div style={containerStyle}>
        {/* Left Sidebar */}
        <div style={leftSectionStyle}>
            <div style={searchBarStyle}>
              <input type="text" placeholder="Search..." style={searchInputStyle} />
            </div>
            {/* Search Bar */}
            <div style={sidebarStyle}>
            {/* Categories */}
            <h3 style={categoryTitleStyle}>Categories</h3>
            <p style={categoryItemStyle}>Cloud Computing</p>
            <p style={categoryItemStyle}>Data Analysis</p>
            <p style={categoryItemStyle}>Oracle Database Development</p>
            <p style={categoryItemStyle}>Python with Data Science</p>
            <p style={categoryItemStyle}>Web development</p>
          </div>

          {/* Top Blog Section */}
          <div style={sidebarStyle}>
            <h3 style={topBlogTitleStyle}>Top Blog</h3>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} style={topBlogItemStyle}>
                <span style={blogIndexStyle}>{num}</span>
                <div style={textContainerStyle}>
                  <p style={titleBoldStyle}>Exploratory Data Analysis EDA</p>
                  <p style={dateStyle}>13 Nov, 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Blog List */}
        <div style={rightSectionStyle}>
          <div style={blogListHeaderStyle}>
            <h1 style={titleStyle}>Data Analysis</h1>
            <span style={viewAllStyle}>View all</span>
          </div>

          {[1, 2, 3].map((_, index) => (
            <div key={index} style={blogItemStyle}>
              {/* Left Blog Image */}
              <div style={blogImageContainer}>
                <img
                  src={dataAnalysis}
                  alt="Blog"
                  style={imageStyle}
                />
                <div style={blogTextContainer}>
                  <p style={dateStyle}>Data Analysis - 13 Nov, 2024</p>
                  <p style={titleBoldStyle}>Exploratory Data Analysis EDA</p>
                </div>
              </div>

              {/* Right Blog Image */}
              <div style={blogImageContainer}>
                <img
                  src={dataAnalysis}
                  alt="Process"
                  style={imageStyle}
                />
                <div style={blogTextContainer}>
                  <p style={dateStyle}>Data Analysis - 13 Nov, 2024</p>
                  <p style={titleBoldStyle}>Data Cleaning & Processing</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


 