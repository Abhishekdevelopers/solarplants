import React, { useState } from "react";
import {HiOutlineSearchCircle} from 'react-icons/hi'
import "./Navbar1.css";
import {  NavLink } from "react-router-dom";
import square from '../assets/square.jpg'
import { Col } from "react-bootstrap";
import Servicebtn from "./Servicebtn";
import Aboutbtn from "./Aboutbtn";
import Technicalreport from "../Pages/Technicalreport";
const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
    <nav >
     <Col md="10">
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menutext">
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/">Home</NavLink></li>
        <li >
                 {/* <NavLink to="/about">About Us</NavLink> */}
                 <Aboutbtn/>
                 </li>
                 <li>
                  <Servicebtn/>
                 </li>
                  {/* <li><NavLink to="/service">Services</NavLink></li> */}
                  <li><NavLink to="/technical">Technical Legal Report</NavLink></li>
                  <li><NavLink to="/description">Description of Services</NavLink></li>
                
                 <li ><NavLink to="/blog">Blog</NavLink></li>
               <li> <NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
      </div>
      </Col>
      {/* <Link to="/" className="title">
        Website
      </Link> */}
      {/* <span><HiOutlineSearchCircle size={60} color='white' /></span> */}
      <Col md="1">
      <div><img src={ square } alt='' className='midnavimg1'/></div>
      </Col>
    </nav>
    
    </div>
  );
};
export default Navbar1