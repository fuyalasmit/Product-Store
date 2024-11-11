import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{
    timestamps: true  //esle chahi createdAt and updatedAt sangei rakhxa
});


const Product = mongoose.model("Product", productSchema)

export default Product;