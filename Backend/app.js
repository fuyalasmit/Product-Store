import express from 'express';
import dotenv from "dotenv"
const app = express();

dotenv.config();
app.get("/",(req,res)=>{
    res.send("Hello World ")
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

console.log(process.env.MONGO_URI);


// QImG5HmGPcNQXGpw