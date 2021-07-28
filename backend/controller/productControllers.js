import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const getProduct=asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    res.send(products);
})

const getProductById=asyncHandler(async(req,res)=>{
    const product= await Product.findById(req.params.id);
    if(product===undefined){
        res.status(404);
        throw new Error({message:'Product not found'});
    }
    res.send(product);
})

export {
    getProduct,
    getProductById
}