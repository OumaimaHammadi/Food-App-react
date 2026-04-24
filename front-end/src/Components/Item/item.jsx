import React from 'react'
import './item.css'
import { useNavigate } from 'react-router-dom';


const Item = (props) => {
const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/dishes/${props.id}`, {
    state: { menu: "dishes" }
  });
  };

  return (
    <div className='item'>
      {/* <Link to={`/dishes/${props.id}`}>
      <img onClick={window.scrollTo(0,0)}  src={props.image} alt="" />
      </Link> */}

      <img onClick={handleClick} src={props.image} alt="" />


        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
               $ {props.new_price}

            </div>

            <div className="item-price-old">
           $ {props.old_price}

            </div>

        </div>
    </div>
  )
}

export default Item