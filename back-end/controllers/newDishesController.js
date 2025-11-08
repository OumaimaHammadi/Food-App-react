import Dishe from '../models/Dishes.js'



export const newdishes = async(req,res)=>{
let dishes = await Dishe.find({})
let newdishes= dishes.slice(-3)
console.log("Newdishes Fetched")
res.send(newdishes)

}


