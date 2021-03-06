import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const addOrderItems=asyncHandler(async(req,res)=>{
    console.log('Hello');
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
        const createdOrder=await order.save();
        console.log(createdOrder);
        res.status(200).send(createdOrder);
    }
})

const getOrderById=asyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )
    if(order){
        res.send(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})

const updateOrderToPaid=asyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params.id);
    if(order){
        order.isPaid=true;
        order.paidAt=Date.now();
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address:req.body.payer.email_address,
        }
        const updatedOrder=await order.save();
        res.send(updatedOrder)
    }else{
        res.status(404);
        throw new Error('Order not found');
    }
})

const getMyOrders=asyncHandler(async(req,res)=>{
    const orders=await Order.find({user:req.user._id});
    res.send(orders);
})

export {addOrderItems,getOrderById,updateOrderToPaid,getMyOrders};