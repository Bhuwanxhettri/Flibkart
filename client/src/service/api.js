import axios from 'axios';
// with the help of axios we call  api or javascript fetch api

const URL='http://localhost:8000';
export const authenticateSignup=async (data)=>{
       
    try{
      return await axios.post(`${URL}/signup`,data);
    }catch(error){
        console.log('Error while calling signup api',error);
    }

}