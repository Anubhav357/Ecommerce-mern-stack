import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const authUser=asyncHandler(async(req,res)=>{
    const {email,User}=req.body;
    res.send({email,User});
})