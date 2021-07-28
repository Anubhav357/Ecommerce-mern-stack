import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
const app=express();
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
app.use(express.json());//with app.use(express.json()) we do not need to send data res.json();
app.use('/api/users',userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders',orderRoutes);
app.get('/api/config/paypal',(req,res)=>res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound);

app.use(errorHandler);

const PORT=5000||process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,()=>{
    console.log(`App listening at port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.underline);
})