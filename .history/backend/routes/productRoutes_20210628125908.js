import express from 'express';
const router=express.Router();
import Product from '../models/productModel';
import asyncHandler from 'express-async-handler';
router.get('/api/products',asyncHandler(async(req,res)=>{
    const products=Product.find({});
    res.send(products);
}))

router.get('/api/products/:id',(req,res)=>{
    const product=products.find(product=>product._id===req.params.id);
    res.send(product);
})

export default router;