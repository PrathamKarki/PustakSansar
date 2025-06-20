import { Router } from "express";
import bcrypt from "bcrypt";
const saltRounds = 10;
import User from '../models/user.js'


const userRouter = Router();

userRouter.post('/register', async (req, res) => {
    //check if email already exist
    const user = await User.findOne({email: req.body.email})
    if(user) return res.send('user already exists')
    else {
    //hasing for password
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    //create the user in the db
    User.create(req.body)}
    return res.send('user registered');
    
});

userRouter.post('/login', async (req, res) => {
    // step 1: email should exist
    const user = await User.findOne({email: req.body.email})

    if(!user) return res.send({message: 'Email not found'})
    //step 2: check if password matches to the db
    const isMatched = await bcrypt.compare(req.body.password, user.password)
    if(!isMatched) return res.send({message: "Invalid Password!"});
    return res.send({
        message: 'Logged in successfully',
        user: user,
        isLoggedIn: true
    })
});


userRouter.get('/users', async(req,res)=>{
    const data = await User.find()
    return res.send(data);
})



export default userRouter;