import React ,{useState,useEffect} from 'react'
import './Dishes.css'
import Item from '../Item/item'
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:9000/api/v1';


const Dishes = () => {

     const [all_dishe,setAll_dishe]= useState([])
    
      useEffect(()=>{
               
              
         fetch(`${BASE_URL}/dishes`)
        .then((response)=> response.json())
        .then((data)=>setAll_dishe(data))
    
      },[])

    return (

        <div className='new-collections'>
        <h1>Our Dishes</h1>
        <hr />
    
        <div className='collections'>
            {all_dishe.map((item,i)=>{
                return <Item key={i} id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
    
                />
            })
                
            }
    
    </div>

                <div className="pagination">
            <a href='/store' >&laquo;</a>
            <a className="active" href='/store'>1</a>

            <a href='/store'>2</a>
            <a href='/store'>3</a>
            <a href='/store'>4</a>
            <a href='/store'>5</a>
            <a href='/store'>6</a>
            <a href='/store'>&raquo;</a>
            </div>
        </div>

      )



    }

export default Dishes