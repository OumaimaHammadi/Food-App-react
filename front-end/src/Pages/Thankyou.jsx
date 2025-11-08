import React from 'react'
import './CSS/Thankyou.css'
import { useNavigate } from 'react-router-dom';


const Thankyou = () => {
     const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/dishes');
  }
  return (
    <div className="thank-you-container">
      <div className="checkmark">&#10004;</div>
   
      <h1>Thank you!</h1>
      <p>Your order was successfully completed.</p>
      <button className="back-button"  onClick={handleAddToCart}>BACK TO STORE</button>

    </div>
  );
}

export default Thankyou