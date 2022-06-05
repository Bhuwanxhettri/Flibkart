import React from 'react'
import {Box, Typography} from '@mui/material';
import { navData } from '../../constants/data';

export default function NavBar() {
  return (
    <>
      <Box className='flex justify-evenly pb-2'>
          {
              navData.map(data=>(
                  <Box >
                      <img className='mx-6' src={data.url} alt="Nav" style={{width:54}}></img>
                      <Typography className='font-semibold text-center '>{data.text}</Typography>
                  </Box>
              ))
             
          }
      </Box>
    </>
  )
}
