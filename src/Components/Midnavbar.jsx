import React from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import {  NavLink } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import react from '../assets/react.svg'
import square from '../assets/square.jpg'
// use react icons

import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
// import {BsFillTelephoneFill} from 'react-icons/bs'

const Midnavbar = () => {
  return (
    <>
     <Container>
      <Row>
        <div className='midnav'>
        <Col md='2'>
         <div><img src={ square } alt='' className='midnavimg'/></div>
         </Col>
         <Col md='8'>
         <div className='minnav1'>
         <div className='minnav1'>
          <div className='midicon'>
         <span><BiPhoneCall size={60} color='blue'/></span>
         </div>
         <div>
         <span><h5>Phone No:</h5></span>
         <span>(+11234562228)</span>
         </div>
         </div>
         <div className='minnav2'>
         <div className='midicon'>
          <span><AiOutlineMail size={60} color='blue'/></span>
          </div>
          <div>
          <span><h5>Email Address:</h5></span>
         <span>info@example.com</span>
         </div>
         </div>
         </div>
         </Col>
         <Col md='2'>
         <div >
         <button className='midnavbtn'><NavLink to='/contact'>Get A Quote</NavLink></button>
         </div>
          </Col>
        </div>
      </Row>
     </Container> 
    </>
  )
}

export default Midnavbar
