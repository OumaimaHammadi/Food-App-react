import Users from '../models/Users.js'

//Creating API for adding products in cartdata


export const addtocart = async(req,res)=>{   
    console.log("added",req.body.itemId)

    let userData = await Users.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId]+=1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send('Added')
}  

//Creating API for remove product in cartdata

export const removefromcart = async(req,res)=>{
    console.log("removed",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id})
    if (userData.cartData[req.body.itemId]>0) 
     userData.cartData[req.body.itemId]-=1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send('Removed')
   
}


//Creating API for get product in cartdata

    export const getcart= async(req,res)=>{
    // console.log("getCart",req.body.itemId)
    console.log("getCart")
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData)
   
}