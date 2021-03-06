import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user&&(await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        })
    }
    else{
        throw new Error("Invalid email or password");
    }
})

const getUserProfile=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id);
    console.log(user);
    if(user){
        res.send({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }
    else{
        throw new Error('User not found!!!');
    }
})

export {authUser,getUserProfile};