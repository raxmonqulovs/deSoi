import React from 'react'
import '../style/ingredients.css'
import img1 from '../image/element1.png'
import img2 from '../image/element2.png'
import img3 from '../image/element3.png'
import img4 from '../image/element4.png'
import img5 from '../image/element5.png'
import img6 from '../image/element6.png'
function Ingredients() {
  return (
    <section className='ingredients'>
       <div className="container">
            <h2>Ingredients</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <h5>Ingredient glossAry</h5>
            <div className="ingredients__wrapper">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
       </div>
    </section>
  )
}

export default Ingredients
