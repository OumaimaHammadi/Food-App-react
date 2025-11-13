import React, { createContext, useState ,useEffect} from 'react'
import {BASE_URL} from '../utils/config.js'


export const ShopContext = createContext(null)

const getDefaultCart =()=>{
  let cart ={}
  for(let index=0; index < 300+1;index++){
     cart[index]=0
   
  }
  return cart
}


const ShopContextProvider=(props) => {
  const [all_dishe,setAll_Dishe]= useState([])

  const [cartItems,setCartItems]=useState(getDefaultCart())
  
  useEffect(()=>{
     fetch(`${BASE_URL}/alldishes`)
     .then((response)=> response.json())
     .then((data)=>setAll_Dishe(data))
     
     if(localStorage.getItem('auth-token')){
        fetch(`${BASE_URL}/cartData/getcart`,{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,

          },
          body:"",
        }).then((response)=> response.json())
        .then((data)=> setCartItems(data))
     }
     

  },[])

  const addToCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    // console.log(cartItems)
     if(localStorage.getItem('auth-token')){
       fetch(`${BASE_URL}/cartData/addtocart`
        ,{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId})

       })
     .then(response=> response.json())
     .then((data)=>console.log(data)
      //setCartItems(data)
    )
    }
  }

  const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


const getTotalCartAmount =()=>{
  let totalAmount =0
  for(const item in cartItems){
    if(cartItems[item]>0){
      let itemInfo =all_dishe.find((product)=>product.id === Number(item))
      totalAmount+= cartItems[item] * itemInfo.new_price 
    }
  }
  return totalAmount

}

const getTotalCartItems=()=>{
  let totalItem =0
  for(const item in cartItems){
    if(cartItems[item]>0){
      totalItem += cartItems[item]

  }

}
return totalItem
}

const contextValue ={getTotalCartItems,getTotalCartAmount,all_dishe,cartItems,addToCart,removeFromCart}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider