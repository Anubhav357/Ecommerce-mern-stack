import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const getProduct=asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    res.send(products);
})