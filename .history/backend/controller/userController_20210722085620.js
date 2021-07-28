import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=User.findOne({email});
    //console.log(user);
    if(user&&(await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:null
        })
    }
})

export {authUser}