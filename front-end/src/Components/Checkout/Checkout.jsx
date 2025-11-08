import React from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Checkout = () => {
  const location = useLocation();
//   const totalAmount = location.state?.totalAmount || 0;


const { totalAmount = 0, cartDetails = [] } = location.state || {};

  const navigate = useNavigate();

  const handleAddToCart = () => {
    
    navigate('/thankyou');
  }




 return (
 <div className="checkout-container">
      <div className="billing-details">
        <h2>Billing Details</h2>

               <div className="name-group">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input type="text" id="address" placeholder="Street address" />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Apartment, suite, unit etc. (optional)"
          />
        </div>
        <div className="location-group">
          <div className="form-group">
            <label htmlFor="state">State / Country *</label>
            <input type="text" id="state" />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Posta / Zip *</label>
            <input type="text" id="zip" />
          </div>
        </div>
        <div className="contact-group">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" />
          </div>
        </div>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Create an account?
          </label>
        </div>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Ship To A Different Address?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="orderNotes">Order Notes</label>
          <textarea id="orderNotes" placeholder="Write your notes here..." rows="4"></textarea>
        </div>
      </div>

      <div className="order-summary">
        <div className="coupon-code">
          <h2>Coupon Code</h2>
          <div className="coupon-input">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-button">APPLY</button>
          </div>
        </div>

        <div className="your-order">
          <h2>Your Order</h2>
          <div className="order-details">


            <div className="order-item">
        
                        <div> 
                       {cartDetails.map((item, index) => (
                <div key={index} className="order-item-line">
                  <span className="item-label">{item.name} x {item.quantity}</span>
                  <span className="item-price">{item.new_price *  item.quantity}$</span>
                </div>
              ))}
                    </div>

  


       
      
            </div>

            <div className="order-subtotal">
              <span>Cart Subtotal</span>
              <span>{totalAmount} $</span>
            </div>
            <div className="order-total">
              <span>Order Total</span>
              <span>{totalAmount} $</span>
            </div>
          </div>

          <div className="payment-methods">
            <button className="payment-button">Direct Bank Transfer</button>
            <button className="payment-button">Cheque Payment</button>
            <button className="payment-button">Paypal</button>
          </div>

          <button className="place-order-button" onClick={handleAddToCart}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout