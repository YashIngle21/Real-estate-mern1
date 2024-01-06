import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.route.js"

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO)
    .then (()=>{
        console.log("COnnected to mongodb");
    }).catch((err)=>{
        console.log(err);
    });


//app.use(express.json());
app.use("/api/user",router);

app.listen(3000,()=>{
    console.log("serever running on port 3000.!")
})





