import React from 'react'
import '../style/homeHero.css'
import cocktail from '../image/HomeHero.png'
function HomeHero() {
  return (
    <section className='homeHero'>
      <div className="container">
        <div className="hero__wrapper">
       <img className='hero__img' src={cocktail} alt="" />
        <div className="hero__content">
          <div className="half_round">
            <span>New arrival</span>
            <h1> Lorem ipsum 
            dolor sit amet</h1>
            <a href="">Shop new</a>
          </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default HomeHero
