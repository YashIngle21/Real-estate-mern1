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
        default: "https://imgs.search.brave.com/VJpsdQKea8qD1KSdHcoDR4fh9R_G-qxhFcPH5mwZvkY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nZmluZC5jb20v/aW1nLzMyMGJnLnBu/Zw",
    },
},{ timestamps: true });

const User = mongoose.model("User",userSchema);

export default User;