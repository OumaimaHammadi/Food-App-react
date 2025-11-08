import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import DisheDisplay from '../Components/DisheDisplay/DisheDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'


const DisplayDishes = () => {
 const {all_dishe}=useContext(ShopContext)
  const {disheId}=useParams()

    if (!all_dishe || !Array.isArray(all_dishe)) {
    return <div>
      Chargement...
   

</div>
  }
  const dishe = all_dishe.find((e)=>e.id === Number(disheId)
)


  
    if (!dishe) {
    return <div>Plat introuvable</div>;
    }

  return (
    <div>
      <Breadcrum dishe={dishe}/>
      <DisheDisplay dishe ={dishe}/>
      <DescriptionBox/>
     
  

    </div>
  )
}

export default DisplayDishes