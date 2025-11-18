import express from 'express'
import mongoose  from 'mongoose'
import multer from 'multer'
import path from 'path'
import cors from 'cors'
import disheRoute from '../routes/dishe.js'
// import disheRoute from './routes/dishe.js'
import authRoute from '../routes/auth.js'
import newdishesRoute from '../routes/newDishes.js'
import populardishesRoute from '../routes/popularDishes.js'
import cartDataRoute from '../routes/cartdata.js'
import dishesRoute from '../routes/dishes.js'

import cookieParser from "cookie-parser"
import dotenv from 'dotenv';
dotenv.config();



///////midleware
dotenv.config()
const app =express()
const port = process.env.PORT || 8000
const corsOptions = {
    //origin: ['http://localhost:3000', 'https://food-app-react-client.vercel.app'],
    // origin:true,
    //credentials:true
}
///database connection

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

//mongoose.set("strictQuery",false)
 //mongoose.set('bufferCommands', false);


//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));





const isDev = process.env.NODE_ENV !== "production";
//Image Storage Engine 
const storage = multer.diskStorage({
    //destination: './upload/images',
    destination: isDev ? './upload/images' : null,
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
         


    }

})


const upload = multer({storage:storage})


//Creating Upload Endpoint for images

app.use("/api/v1/images",express.static('upload/images'))


app.post('/api/v1/upload', upload.single('dishe'), (req, res) => {
    console.log(req.file)

    res.json({
        success:1,
        // image_url:`http://localhost:${port}/api/v1/images/${req.file.filename}`
       image_url: `${process.env.SERVER_URL}/api/v1/images/${req.file.filename}`
    })
})



app.use('/api/v1/dishe',disheRoute)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/newdishes',newdishesRoute)
app.use('/api/v1/populardishes',populardishesRoute)
app.use('/api/v1/dishes',dishesRoute)
app.use('/api/v1/cartData',cartDataRoute)




app.listen(port,() => {
    // connect()
    console.log("server listening on port",port)
})

// connect().then(() => {
//     app.listen(port, (error) => {
//         if (!error) {
//             console.log("server listening on port", port);
//         } else {
//             console.log("Error :", error);
//         }
//     });
// });



// export default app;