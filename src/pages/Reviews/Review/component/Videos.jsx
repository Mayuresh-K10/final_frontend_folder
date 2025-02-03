import React from 'react';
import { Box, Typography } from '@mui/material';
import Img from '../../assets/Group 48095468.png';

const Videos = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem',
        borderRadius: '28px',
        padding: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 40px 0px #7B90FF26'
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#210366',
          }}
        >Videos</Typography>
        <img src={Img} alt="" style={{ width: '100%', marginTop: '5px' }} />
      </Box>
    </>
  )
}

export default Videos;
