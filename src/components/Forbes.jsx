import React from 'react'
import '../style/forbes.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import down from '../image/qoshtirnoq_past.svg'
import up from '../image/qoshtirnoq_tepa.svg'
import logo1 from '../image/logo1.svg'
import logo2 from '../image/logo2.svg'
import logo3 from '../image/logo3.svg'
function Forbes() {
  return (
    <section className='forbes'>
      <div className="container">
        <div className="forbes__wrapper">
        <Swiper
        slidesPerView={3}
        
        loop={true}

        className="mySwiper2"
      >
        <SwiperSlide>
            <div className="card">
                <img src={up} alt="" />
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <img src={down} alt="" />
                <img src={logo1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <img src={up} alt="" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <img src={down} alt="" />
                <img src={logo2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <img src={up} alt="" />
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src={down} alt="" />
                <img src={logo3} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <img src={up} alt="" />
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <img src={down} alt="" />
                <img src={logo1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <img src={up} alt="" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <img src={down} alt="" />
                <img src={logo2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <img src={up} alt="" />
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src={down} alt="" />
                <img src={logo3} alt="" />
            </div>
        </SwiperSlide>
        
        
      </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Forbes
