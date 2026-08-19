import Dishe from '../models/Dishes.js'
import uploadImageClodinary from '../utils/uploadImageClodinary.js';



export const adddishe = async (req, res) => {
  try {
    let dishes = await Dishe.find({});
    let id = dishes.length > 0 ? dishes[dishes.length - 1].id + 1 : 1;

   

    let imageUrl = "";

// Si fichier → upload Cloudinary
if (req.file) {
  imageUrl = (await uploadImageClodinary(req.file))?.url;
}

// Si le frontend envoie une URL → l'utiliser
if (req.body.image) {
  imageUrl = req.body.image;
}

if (!imageUrl) {
  return res.status(400).json({
    message: "Image is required",
    success: false
  });
}


    const dishe = new Dishe({
       id,
      name: req.body.name,
      image: imageUrl, 
      description:req.body.description,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await dishe.save();

    return res.json({
      message: "Dish added",
      data: dishe,
      success: true,
      error: false
    });

  } catch (error) {
    console.log("Error in adddishe:", error);
    return res.status(500).json({
      message: error.message,
      error: true
    });
  }
};





export const alldishes =async(req,res)=>{
    let dishes = await Dishe.find({})
    console.log("All dishes Fetched")
    res.send(dishes)

}


export const getSingleDishe = async(req,res)=>{
     const id =req.params.id

    try{
       const dishe = await Dishe.findById(id)
      res.status(200).json(
            {success:true,
            message:'Successfully Fetched',
            data:dishe

            })

    }catch(err){

        res.
        status(404).
        json({
            success:false,
            message:'not found'
        })

    }
}



export const removedishe = async(req,res)=>{
   const id =req.params.id

    try{
         await Dishe.findByIdAndDelete(id)


        res.
        status(200)
        .json({
            success:true,
            message:'Successfully deleted',

            })

    }catch(err){

        res.
        status(500).
        json({
            success:false,
            message:'Failed to  deleted from Controller'})

    }
}



export const updateDishe = async(req,res)=>{
    const id =req.params.id

    try{
        const updateDishe = await Dishe.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})


        res.
        status(200)
        .json(
            {success:true,
            message:'Successfully created',
            data:updateDishe

            })

    }catch(err){

        res.
        status(500).
        json({
            success:false,
            message:'Failed to  created from Controller'})

    }
}

export const getDisheBySearch = async(req,res)=>{
    //here 'i' means case sensitive

    const category =new RegExp(req.query.category,'i')
    const name =new RegExp(req.query.name,'i')

   

    try {
        const Dishes = await Dishe.find({
            category,
            name
          
                })
                //.populate('reviews') 
     
        res.status(200).json({
            success:true,
            count:Dishes.length,
            message:'Successful',
            data:Dishes,

            })

    } catch (err) {

        res.status(404).json({
            success:false,
            message:'Failed to  created from Controller'})

        
    }


}



 