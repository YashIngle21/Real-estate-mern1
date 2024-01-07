import User from "../models/user.model.js";
import bcrpytjs from "bcryptjs"


const signup = async (req,res,next)=>{
    const { username, email, password} = req.body
    const hashedPasssword = bcrpytjs.hashSync(password,10);
    const newUser = new User({username, email, password:hashedPasssword })
    
    try{
        await newUser.save();
        res.status(201).json("User created successfully")
    }catch(error){
        next(error);
    }

};

export default signup;