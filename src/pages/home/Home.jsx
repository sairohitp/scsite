import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import SDGSection from '../../components/sdgsection/SDGSection'
import VisionBar from '../../components/visionbar/VisionBar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <hr />
        <VisionBar />
        <hr />
        <SDGSection />
        <Footer />
    </div>
  )
}

export default Home