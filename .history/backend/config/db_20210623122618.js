import mongoose from 'mongoose';

const connectDB=async()=>{
    console.log(process.env.MONGO_URI);
    try{
        const conn=await mongoose.connect('mongodb+srv://Anubhav007:rkoanubhav@proshop.fgfo6.mongodb.net/proshop?retryWrites=true&w=majority',{
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