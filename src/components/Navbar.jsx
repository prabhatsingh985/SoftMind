import React from 'react'
import {Link} from "react-router-dom"
 import logo from "../assets/logo.png"

export default function Navbar() {
 

  return (
   
     
    <div>
      <div>
        <ul style={{
          fontWeight: 'bold',
          marginLeft: '70px',
          display: 'flex',
          gap: '7rem',
          alignItems: 'center', 
        }}>
          <li>
         <Link to ="/">
         <img src={logo} alt="Logo" width={80} height={100} style={{
          marginLeft:"2px",
          display:'flex',
        }} loading="lazy"/>
       </Link>
       </li>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/contact">Internships & Training</Link>
          </li>
          <li>
            <Link to="/contact">Blogs</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/contact">About us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
