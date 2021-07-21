import express from 'express';
const router=express.Router();
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
router.get('/',asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    console.log(products);
    res.send(products);
}))

router.get('/:id',(req,res)=>{
    const product=Product.findById(req.params.id);
    res.send(product);
})

export default router;