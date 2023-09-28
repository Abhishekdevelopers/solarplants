import React from 'react'
import Midnavbar from './Midnavbar'
import Navbar from './Navbar'
import Navbar1 from './Navbar1'
import Subnavbar from './Subnavbar'
import { Container } from 'react-bootstrap'
// import RouterFile from './RouterFile'

const Header = () => {
  return (
    <div>
    <Subnavbar/>
    <Midnavbar/>
   {/* <Navbar/>  */}
   <Navbar1/>
    {/* <RouterFile/> */}
    <Container>
    <div className='banner'>
      {/* <img src={bannerimg} alt='' width={1350} height={500}/> */}
      <div className='bannertext'>
      <h1 className='h'>Investing in Clean Energy Generation
      </h1>
      <p className='bannertext2'>We believe we can make a difference to this world, to this very earth we live.</p>
      </div>
    </div>
    </Container>
    </div>
  
  )
}

export default Header
