import mongoose from 'mongoose';

const connectDB=async()=>{
    console.log(process.env.MONGO_URI);
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true
        })
        console.log(`MongoDB connected ${conn.connection.host}`);
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}

export default connectDB;