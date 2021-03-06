import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

mongoose.connect('mongodb://jun:5800@localhost:27017/admin',{
    dbName:'amazona',
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
});

// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// app.get('/api/products/:id',(req,res)=>{
//     const product = data.products.find((x)=>x._id === req.params.id); 
//     if (product){
//         res.send(product);
//     } else{
//         res.status(404).send({message: 'Product not Found'});
//     }
// });

// app.get('/api/products', (req,res)=>{
//     res.send(data.products);
// })

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req,res)=>{
    res.send('Server is ready');
});

app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`)
})