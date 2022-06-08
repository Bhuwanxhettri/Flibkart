import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     firstname:{
         type:String,
         required:true,
         trim:true,
         min:3,
         max:20
     },
     lastname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true, // mongo db do index by defalut
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:20
    },
    phone:{
        type:String,
        required:true
    }
});

// making a model
const user = mongoose.model('user',userSchema);
export default user;

