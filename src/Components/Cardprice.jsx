import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../App.css'
import {BsLightningChargeFill} from 'react-icons/bs'
// import light from '../assets/light.avif'
import cardimg1 from '../assets/cardimg1.jpg'
// import img2 from '../assets/fossil.webp'
// import img3 from '../assets/wind.jpg'
// import img4 from '../assets/charge.jpeg'
import Pricing from './Pricing'
const Cardprice = () => {
  return (
    <>
    
     <Container>
     <div className='bestoffer'>
        <Row>
            <Col>
                <div className='bestofferheader'>
                <BsLightningChargeFill size={80} color='red' className='lighticon'/>
                {/* <img src={light} alt='' width={80} className='imgbest'/> */}
                
                <h3 className='hcolor'>PRICING PLAN FOR YOU</h3>
                <h1 className='hsec'>
                 Pricing Packages</h1>
                </div>
            </Col>
        </Row>
        
     <div className='cardcontent'>
        <Row>
            <Col md="3">
            <Pricing
                heading="Windmil"
                subheading="4.99kWh Storage"
                price="$840"
                img={cardimg1}
                pgraph="12 Year Product & 25 Year Performance Warranty"
                butt="Select a Plan"
            />
            </Col>
            <Col md="3">
            <Pricing
                heading="GlobalEnergy"
                subheading="5.45kWh Storage"
                price="$1,100"
                img={cardimg1}
                pgraph="12 Year Product & 25 Year Performance Warranty"
                butt="Select a Plan"
            />
            </Col>
            <Col md="3">
            <Pricing
                heading="Sun Energy"
                subheading="2.20kWh Storage"
                price="$1,690"
                img={cardimg1}
                pgraph="12 Year Product & 25 Year Performance Warranty"
                butt="Select a Plan"
            />
            </Col>
            <Col md="3">
            <Pricing
                heading="Fossil Panels"
                subheading="8.10kWh Storage"
                price="$1,620"
                img={cardimg1}
                pgraph="12 Year Product & 25 Year Performance Warranty"
                butt="Select a Plan"
            />
            </Col>
           
        </Row>
        </div>
        </div>
     </Container> 
     
    </>
  )
}

export default Cardprice
