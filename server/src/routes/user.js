import { Router } from "express";
import User from '../models/user.js'

const userRouter = Router();

userRouter.post('/register', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(user) return res.send('user already exists')
    else User.create(req.body)
    res.send('user registered');
    
})



export default userRouter;