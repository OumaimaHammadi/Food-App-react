import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_dishe_icon from '../../assets/Dishe_Cart.svg'
import list_dishe_icon from '../../assets/Dishe_list_icon.svg'




export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/adddishe'}
        style={{textDecoration:"none"}}
        >
          <div className="sidebar-item">
            <img src={add_dishe_icon} alt="" />
            <p>Add Dishe </p>

          </div>

        </Link>

          <Link to={'/listdishe'}
        style={{textDecoration:"none"}}
        >
          <div className="sidebar-item">
            <img src={list_dishe_icon} alt="" />
            <p>Dishe List </p>


          </div>

        </Link>
    </div>
  )
}
