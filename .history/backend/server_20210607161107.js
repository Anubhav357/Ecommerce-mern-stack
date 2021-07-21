const express=require('express');
const products=require('./data/products');
const dotenv=require('dotenv');
const app=express();
dotenv.config();
app.use(express.json());//with app.use(express.json()) we do not need to send data res.json();
const PORT=5000||process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/api/products',(req,res)=>{
    res.send(products);
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find(product=>product._id===req.params.id);
    res.send(product);
})

app.listen(PORT,()=>{
    console.log(`App listening at port ${PORT}`);
})