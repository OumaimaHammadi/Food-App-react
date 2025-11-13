import React , { useState }from 'react'
import './CSS/LoginSignup.css'
import {BASE_URL} from '../utils/config.js'

const LoginSignup = () => {

 const[state,setState]= useState("Login")
  const [formData,setFormData]= useState({
      username:"",
      password:"",
      email:""
  })

const changeHandler = (e)=>{
   setFormData({...formData,[e.target.name]:e.target.value})
}

 const login = async() =>{
 console.log("Login Function Executed",formData)
   let responseData
   await fetch(`${BASE_URL}/auth/login`,{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',

        },
        body:JSON.stringify(formData)

      }).then((resp)=> resp.json()).then((data)=>{
        responseData= data
        if(responseData.success){
          localStorage.setItem('auth-token',responseData.token)
          window.location.replace("/")
        }
        else{
          alert(responseData.errors)
        }

      })


 }

  const signup = async() =>{
   console.log("Signup Function Executed",formData)
   let responseData
   await fetch(`${BASE_URL}/auth/signup`,{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',

        },
        body:JSON.stringify(formData)

      }).then((resp)=> resp.json()).then((data)=>{
        responseData= data
        if(responseData.success){
          localStorage.setItem('auth-token',responseData.token)
          window.location.replace("/login")
        }
        else{
          alert(responseData.errors)
        }

      })

 }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Signup" ? <input name='username' value={formData.username} 
          onChange={changeHandler}
          type="text" placeholder='Your Name'/> :
          <></>
}
          <input name='email' value={formData.email} 
            onChange={changeHandler}
          type="email" placeholder='Email Address'/>

          <input name='password' value={formData.password}  onChange={changeHandler} type="password" placeholder='Password'/>

        </div>
        <button onClick={()=>{state ==="Login" ? login():signup()}} >Continue</button>
      
          {state==="Signup" ? <p className=" loginsignup-login"> 
            Already have an account ? <span onClick={()=>{setState("Login")}}>Login here</span>
        </p> : <p className=" loginsignup-login"> 
          Create an account ? <span onClick={()=>{setState("Signup")}} >Click here</span>
          </p>
}
          

        

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, 
            i agree to the terms of use & privacy
            police.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup