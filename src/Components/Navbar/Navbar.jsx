import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/bncc-logo2.png'
// import logo2 from '../../assets/Kngc-logo2.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[]);

  return ( 

    <nav className={`container ${sticky? 'dark_nav' : ''}`}>

        <img src={logo} alt=""className='logo'/>
        <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>Campus</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li> <button className='btn' >Contact Us </button> </li>
        </ul>
         {/* <img src={logo2} alt=""className='logo'/> */}
    </nav>
  )
}
export default Navbar