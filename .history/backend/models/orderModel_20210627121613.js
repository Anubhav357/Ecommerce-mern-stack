import mongoose from 'mongoose';

const orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref='User'
    },
    orderItems:[{
        name:{
            type:String,
            required:true
        },
        qty:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
    }],
    shippingAddress:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true}
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

const Order=mongoose.model('Order',orderSchema);

export default User;