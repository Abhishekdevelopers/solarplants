import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
const Service = () => {
  return (
    <>
   
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <Container>
    <div className='banner'>
    <div className='heightbanner'>
    <h1 className='hbanner'>Service </h1>
    </div>
      </div>
      </Container>
      <Touch/>
      <Footer/>
      
    </>
  )
}

export default Service
