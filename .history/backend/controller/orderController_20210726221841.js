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
    if(orderItems&&orderItems.length===0){
        res.status(400);
        throw new Error('No order items');
        return
    }else{
        const order=new Order({
            orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user:req.user._id,
        })
    }
})

export {addOrderItems};