import React from 'react'
import sel1 from '../image/seller1.png'
import sel2 from '../image/seller2.png'
import sel3 from '../image/seller3.png'
import sel4 from '../image/seller4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import '../style/sellers.css'
function Sellers() {
    return (
    <section className='sellers'>
      <div className="container">
        <h2>Our best sellers</h2>

      <Swiper
        slidesPerView={4}
        
        
        loop={true}
         
        className="mySwiper"
      >
        <SwiperSlide> 
                <div className="card">
                    <img src={sel1} alt="" />
                    <h4>Ipsum dolor</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                    <a>Shop now</a>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                    <img src={sel2} alt="" />
                    <h4>Consectetur adipiscing</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                    <a>Shop now</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                    <img src={sel3} alt="" />
                    <h4>Consequat</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                    <a>Shop now</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                    <img src={sel4} alt="" />
                    <h4>Commodo</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                    <a>Shop now</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                    <img src={sel4} alt="" />
                    <h4>Commodo</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                    <a>Shop now</a>
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </section>
  )
}

export default Sellers
