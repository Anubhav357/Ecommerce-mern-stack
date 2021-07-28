import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=User.findOne({email});
})

export {authUser}