import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';


//App Configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary();


//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});