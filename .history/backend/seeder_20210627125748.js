import mongoose from 'mongoose';
import dotenv from  'dotenv';
import  colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config()

connectDB();

const importData=async()=>{
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
        const createdUser=await User.insertMany(users);
        const adminUser=createdUser[0];
        const sampleProducts=products.map(product=>{
            return {...product,user:adminUser}
        });
        await Product.insertMany(sampleProducts);
        console.log('Data imported!'.green.inverse);
        process.exit(0);
    } catch (e) {
        console.log(`${e}`.red.inverse);
        process.exit(1);
    }
}