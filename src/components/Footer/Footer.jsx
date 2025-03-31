import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_foot} alt="" style={{height:'300px', width:'300px'}}/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, animi! Soluta exercitationem, quaerat reprehenderit nisi eius accusantium maxime molestiae illo? Quam reiciendis fugit, laborum tempore minus culpa neque? Quia, neque.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
           <li>+91 8830699474</li>
          
        </ul>
        </div>
      </div>
      <hr />
     <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
