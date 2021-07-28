import mongoose from 'mongoose';
import bcrypt from 'mongoose';

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
})

userSchema.methods.matchPassword=async function(password){
    return await
}

const User=mongoose.model('User',userSchema);

export default User;