import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import Trending from '../components/Trending'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrivals/>
      <Trending />
      <Footer />
    </div>
  )
}

export default Home
