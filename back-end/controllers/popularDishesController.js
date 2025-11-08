import Dishe from '../models/Dishes.js'




export const populardishe= async(req,res)=>{
    
    // let products = await Product.find({category:'med'})
    let dishes = await Dishe.find()

    let popular_in_med = dishes.slice(0,6)
    console.log("popular dishe Fetched")
    res.send(popular_in_med) 

}