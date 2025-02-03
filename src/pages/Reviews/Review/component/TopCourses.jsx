import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const TopCourses = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem', 
        borderRadius: '28px', 
        padding: '20px', 
        backgroundColor: '#FFFFFF', 
        boxShadow: '0px 0px 40px 0px #7B90FF26',
      }}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '700', 
          fontSize: '20px',
          color: '#210366'
        }}>Top Courses</Typography>
        <Stack direction="row" spacing={14} sx={{marginTop: '1rem'}}>
          <Stack spacing={3} sx={{fontFamily: 'Poppins', fontStyle: 'bold', fontWeight: '500', fontSize: '14px', color: '#210366'}}>
            <Typography variant='inherit'>Ph.D Finance & Accounts</Typography>
            <Typography variant='inherit'>Ph.D Marketing</Typography>
            <Typography variant='inherit'>PGPM</Typography>
          </Stack>
          <Stack spacing={3} sx={{fontFamily: 'Poppins', fontStyle: 'bold', fontWeight: '600', fontSize: '12px', color: '#FF7900'}}>
            <Typography variant='inherit'><span><FiberManualRecordIcon sx={{width: '8px', height: '8px'}} /> 5 Years</span></Typography>
            <Typography variant='inherit'><span><FiberManualRecordIcon sx={{width: '8px', height: '8px'}} /> 5 Years</span></Typography>
            <Typography variant='inherit'><span><FiberManualRecordIcon sx={{width: '8px', height: '8px'}} /> 2 Years</span></Typography>
          </Stack>
        </Stack>
        <Typography variant='inherit' sx={{
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '500',
            fontSize: '14px',
            color: '#3EBA9F'
        }}><span><FiberManualRecordIcon sx={{width: '8px', height: '8px'}} /> AVG FEE - ₹1,225,000/Yr</span></Typography>
        <Button
            sx={{
                padding: '8px 28px 8px 28px',
                fontFamily: 'Poppins',
                fontStyle: 'bold',
                fontWeight: '600',
                fontSize: '14px',
                textTransform: 'capitalize',
                color: '#FFFFFF',
                backgroundColor: '#FF7900',
                borderRadius: '12px',
                marginTop: '1rem',
                marginLeft: '3.5rem'
            }}
        >View More Courses (14)</Button>
      </Box>
    </>
  )
}

export default TopCourses;
