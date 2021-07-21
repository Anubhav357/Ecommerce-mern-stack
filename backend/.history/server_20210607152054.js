const express=require('express');
const products=require('./data/products');
const app=express();
app.use(express.json());//with app.use(express.json()) we do not need to send data res.json();
const PORT=5000|process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/products/api',(req,res)=>{
    res.send(products);
})

app.listen(PORT,(PORT)=>{
    console.log(`App listening at port ${PORT}`);
})