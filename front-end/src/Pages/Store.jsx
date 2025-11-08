import React from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import DisheDisplay from '../Components/DisheDisplay/DisheDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'

const Store = () => {
  const {all_dishe}=useContext(ShopContext)
  const {disheId}=useParams()

  const dishe =all_dishe.find((e)=>
    e.id ===Number(disheId))
  
  return (
    <div>
      <Breadcrum dishe={dishe}/>
      <DisheDisplay dishe ={dishe}/>
      <DescriptionBox/>
     
  

    </div>
  )
}

export default Store