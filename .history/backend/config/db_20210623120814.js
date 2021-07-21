const mongoose=require('mongoose');

const connectDB=async()=>{
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
}

export default connectDB;