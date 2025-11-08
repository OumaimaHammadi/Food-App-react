import Dishe from '../models/Dishes.js'


export const adddishe = async(req,res)=>{
    

 let dishes = await Dishe.find({})
    let id;
    if(dishes.length > 0)
    {
        let last_dishe_array = dishes.slice(-1)
        let last_dishe = last_dishe_array[0]
        id = last_dishe.id+1
    }

    else{
        id=1
    }

const dishe =new Dishe(
    {
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
     


    })
        console.log(dishe)
    await dishe.save()
    console.log("Saved")
    res.json({
        success:true,
        name:req.body.name
    })


}



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



 