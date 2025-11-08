import React from 'react'
import '../Hero/Hero.css'
import hero_image from '../Assets/images/hero_1.jpg'


const Hero = () => {
  return (
  
     
<div className="hero-container">
  <img src={hero_image}  alt="Hero" className="hero-image" />
  <div className="hero-content">
        

      <p >
          Don't hesitate to make a reservation and enjoy our delicious dishes.


</p>
         
        <h1>Welcome To  <br /> Our restaurant</h1>


   
          <button className="shop-button">Order Now</button>

       
      </div>

     
</div>





    
  )
}

export default Hero