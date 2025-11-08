import Dishe from '../models/Dishes.js'



export const dishes = async(req,res)=>{
let dishes = await Dishe.find({})
let newdishes= dishes.slice(0,6)

console.log("Dishe Fetched")
res.send(newdishes)

}


