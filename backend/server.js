import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

// const express = require('express');
const app=express()
const port = process.env.PORT
connectDB();
connectCloudinary();

//middelware
app.use(express.json())
app.use(cors())

//api endpoint
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log("Server is running on PORT:" + port)
})