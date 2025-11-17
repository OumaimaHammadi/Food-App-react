import React , {useState,useEffect} from 'react'
import './Popular.css'
import Item from '../Item/item'
const BASE_URL = process.env.REACT_APP_BASE_URL;


const Popular = () => {

  const [popular_dishe,setPopular_dishe]= useState([])

  // useEffect(()=>{

   
  //   fetch(`${BASE_URL}/populardishes`)
  //   .then((response)=> response.json())
  //   .then((data)=>setPopular_dishe(data))

  // },[])
  useEffect(() => {
  fetch(`${BASE_URL}/populardishes`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => setPopular_dishe(data))
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}, []);


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