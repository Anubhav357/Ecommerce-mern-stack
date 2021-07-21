import mongoose from 'mongoose';

const connectDB=async()=>{
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log(`MongoDB connected ${conn.connection.host}`);
}

export default connectDB;