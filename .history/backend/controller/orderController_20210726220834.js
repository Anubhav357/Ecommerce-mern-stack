import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const addOrderItems=asyncHandler(async(req,res)=>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    }=req.body;
})