import mongoose from 'mongoose';

const reviewSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    rating:{
        required:true,
        type:Number,
        default:5
    },
    comment:{
        required:true,
        type:String
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const productSchema=mongoose.Schema({
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
    },
    description:{
        type:String,
        required:true
    },
    reviews:[reviewSchema],
    price:{
        type:Number,
        default:0,
        required:true
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    rating:{
        type:Number,
        required:true,
        default:0
    }
},{
    timestamps:true
})

const Product=mongoose.model('Product',productSchema);

export default Product;