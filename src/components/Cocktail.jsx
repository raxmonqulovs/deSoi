import React from 'react'
import '../style/cocktail.css'
import img1 from '../image/ig1.png'
import img2 from '../image/ig2.png'
import img3 from '../image/ig3.png'
import img4 from '../image/ig4.png'
function Cocktail() {
  return (
    <section className='cocktail'>
            <h2>Join us @сocktail</h2>
        <div className="cocktail__wrapper">
            <img src={img1} alt="" />
            <img src={img2} alt="" />    
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
    </section>
  )
}

export default Cocktail
