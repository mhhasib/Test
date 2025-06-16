import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/right-arrow.png'

const Hero
 = () => {
  return (
    <div className='hero'>
        <div className="hero-text container">
            {/* <h1>We Ensure better education for a better world</h1> */}
            <h1>We Ensure Knowledge & Disciplane for future Leaders</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowlwdge,skills and experiences needed to excel in the dynamic field of eduction</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
        </div>

    </div>
  )
}

export default Hero
