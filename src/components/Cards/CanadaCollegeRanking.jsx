import React from 'react';
import { Box, Typography } from '@mui/material';

export default function CanadaCollegeRanking(props) {
  return (
    <Box sx={{
      display: 'flex',
      width: "100%",
      margin: "0px",
      justifyContent: "space-between",
      padding: '0px 40px 0px 40px',
      marginTop: '1rem',
      marginBottom: '0.5rem',
    }}>
      <Box sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontStyle: 'bold',
        fontSize: '16px',
        color: '#210366',
        '@media (max-width: 770px)': {
          fontSize: "10px",
          justifyContent: 'flex-start',
        },
      }}>
        <img src={props.img}
          style={{
            width: '50px',
            height: '50px',
          }}
        />
        <Typography variant='inherit'
          sx={{
            paddingLeft: '2rem',
            '@media (max-width: 770px)': {
              paddingLeft: '0.3rem',
              marginRight: "1rem",
            }
          }}>{props.college}</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px',
        justifyContent: 'space-evenly',
        width: '380px',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '16px',
        color: '#210366',
        '@media (max-width: 770px)': {
          fontSize: "10px",
        },
      }}>
        <Typography variant='inherit'
          sx={{
            width: "100px"
          }}>{props.ranking}</Typography>
        <Typography variant='inherit'
          sx={{
            paddingRight: '2.5rem',
            width: "100px"
          }}
        >{props.streams}</Typography>
      </Box>
    </Box>
  )
}