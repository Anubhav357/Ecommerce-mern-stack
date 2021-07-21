import express from 'express';
const router=express.Router();
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
router.get('/',asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    console.log(products);
    res.send(products);
}))

router.get('/:id',asyncHandler(async(req,res)=>{
    console.log(req.params.id);
    const product= await Product.findById(req.params.id);
    if(product===undefined){
        res.status(404);
        throw new Error({message:'Product not found'});
    }
    res.send(product);
}))

export default router;