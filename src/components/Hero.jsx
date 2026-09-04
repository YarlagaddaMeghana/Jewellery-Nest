import React from 'react'
import "../styles/hero.css"
import hero from '../assets/images/hero.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">

    <div className="hero-img">
        <img src={hero} alt="Jewellery" />
    </div>

    <div className="hero-text">
        <h1>TIMELESS ELEGANCE</h1>
        <p>Jewellery that tells your story.</p>
        <p>Discover elegance designed to last a lifetime.</p>
        <Link to='/Products'><button>EXPLORE COLLECTION  →</button></Link>
    </div>

</div>
  )
}

export default Hero
