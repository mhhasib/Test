import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/campus_1.jpg'
import gallery_2 from '../../assets/campus_2.jpg'
import gallery_3 from '../../assets/campus_4.jpg'
import gallery_4 from '../../assets/Gallery_4.jpg'
import right_arrow from '../../assets/right-arrow.png'

const Campus = () => {
  return (
    <div>
        <div className="campus">
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
            </div>
            <button className='btn dark_btn' >See more <img src={right_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Campus