import React from 'react'
 import Navbar from './ui/Navbar'
import Hero from './ui/Hero'
import OurTeam from './ui/OurTeam'
import AboutUs from './ui/AboutUs'
import ContactUs from './ui/ContactUs'
import OurServices from './ui/OurServices'
import FormContact from './ui/FormContact'
import Footer from './ui/Footer'


const page = () => {
  return (
    <>
 <Navbar /> 
   <Hero />
   <AboutUs />
   <OurTeam />
   <ContactUs />
   <OurServices />
   <FormContact />
   <Footer />

    </>

  )
}

export default page