import React from 'react';
import { Box, Typography } from '@mui/material';

const CollegeApplicationCard = (props) => {
  return (
    <Box sx={{
      display: 'flex',
      flex : 1,
      width: "100%",
      margin: "0px",
      justifyContent: "space-between",
      padding: '0px 40px 0px 40px',
      marginTop: '1rem',
      marginBottom: '0.5rem'
    }}>
      <Box sx={{
        width: '250px',
        display: 'flex',
        flex : 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '16px',
        color: '#210366',
        '@media (max-width: 770px)': {
          fontSize: "10px",
        },
      }}>
        <img src={props.img} 
          style={{
            width : "50px",
            height : "50px"
          }}
        />
        <Typography variant='inherit' sx={{ paddingX: '0.5rem' , }}>{props.university}</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        width: '760px',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '16px',
        color: '#210366',
        '@media (max-width: 770px)': {
          fontSize: "10px",
        },
      }}>
        <Typography variant='inherit' sx={{
          width: '200px',
          fontSize: '14px',
          fontWeight: '600',
          '@media (max-width: 770px)': {
            fontSize: "10px",
          },
        }}>{props.events}</Typography>
        <Typography variant='inherit' sx={{ paddingRight: '8rem' }}>{props.start}</Typography>
        <Typography variant='inherit' sx={{ fontWeight: '600', paddingRight: '6rem' }}>{props.end}</Typography>
      </Box>
    </Box>
  )
}

export default CollegeApplicationCard;
