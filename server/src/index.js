import express from "express";
import connect from "./db/connect.js";
import userRouter from './routes/user.js'
import cors from 'cors';


const port = 8080
const app = express()
connect()

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
