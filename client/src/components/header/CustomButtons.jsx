import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CustomButtons = () => {
  return (
    <>
     
      <Box className="py-4 px-5 flex gap-8">
        <Typography className="py-4">Become a Seller</Typography>
        <Typography className="py-4">More</Typography>
        <Box>
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </Box>
        <button className=" px-6 mx-4 bg-blue-400 text-white  font-semibold text-sm leading-tight rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
        Login
      </button>
      </Box>

     
    </>
  );
};

export default CustomButtons;
