import React from 'react';
import { Box, Typography, Stack } from '@mui/material';


const HostelReviews = () => {
  return (
    <>
      <Box sx={{
        marginTop: '1rem',
        marginLeft: '1rem',
        marginBottom: '2rem',
        borderRadius: '28px',
        width: '630px',
        padding: '20px',
        boxShadow: '0px 0px 40px 0px #7B90FF26'
      }}>
        <Stack spacing={2} sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '20px',
          color: '#210366'
        }}>
          <Typography variant='inherit'>IIM Bangalore Hostel Reviews</Typography>
          <Box sx={{height: '1px', width: '100%', backgroundColor: '#7B90FF', boxShadow: '0px 4px 40px 0px #7B90FF1A'}} />
          <Stack direction="row" spacing={1}>
            <Typography variant='inherit' sx={{fontWeight: '600', fontSize: '18px'}}>Filter By</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default HostelReviews;
