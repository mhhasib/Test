import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
          <Title subTitle='Our Contingent' Title='Platoon Commaders'/>
          <Program/>
          <About/>
          <Title subTitle='Gallery' Title='Campus Photos'/>
          <Campus/>
           <Title subTitle='Testimonials' Title='What Student Says'/>
      </div>
      
    </div>
  )
}
export default App