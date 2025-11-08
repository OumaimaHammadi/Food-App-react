import React, { useContext  } from 'react'
import './DisheDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom';


const DisheDisplay  = (props) => {
  const {dishe}=props
  const {addToCart}=useContext(ShopContext)

   const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(dishe.id);
    navigate('/cart');
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
              This dish appears to be a fresh Mediterranean salad, typically made with: Crisp romaine and mixed lettuce ,

              Sliced cherry tomatoes ,Black olives,Onion rings,Cubes of feta cheese, A light olive oil or vinaigrette dressing. <br />

              It’s a healthy, colorful, and flavorful salad, perfect as a starter or a light main dish. Packed with nutrients and Mediterranean flair, 
              it's ideal for those seeking a refreshing, wholesome meal
           </div>


           {/* <div className="quantity-selector">
          <button onClick={decrement}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={increment}>+</button>
        </div> */}


           <div className="btn-add-toCart">
          

            {/* <button onClick={(()=>{addToCart(dishe.id)})}>ADD TO CART</button> */}


           <button onClick={handleAddToCart}>ADD TO CART</button>

</div>
</div>
</div>
)
}

export default DisheDisplay