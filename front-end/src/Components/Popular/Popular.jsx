import React , {useState,useEffect} from 'react'
import './Popular.css'
import Item from '../Item/item'


const Popular = () => {

  const [popular_dishe,setPopular_dishe]= useState([])

  useEffect(()=>{
        // fetch('http://localhost:9000/api/v1/populardishes')

   
    fetch('https://food-app-react-eevn.vercel.app/api/v1/populardishes')
    .then((response)=> response.json())
    .then((data)=>setPopular_dishe(data))

  },[])

  return (
    <div className='popular'>
        <h1>POPULAR DISHES</h1>
        <hr />

        

        <div className="popular-item">
            {popular_dishe.map((item,i)=>{
                return <Item key={i} id={item.id}
                
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}

                />
            })}
        </div>

    </div>
  )
}

export default Popular