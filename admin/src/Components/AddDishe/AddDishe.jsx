import React, { useState } from 'react'
import './AddDishe.css'
import upload_area from '../../assets/upload_area.svg'

const AddDishe = () => {

const [image,setImage]=useState(false)

const imageHandler=(e)=>{
  setImage(e.target.files[0])


}

const [disheDetails,setDisheDetails]= useState({
        name:"",
        image:"",
        category:"Tunisian/Oriental Cuisine",
        new_price:"",
        old_price:""
})

const changeHandler=(e)=>{
      setDisheDetails({...disheDetails,[e.target.name]:e.target.value})
}

const Add_Dishe =async()=>{
  console.log(disheDetails)
  let responseData
  let dishe = disheDetails

  let formData = new FormData()
  formData.append('dishe',image)

   await fetch('http://localhost:9000/api/v1/upload',{
    method:'POST',
    headers:{
      Accept:'application/json',

    },
    body:formData,

  }).then((resp)=> resp.json())
  .then((data)=>{
    responseData = data
  })

  if(responseData.success){
        dishe.image= responseData.image_url


        console.log("dishe.image",dishe.image)
        console.log(dishe)

        await fetch('http://localhost:9000/api/v1/dishe/adddishe',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',

        },
        body:JSON.stringify(dishe)

      }).then((resp)=> resp.json()).then((data)=>{
        data.success?alert("dishe Added"):alert("Failed")
      })
  }
}

  return (
    <div className='add-dishe'>
      <div className="adddishe-itemfield">
        <p>Dishe title </p>
        <input value={disheDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here'/>
      </div>

      <div className="adddishe-price">
          <div className="adddishe-itemfield">
            <p>Price </p>
            <input value={disheDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type here'/>
          </div>

          <div className="adddishe-itemfield">
            <p>Offer Price </p>
            <input value={disheDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type here'/>
          </div>

          </div>

        
        <div className="adddishe-itemfield">
          <p>Dishe Category </p>
          <select value={disheDetails.category} onChange={changeHandler} name="category" className='add-dishe-selector' >
                <option value="Tunisian/Oriental Cuisine">
                    Tunisian/Oriental Cuisine

               </option>

                <option value="Italian Cuisine">
                    Italian Cuisine

                 </option>

                <option value="Asian Cuisine">
                Asian Cuisine


                  
                </option>

                <option value="French Cuisine">
                  French Cuisine

              </option>

                <option value="American Cuisine">

                  American Cuisine

                </option>

                <option value="Vegetarian/Vegan Cuisine">
                    Vegetarian/Vegan Cuisine

                </option>

                <option value="Healthy/Dietary Cuisine">
                    Healthy/Dietary Cuisine

             </option>

                <option value="Fast Food ">
                    Fast Food     
                </option>

              

          </select>
        </div>

        <div className="adddishe-itemfield">
          <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='adddishe-thumail-img' alt="" />

          </label>
          <input  onChange={imageHandler} type='file' name='image' id='file-input' hidden />
        
        
        </div>
        <button onClick={()=>{Add_Dishe()}} className='adddishe-btn'>ADD</button>
        

      </div>

  )
}

export default AddDishe