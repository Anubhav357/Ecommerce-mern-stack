import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
const app=express();
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();
app.use(express.json());//with app.use(express.json()) we do not need to send data res.json();
app.use('/api/products', productRoutes);

app.use((req,res,next)=>{
    const error=new Error(`Cannot find - ${req.originalUrl}`);
    res.status(404);
    next(error);
})

app.use((err,req,res,next)=>{
    const statusCode=(res.statusCode==200)?500:res.statusCode;
    res.status(statusCode).json({
        error:err.message,
        stack:(process.env.NODE_ENV==='DEVELOPMENT')?err.stack:null
    });
    next();
})

const PORT=5000||process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,()=>{
    console.log(`App listening at port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.underline);
})