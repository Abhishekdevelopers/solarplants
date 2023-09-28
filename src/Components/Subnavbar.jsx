import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiSolidEditLocation} from 'react-icons/bi'

const Subnavbar = () => {
  return (
    <>
    {/* <div className='subnav'>
    <Container>
    <Row>
    <Col md='8'>
    <div>
            <ul className='subnav2'>
           <li>Energy Solution can help you reduce your fuel bills</li> 
           </ul>
    </div>
    </Col>
    <div className='micone'>
    <Col md='2'>
    <div>
    <ul  className='subnav1'>
     <li><BiLogoFacebook/></li>
     <li><BiLogoTwitter/></li>
     <li><BiLogoLinkedin /></li>
     </ul>
     </div>
     </Col>
  
     <Col md='2'>
     <div>
     <ul className='subnav1'>
     <li> <BiSolidEditLocation /></li>
     <li>Find A Location</li>
     </ul>
     </div>
     </Col>
     </div>
    
    {/* <div   className='subnav1'>
    <div>
     <span><FontAwesomeIcon icon={faFacebook} /></span>
     <span><FontAwesomeIcon icon={faTwitter} /></span>
     <span><FontAwesomeIcon icon={faLinkedin} /></span>
     <span>&nbsp;&nbsp;&nbsp;</span>
     </div>
     <div>
     <span><FontAwesomeIcon icon={faLocation} /></span>
     <span>Find A Location</span>
     </div>
    </div>  
    </Row>
    </Container>
    </div> */}
    {/* <div className='mobile'>
    <div className='subnav'>
    <Container>
  
    <Row>
    <div className='subnav1'>
    <div >
    <Col md='6'>
    
     <ul className='subnav1'>
     <li><BiLogoFacebook/></li>
     <li><BiLogoTwitter/></li>
     <li><BiLogoLinkedin /></li>
     </ul>
     </Col>
     </div>
     <div>
     <Col md='6'>
     <ul className='subnav1'>
     <li> <BiSolidEditLocation /></li>
     <li>Find A Location</li>
     </ul>
     </Col>
     </div>
     </div>
    </Row>
    </Container>
    </div>
    </div>
     */}
     
   
    <Container>
    <div className='subnav'>
    <Row>
      <Col md="6">
        <ul className='subnav2'>
        <li>Energy Solution can help you reduce your fuel bills</li> 
        </ul>
      </Col>
      <Col md="3">
      <Row>
        <div className='subnav1'>
        <Col md="4"><BiLogoFacebook/></Col>
        <Col md="4"><BiLogoTwitter/></Col>
        <Col md="4"><BiLogoLinkedin /></Col>
        </div>
      </Row>
      </Col>
      <Col md="3">
         <Row>
          <Col md="2">
       <BiSolidEditLocation />
    
          </Col>
          <Col md="10">
           <p> Find A Location</p>
          </Col>
         </Row>
      </Col>
    </Row>
    </div>
    </Container>
  
    </>
  )
}

export default Subnavbar
