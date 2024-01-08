import mongoose from  "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://imgs.search.brave.com/EcFUtdr1k2nbyt4wiuTlcb7F3dLQlp0ZcjyQHhI4sEI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/Nzg1MTU3NC9waG90/by9wcm9maWxlLW9m/LXlvdW5nLXdvbWFu/cy1mYWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1GQjIy/UmIwM3NZZkNiTl9M/MmNoQ2psNHVTN2JU/VTdWN1U5WEUySEZx/SFpRPQ"
    }
},{ timestamps: true });

const User = mongoose.model("User",userSchema);

export default User;