import { Router } from "express";
import bcrypt from "bcrypt";
const saltRounds = 10;
import User from '../models/user.js'


const userRouter = Router();

userRouter.post('/register', async (req, res) => {
    // step 1:check if email already exist
    try{
        const user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json
            ({success: false, message: 'User already exists'});
        }

        // step 2: hash the password
        const hashedPassoword = await bcrypt.hash(req.body.password, saltRounds);

        await User.create(req.body)

        // step 3: Create user with hased passowrd

        const newUser = await User.create({
            ...req.body,
            password: hashedPassoword,
        })
        // Step 4: Send success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully. Please log in.",
      user: {
        _id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
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