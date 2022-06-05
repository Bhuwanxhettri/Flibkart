import NavBar from "./NavBar";
import Banner from "./Banner";
import { Fragment} from "react";
import {Box} from '@mui/material';


const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Box className="pt-1 pb-3 px-2 bg-gray-200">
        <Banner />
      </Box>
    </Fragment>
  );
};

export default Home;
