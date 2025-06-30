import express from "express";
import connect from "./db/connect.js";
import userRouter from './routes/user.js'
import productRouter from "./routes/products.js"; 
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();


const port = process.env.PORT;
const app = express()
connect()

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use('/api/products',productRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
