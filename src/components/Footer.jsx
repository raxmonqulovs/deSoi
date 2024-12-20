import React from 'react'
import '../style/footer.css'
import arrow from '../image/right_arrow.svg'
import insta from '../image/instagram.svg'
import face from '../image/facebook.svg'
import twit from '../image/twitter.svg' 
import pin from '../image/pinterest.svg'
import you from '../image/youtube.svg'
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">

        <div className="footer__wrapper">
          <div>

          
          <h4 className='news'>Newsletter</h4>
          <span className='sign'>Sign up to save 10% on your next order</span>
          <form>
            <input type="text" placeholder='Emaill Address'  />
            <img className='foot_arrow' src={arrow} alt="" />
          </form>
          <div className='icons'>
            
            <img src={insta} alt="" />
            <img src={face} alt="" />
            <img src={pin} alt="" />
            <img src={twit} alt="" />
            <img src={you} alt="" />
          </div>
          </div>

            <nav className='footer__list'>
              <ul>
                <h4>explore</h4>
                <li>Account</li>
                <li>Gift Card</li>
                <li>Refer a Friend</li>
                <li>Affiliates</li>
                <li>Corporate Gifting</li>
              </ul>
              <ul>
                <h4>get help</h4>
                <li>Shop</li>
                <li>FAQ</li>
                <li>Shipping & Returns</li>
                <li>Store Locator</li>
              </ul>
              <ul>
                <h4>Company</h4>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Press </li>  
              </ul>
            </nav>

           

        </div>
        <div className='foot'>
              <h5>/de · swa/</h5>
              <span>®2021 Сocktail</span>
              <span>Privacy policy</span>
              <span>Terms of use</span>
              <span>AMASS</span>

          </div>

      </div>
    </footer>
  )
}

export default Footer
