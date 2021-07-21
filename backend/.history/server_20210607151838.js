const express=require('express');
const products=require('')
const app=express();
app.use(express.json());
const PORT=5000|process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/products/api',(req,res)=>{
    app.json(products);
})

app.listen(PORT,(port)=>{
    console.log('App listening at port 3000');
})