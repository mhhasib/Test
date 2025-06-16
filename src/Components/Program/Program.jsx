import React from 'react'
import './Program.css'
import program_2 from '../../assets/header-2.jpg'
import program_3 from '../../assets/header-3.jpg'
import program_4 from '../../assets/header-4.jpg'

// import program_2 from '../../assets/vice_principal_2.png'
// import program_3 from '../../assets/header-3.jpg'
// import program_4 from '../../assets/principal.jpeg'


import program_icon_1 from '../../assets/program_star_1.png'
import program_icon_2 from '../../assets/program_star_2.png'
import program_icon_3 from '../../assets/program_icon_4.png'

const Program = () => {
  return (
    <div>
        <div className="programs">
            <div className="program">
                <img src={program_2} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
              <div className="program">
                <img src={program_3} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
              <div className="program">
                <img src={program_4} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Post Graduation Degree</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Program