import React from 'react'
import './Admin.css'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddDishe from '../../Components/AddDishe/AddDishe'
import ListDishe from '../../Components/ListDishe/ListDishe'


export const Admin = () => {
  return (
    <div className='admin'>
            <Sidebar/> 
            <Routes >
              <Route path='/adddishe' element={<AddDishe/>} />
              <Route path='/listdishe' element={<ListDishe/>} />

            </Routes>


    </div>
  )
}

export default Admin