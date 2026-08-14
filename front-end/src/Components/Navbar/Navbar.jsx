import React, {useState ,useRef,useContext,useEffect} from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo_3.jpg'

import cart_icon from '../Assets/images/cart_icon.png'
import { Link ,useLocation} from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'
import nav_dropdown from '../Assets/images/nav_dropdown.png'


const Navbar = () => {
    const [menu,setMenu]= useState("home")
    const {getTotalCartItems}=useContext(ShopContext)

    const menuRef= useRef()

  const dropdown_toggle =(e)=>{
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')

    }

  const location = useLocation();

  useEffect(() => {
    if (location.state?.menu) {
      setMenu(location.state.menu);
    }
  }, [location]);
    
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""  className='navbar-icon'/> 
      </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />

      <ul  ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("home")}}>
            <Link style={{textDecoration:'none',color:'black'}} to='/'> HOME </Link>
            {menu==="home"?<hr/>:<> </>}
            </li>
        <li onClick={()=>{setMenu("dishes")}} >
            <Link style={{textDecoration:'none',color:'black'}} to='/dishes'> DISHES </Link>
             {menu==="dishes"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}> 
          <Link  style={{textDecoration:'none',color:'black'}} to='/about'>ABOUT </Link>
           {menu==="about"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("contact")}}>
          <Link  style={{textDecoration:'none',color:'black'}} to='/contact'>CONTACT</Link>
           {menu==="contact"?<hr/>:<></>}</li>
        
      </ul>
      <div className="nav-login-cart">
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token')
                    window.location.replace('/login') }}>Logout</button>
        :<Link   to='/login'  onClick={() => setMenu("login")}> <button>Login</button></Link>

        }  

        <Link to='/cart' onClick={() => setMenu("cart")}>
        <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

      </div>
    </div>
  )
}

export default Navbar