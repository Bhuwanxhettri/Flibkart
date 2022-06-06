import { Box, Typography } from "@mui/material";
import {useState} from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// component
import LoginDialog from "../login/LoginDialog";

const CustomButtons = () => {

  const [open,setOpen ] = useState(false);
  const openDialog =()=>{
       setOpen(true);
  }
  return (
    <>
      <Box className="py-4 px-5 flex gap-8">
        <Typography className="py-4">Become a Seller</Typography>
        <Typography className="py-4">More</Typography>
        <Box>
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </Box>
        <button onClick={()=> openDialog()} className=" px-6 mx-4 bg-blue-400 text-white  font-semibold text-sm leading-tight rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
          Login
        </button>
        <LoginDialog open={open} setOpen={setOpen}/>
      </Box>
    </>
  );
};

export default CustomButtons;
