import React from 'react'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import ServiceHero from '../components/services/ServiceHero'
import "./Services.css"

function Services() {
  return (
    <div className='services'>
        <Header />

        <ServiceHero />

        <Footer />
    </div>
  )
}

export default Services