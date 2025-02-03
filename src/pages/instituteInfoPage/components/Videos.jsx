import React from 'react';
import { Box, Typography } from '@mui/material';
import Img from '../images/Group 48095468.png';

const Videos = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem',
        borderRadius: '24px',
        padding: '10px',
      }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#210366',
          }}
        >Videos</Typography>
        <img src={Img} alt="" style={{ width: '100%', marginTop: '5px', borderRadius: "16px" }} />
      </Box>
    </>
  )
}

export default Videos;
