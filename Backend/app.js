import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/database.js';
import productRoutes from './routes/productRoute.js'



dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());   //allows us to accept Json data in req.body

app.get("/",(req,res)=>{
    res.send("Hello World ")
})

app.use("/api/products", productRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log('Server is running on port',PORT);
})

