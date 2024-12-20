import React from 'react'
import '../style/shop.css'
import star1 from '../image/satr.png'
import star2 from '../image/star2.png'
import img1 from '../image/shop_img1.png'
import img2 from '../image/shop_img2.png'
import img3 from '../image/shop_img3.png'
import img4 from '../image/shop_img4.png'
import logo1 from '../image/element1.png'
import logo2 from '../image/element7.png'
import logo3 from '../image/element8.png'
function Shop() {
  return (
    <section className='shop'>
      <div className="container">

        <h2>Shop beverages</h2>

            <div className="shop__wrapper"> 
                    
                <div className="card1">
                    <h2>Variety Pack</h2>
                    <h6>-  Delicate and lean to sip -</h6>
                    <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="card2">
                    <img src={img1} alt="" />
                    <h5>Bottle</h5>
                    <p>
                        <div>
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                        </div>
                        (32 reviews)
                        </p>

                    <h4>$35.59</h4>
                    <h3>Shop now</h3>
                    
                </div>

                <div className="card2">
                    <img src={img1} alt="" />
                    <h5>Bottle</h5>
                    
                        <p>
                            <div>
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                            </div>
                            (32 reviews)
                        </p>
                    <h4>$35.59</h4>
                    <h3>Shop now</h3>
                </div>

            </div>

            <div className="shop__wrapper2">

            <div className="card1">
                    <h2>Light - bodied</h2>
                    <h6>-  Delicate and lean to sip -</h6>
                    <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                    </div>
                    <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                    <div className="card3">
                        <h2>Happy hour 
                        24/7</h2>
                    </div>

                    <div className="card2">
                    <img src={img1} alt="" />
                    <h5>Bottle</h5>
                    <p>
                        <div>
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                            <img src={star1} alt="" />
                        </div>
                        (32 reviews)
                        </p>

                    <h4>$35.59</h4>
                    <h3>Shop now</h3>
                    
                </div>
            </div>

      </div>
    </section>
  )
}

export default Shop
