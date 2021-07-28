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

const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    const user=await User.findOne({email});
    if(user){
        res.status(400);
        throw new Error('User already exists. Bad request');
    }
    else{
        const user=await User.create({
            name,
            email,
            password,
        });
        res.send({...user,generateToken(user._id)});
    }
});

const getUserProfile=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id);
    if(user){
        res.send({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }
    else{
        res.status(404);
        throw new Error('User not found!!!');
    }
})

export {authUser,getUserProfile,registerUser};