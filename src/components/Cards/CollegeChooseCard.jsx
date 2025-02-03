import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

export default function CollegeChoose(props) {
  return (
    <Box sx={{marginBottom: '20px'}}>
      <Box sx={{
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '12px',
        padding: '10px',
        marginLeft: '2.5rem',
        width: '120px',
        height: '100px'
      }}>
        <Stack sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '600',
          fontSize: '14px',
          color: '#323C4F',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src={props.img} alt='' width="40px" height="40px" />
          <Typography variant='inherit'>{props.course}</Typography>
          <Typography variant='inherit' sx={{color: '#999999'}}>{props.college}</Typography>
        </Stack>
      </Box>
    </Box>
  );
}