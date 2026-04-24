import express from 'express'
import mongoose  from 'mongoose'

import multer from 'multer'
import path from 'path'

import cors from 'cors'
import disheRoute from './routes/dishe.js'
// './routes/dishe.js'
import uploadImage from './routes/upload.js'
import authRoute from './routes/auth.js'
import newdishesRoute from './routes/newDishes.js'
import populardishesRoute from './routes/popularDishes.js'
import cartDataRoute from './routes/cartdata.js'
import dishesRoute from './routes/dishes.js'

import cookieParser from "cookie-parser"

import dotenv from 'dotenv';
dotenv.config();



///////midleware
dotenv.config()
const app =express()
const port = process.env.PORT || 8000
const corsOptions = {
    
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())



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










app.use("/api/v1/images",uploadImage)


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




