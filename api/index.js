import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from './routes/auth.route.js' 

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO)
    .then (()=>{
        console.log("COnnected to mongodb");
    }).catch((err)=>{
        console.log(err);
    });


app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.listen(3000,()=>{
    console.log("serever running on port 3000.!")
})





