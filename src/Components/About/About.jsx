import React from 'react'
import './About.css'
import About_img from '../../assets/Gallery_1.jpg'
import Play_icon from '../../assets/play_icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={About_img} alt="" className='about_img' />
            <img src={Play_icon} alt="" className='play_icon' />
        </div>
        <div className="about_right">
            <h3>About BNCC</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>The Bangladesh National Cadet Corps (BNCC) is a para-military defense force and tri-services organization that trains students from schools, colleges, and universities to develop leadership qualities, discipline, and a sense of duty.
            <br /> <br /> It comprises the Army, Navy, and Air Force wings and is managed by the Ministry of Defense and the Ministry of Education. </p>
            {/* <p>BNCC membership offers privileges such as direct entry into the armed forces as officers, opportunities for scholarship, and participation in youth exchange programs. </p>
            <p>The BNCC aims to groom future leaders by providing training that cultivates leadership, discipline, and self-confidence</p>
               */}
        </div>

    </div>
  )
}

export default About