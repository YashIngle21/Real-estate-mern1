import User from "../models/user.model.js";
import bcrpyt from "bcrypt"
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res,next)=>{
    const { username, email, password} = req.body
    const hashedPasssword = bcrpyt.hashSync(password , 10);
    const newUser = new User({username, email, password:hashedPasssword })
    
    try{
        await newUser.save();
        res.status(201).json("User created successfully")
    }catch(error){
        next(error);
    }

};

export const signin = async (req,res,next) =>{
    const {email,password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404,"User not Found"))
        const validPassword = bcrpyt.compareSync(password,validUser.password);
        if (!validPassword) return next(errorHandler(401,"Wrong credentials!!!"));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:pass, ...rest} = validUser._doc
        res.cookie('access_token',token,{ httpOnly: true})
        .status(200).json(rest);
        //if wanna limit cookie time then add {new Date(Date.now() +24*60*60*1000)} rather than being a session
        
    }catch(error){
        next(error);
    }
}

