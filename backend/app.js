import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes.js';
import router from './routes/user-routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/user",router); 

app.use("/api/blog",blogRouter);


mongoose.connect(
  'mongodb+srv://shubham7:20045079@cluster0.k0xz3.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => app.listen(5000))
.then(()=>{
    console.log('connected to database and listening to localhost 5000 and listening to mongodb');
})
.catch((err) => console.log(err));



