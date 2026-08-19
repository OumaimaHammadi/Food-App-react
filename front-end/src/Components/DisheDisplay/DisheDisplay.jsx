import React, { useContext } from 'react'
import './DisheDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom';


const DisheDisplay  = (props) => {
  const {dishe}=props
  const {addToCart}=useContext(ShopContext)

   const navigate = useNavigate();
   

  const handleAddToCart = () => {
    addToCart(dishe.id);


    navigate('/cart',{state: { menu: "cart" }})
  }


  // const [quantity, setQuantity] = useState(1);

  // const increment = () => setQuantity(quantity + 1);
  // const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

   return (
    <div className='dishedisplay'>

        <div className='dishedisplay-left'>

         

          <div className='dishedisplay-img'>
            <img className='dishedisplay-main-img' src={dishe.image} alt="" />


          </div>

          </div>

        <div className='dishedisplay-right'>
          <h1>{dishe.name}</h1>
      
          <div className="dishedisplay-right-prices">
            <div className="dishedisplay-right-prices-old">
              ${dishe.old_price}
            </div>

            <div className="dishedisplay-right-prices-new">
              ${dishe.new_price}
            </div>
          </div>

      

          <div className="dishedisplay-right-description">
{dishe.description}
          
           </div>


           {/* <div className="quantity-selector">
          <button onClick={decrement}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={increment}>+</button>
        </div> */}


           <div className="btn-add-toCart">
          



           <button 
           onClick={handleAddToCart} 
           >
           ADD TO CART</button>

</div>
</div>
</div>
)
}

export default DisheDisplay