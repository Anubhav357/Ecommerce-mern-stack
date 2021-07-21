import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const User=mongoose.model('User',userSchema);

export default User;