import React , {useState,useEffect} from 'react'
import './NewDishes.css'
import Item from '../Item/item'


const NewDishes = () => {
  const [new_dishes,setNew_dishes]= useState([])

  useEffect(()=>{
    fetch('https://localhost:9000/api/v1/newdishes')
    .then((response)=> response.json())
    .then((data)=>setNew_dishes(data))

  },[])

  return (
    <div className='new-collections'>
    <h1>NEW DISHES</h1>
    <hr />

    <div className='collections'>
        {new_dishes.map((item,i)=>{
            return <Item key={i} id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}

            />
        })
            
        }

</div>
    </div>
  )
}

export default NewDishes