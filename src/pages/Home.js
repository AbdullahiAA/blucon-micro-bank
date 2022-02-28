import React from 'react'
import Header from '../components/global/Header'
import HomeHero from '../components/home/HomeHero'
import KeyServices from '../components/home/KeyServices'
import OurCustomer from '../components/home/OurCustomer'
import OurHistory from '../components/home/OurHistory'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <Header />

        <HomeHero />

        <KeyServices />

        <OurHistory />

        <OurCustomer />

        {/* Core Business */}

        {/* App Download */}

        {/* Footer */}
    </div>
  )
}

export default Home