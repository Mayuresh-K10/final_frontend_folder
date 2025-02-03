import React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';

const CollegeExamsCard = (props) => {
  return (
    <Box sx={{
      margin: '1rem 0rem 2rem 1rem',
      borderRadius: '28px',
      boxShadow: '0px 4px 40px 0px #7B90FF1A',
      padding: '10px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "350px",
      backgroundColor: "white",
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '330px' }}>
        <img src={props.img} alt='' width="50px" height="50px" />
        <Typography variant='inherit' sx={{
          fontWeight: '700',
          fontSize: '16px',
          color: '#210366',
          paddingLeft: '20px'
        }}>{props.heading}</Typography>
      </Box>
      <Divider width="200px" height="5px" sx={{ border: '1px solid #7B90FF33', marginTop: '1rem' }} />
      <Typography variant='inherit' sx={{
        fontSize: '12px',
        color: '#210366',
        marginTop: '0.5rem',
        width: '100%'
      }}>{props.content}<Link href="/study-abroad/abroadExam" sx={{ color: '#210366', fontWeight: '700', textDecoration: 'none' }}>Read more</Link></Typography>
      <Divider width="200px" height="5px" sx={{ border: '1px solid #7B90FF33', marginTop: '1rem' }} />
      <Link href="/study-abroad/abroadExam" sx={{
        marginTop: '1rem',
        textDecoration: 'none',
        fontFamily: 'Poppins',
        fontStyle: 'bold',
        fontWeight: '600',
        fontSize: '12px',
        color: '#210366',
        textTransform: 'uppercase'
      }}>{props.link}</Link>
    </Box>
  )
}

export default CollegeExamsCard;
