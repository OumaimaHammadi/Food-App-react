// import Dishe from '../models/Dishes.js'



// export const dishes = async(req,res)=>{
// let dishes = await Dishe.find({})
// let newdishes= dishes.slice(0,6)

// console.log("Dishe Fetched")
// res.send(newdishes)

// }

export const dishes = async (req, res) => {
  try {
    let dishes = await Dishe.find({});
    let newdishes = dishes.slice(0, 6);

    console.log("Dishe Fetched:", newdishes.length);
    res.send(newdishes);
  } catch (err) {
    console.error("Error fetching dishes:", err);
    res.status(500).send({ error: "Database fetch failed" });
  }
};



