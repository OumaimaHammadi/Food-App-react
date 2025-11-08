import React,{useState,useEffect} from 'react'
import './ListDishe.css'
import cross_icon from '../../assets/cross_icon.png'




const ListProduct = () => {

  const [alldishes,setAllDishes]=useState([])
  
  const fetchInfo =async () =>{
    await fetch('http://localhost:9000/api/v1/dishe/alldishes')

    .then((res)=> res.json())
    .then((data)=>{setAllDishes(data)})
  }
  
  useEffect(()=>{
    fetchInfo()
 
      },[])


const remove_dishe = async (id)=>{

  await fetch(`http://localhost:9000/api/v1/dishe/removedishe/${id}`,{
      method:'DELETE',
      headers:{
      Accept:'application/json',
      'Content-Type': 'application/json'

      },
      // body:JSON.stringify({id:id})
  })
  await fetchInfo()
  

}

  return (
          <div className='list-dishe'>
              <h1> All Dishe List</h1>

              <div className="listdishe-format-main">
                
                <p>Dishes</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
              </div>



    <div className="listdishe-alldishes">
        <hr />
        
        {alldishes.map((product,index) => {
          return <>
          <div key={index} className="listdishe-format-main listdishe-format">
            <img src={product.image} alt="" className="listdishe-dishe-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img   onClick={()=>remove_dishe(product._id)}  src={cross_icon} alt="" className="listdishe-remove-icon" />
            {/*  */}
          </div> 
          <hr />
</>
})}
      </div> 
    </div>
                




  

  )
}

export default ListProduct