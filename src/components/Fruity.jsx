import React from 'react'
import '../style/fruity.css'
import fruity_img from '../image/fruity_img.png'
function Fruity() {
  return (
    <section className='fruity'>
      <div className="container">
        <div className="fruity__wrapper">
            <div>
                <span>New in</span>
                <h4>Rich and fruity</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="">Shop now</a>
            </div>

                <div className="fruity_img">
                    <img src={fruity_img} alt="" />
                </div>
        </div>
      </div>
    </section>
  )
}

export default Fruity

