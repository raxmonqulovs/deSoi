import React from 'react'
import '../style/utenim.css'
import img from '../image/ut_enim.png'
function UtEnim() {
  return (
    <section className='utenim'>
      <div className="container">
        <div className="utenim__wrapper">
            <div className="utenim_img">
                <img src={img} alt="" />
            </div>
            
            <div>
                <span>LEARN</span>
                <h4>Ut enim</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="">Shop now</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default UtEnim
