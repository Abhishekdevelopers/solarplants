import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {PiFacebookLogo} from 'react-icons/pi'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {TiSocialGooglePlusCircular} from 'react-icons/ti'
const Touch = () => {
  return (
    <>
      <div className='maintouch'>
        <Container>
        <div className='touch'>
            <Row>
            
                <Col md="9">
                <div className='maintouch1'>
                 <p className='touchp'>Subscribe to our newsletter.</p>
                 <Col>
                    <input type='text' placeholder='Enter your email address...' className='inputtext'/>
                    <button className='touchbtn'>Subscription</button>
                   
                 </Col>
                 </div>
                </Col>
               
                
                <Col md="3">
                <div >
                  <p className='touchp'>Get in Touch</p>
                  <div className='maintouch2'>
                   <div><PiFacebookLogo size={40}/></div>
                   <div><TiSocialTwitterCircular size={40}/></div>
                   <div><TiSocialLinkedinCircular size={40}/></div>
                   <div><TiSocialGooglePlusCircular size={40}/></div>
                  </div>
                  </div>
                </Col>
            </Row>
            </div>
        </Container>
      </div>
    </>
  )
}

export default Touch
