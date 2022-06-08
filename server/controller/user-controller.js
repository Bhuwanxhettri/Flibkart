import { request } from "express"
import User from '../model/user-schema.js';

// backend api has two arugmnet response and request
export const userSignup=async (request,response)=>{
    try{
        const exist = await User.findOne({username:request.body.username});
        if(exist){
            return response.status(401).json({message:'Username already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({message:user});

    }catch(error){
        response.status(500).json({message:error.message});
        //  500 is internal server error
          
    }
}