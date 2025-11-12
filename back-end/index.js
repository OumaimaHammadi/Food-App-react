const port =9000
import express from 'express'

import mongoose  from 'mongoose'

import multer from 'multer'
import path from 'path'
import cors from 'cors'
import disheRoute from './routes/dishe.js'
import authRoute from './routes/auth.js'
import newdishesRoute from './routes/newDishes.js'
import populardishesRoute from './routes/popularDishes.js'
import cartDataRoute from './routes/cartdata.js'
import dishesRoute from './routes/dishes.js'



///////midleware
const app = express()
app.use(express.json())
//app.use(cors())


app.use(
  cors({
    origin: [
      "https://food-app-react-front-end.vercel.app", // your React frontend
      "http://localhost:3000" // for local dev
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Database Connection with MongoDB

// mongoose.connect('mongodb://127.0.0.1:27017/Food-App-react')


const isDev = process.env.NODE_ENV !== "production";

const mongoURI = isDev
  ? "mongodb://127.0.0.1:27017/Food-App-react" // Local (MongoDB Compass)
  : process.env.MONGO_URI; // Cloud / Production URI

if (!mongoURI) {
  throw new Error("MongoDB URI is missing! Check your environment variables.");
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine 
const storage = multer.diskStorage({
    // destination: './upload/images',
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
        image_url:`http://localhost:${port}/api/v1/images/${req.file.filename}`
    })
})



app.use('/api/v1/dishe',disheRoute)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/newdishes',newdishesRoute)
app.use('/api/v1/populardishes',populardishesRoute)
app.use('/api/v1/dishes',dishesRoute)
app.use('/api/v1/cartData',cartDataRoute)





app.listen(port,(error) => {
    if(!error){
        console.log("server listening on port",port)


    }

    else{
        console.log("Error :" ,error)
    }
})

// export default app;