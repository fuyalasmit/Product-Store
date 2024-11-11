import Product from "../models/productModel.js";
import mongoose from "mongoose";

export const getProducts= async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products})
        // res.send(products)  yehi kaam vako ho mathi lol
    } catch (error) {
        console.log("Error in fetching products.", error.message);
        res.status(500).json({success: failed, message: "Server Error"})
    }
}

export const postProducts = async (req,res)=>{
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
}

export const deleteProducts = async (req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted"});
    } catch (error) {
        console.log("Error in deleting products.", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
    
}

export const updateProducts = async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
        res.status(500).json({success: false, message:"Server Error"})
    }
    
}