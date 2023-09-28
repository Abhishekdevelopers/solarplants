import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import {CiFacebook} from 'react-icons/ci';
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {MdLocationPin} from 'react-icons/md'
import {CiYoutube} from 'react-icons/ci'
import {MdPhone} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import Navbar1 from '../Components/Navbar1'
const Contact = () => {
  return (
    <>
   
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <Container>
    <div className='banner'>
    <div className='heightbanner'>
    <h1 className='hbanner'>Contact Us </h1>
    </div>  
    </div>
    <div className='contectsec'>
    <Row>
      <Col md="7">
      <form id='form' className='text-center' style={{ width: '100%', maxWidth: '100%' }}>
      <h3 className='h3textcontact'>Have Question Feel Free to Contact Us?</h3>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-3' />
     
      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-3' />
      <MDBInput type='number' label='Contact Number' v-model='email' wrapperClass='mb-3' />
     

      {/* <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' /> */}

      <MDBTextArea wrapperClass='mb-3' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-3'>
        Send Message
      </MDBBtn>
    </form>
      </Col>
      <Col md="5">
       <div className='bgcontact'>
        <Row>
          <Col md="12">
            <h4 className='h3textcontact'> Contact Information</h4>
            <div className='context'>
             <Col md="2">
            <MdPhone className='icone1'/>
             
             </Col>
              <Col md="10"> 
              <p>Phone No: <br/>US(+11234562228)</p>
              <p></p>
              </Col>
    
            </div>
            <div className='context'>
             <Col md="2">
            <MdLocationPin className='icone1'/>
             
             </Col>
              <Col md="10"> 
              <p>2072 New Town, Xblock Street <br/> WA 98370 United State</p>
              </Col>
    
            </div>
            <div className='context'>
             <Col md="2">
             <MdEmail className='icone1'/>
             </Col>
              <Col md="10"> 
              <p>Email Address:<br/> info@example.com</p>
              </Col>
    
            </div>
           
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h4>Follow Us</h4>
              <div className='icone'> <CiFacebook/>
            <TiSocialTwitterCircular/>
            <TiSocialLinkedinCircular/>
            <CiYoutube/>
            </div>
           
            </div>
          </Col>
        </Row>
        </div>
      </Col>
    
    </Row>

 
    </div>
    <Row>
      <Col>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56054.91789770619!2d77.36852479999999!3d28.5868032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692170829137!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mapcontact'></iframe>
      </Col>
    </Row>
      </Container>
      <Touch/>
      <Footer/>
    
    </>
  )
}

export default Contact
