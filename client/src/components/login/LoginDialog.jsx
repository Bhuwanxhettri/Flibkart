import React from "react";
import { useState } from "react";
import { Dialog, Box, TextField, Typography} from "@mui/material";

import { authenticateSignup } from "../../service/api";

const accountInitialValues={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
}

const signupInitialValue={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
}

export default function LoginDialog({ open, setOpen }) {

  const [account,toggleAccount]=useState(accountInitialValues.login);
  const [signup,setSignup] = useState(signupInitialValue);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup =()=>{
    toggleAccount(accountInitialValues.signup);
  }

  const onInputChange =(e)=>{
     setSignup({...signup,[e.target.name]:e.target.value});
    // we use spread operator coz to avoid overide user input value by arry destructruing
  }

  const signupUser=async ()=>{
      let response=  await authenticateSignup(signup);
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box className="flex   rounded-lg">

        
          <Box className=" w-6/12 bg-blue-600 py-10 px-5">
            <Typography variant="h3" className=" py-8 text-2xl font-bold text-white">{account.heading}</Typography>
            <Typography className="text-white"> {account.subHeading}</Typography>
          </Box>

          {
            account.view === 'login'?
               
                <Box className="px-5 py-10 w-12/12">                  
                <TextField variant="standard" className="w-full px-2 " label="Enter Email/Mobile number" />
                <div className="py-2"></div>
                <TextField variant="standard" className="w-full px-2" label="Enter Password" />
                <p className="py-4 text-xs text-gray-500">
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
                </p>
                <button type="button" class="inline-block px-6 py-2.5 bg-orange-500 w-full text-white font-semibold text-md leading-tight  rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out">Login</button>
                <Typography className="text-center text-gray-700 font-bold py-4"> OR</Typography>
                <button type="button" class="inline-block px-6 py-2.5 bg-white border-2 w-full text-blue-600  font-semibold text-md leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Request OTP</button>
                <Typography className="pt-16 pb-2 text-blue-600 cursor-pointer hover:underline" onClick={()=>toggleSignup()} >New to Flipkart? Create an account</Typography>
                </Box>
            :

                <Box className="px-5 py-10 w-12/12">
                    <TextField variant="standard" className="w-full px-2 " name="firstname" onChange={(e)=>onInputChange(e)} label="Enter First Name" />
                    <div className="py-2"></div>
                    <TextField variant="standard" className="w-full px-2 " name="lastname" onChange={(e)=>onInputChange(e)}  label="Enter Last Name" />
                    <div className="py-2"></div>
                    <TextField variant="standard" className="w-full px-2 " name="username" onChange={(e)=>onInputChange(e)}  label="Enter User Name" />
                    <div className="py-2"></div>
                    <TextField variant="standard" className="w-full px-2 " name="email" onChange={(e)=>onInputChange(e)} label="Enter Email" />
                    <div className="py-2"></div>
                    <TextField variant="standard" className="w-full px-2" name="password" onChange={(e)=>onInputChange(e)}  label="Enter Password" />
                    <div className="py-2"></div>
                    <TextField variant="standard" className="w-full px-2" name="phone" onChange={(e)=>onInputChange(e)} label="Phone Number"/>
                 
                    <button type="button" onClick={()=>signupUser()} class="inline-block mt-6 px-6 py-2.5 bg-orange-500 w-full text-white font-semibold text-md leading-tight  rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out">Continue</button>
                </Box>

          }
          <Box>
          <span onClick={()=>handleClose()} className="inline-block  p-1 px-2 font-bold text-gray-600 font-mono text-3xl cursor-pointer">X</span> 

          </Box>
        </Box>
      </Dialog>
    </>
  );
}
