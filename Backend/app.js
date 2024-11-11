import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/database.js';
import Product from './models/productModel.js';

dotenv.config();

const app = express();

app.use(express.json());   //

app.get("/",(req,res)=>{
    res.send("Hello World ")
})

app.post("/api/products",async (req,res)=>{
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please fill all the fields."})
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.log("Error in creating product:", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
})

// console.log(process.env.MONGO_URI);


app.listen(3000,()=>{
    connectDB();
    console.log('Server is running on port 3000');
})

