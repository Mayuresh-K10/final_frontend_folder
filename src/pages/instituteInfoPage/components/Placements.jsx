import React from 'react';
import {Box, Typography, Stack} from '@mui/material';
import Img14 from '../images/Img14.png';
import Img15 from '../images/Img15.png';
import Img16 from '../images/Img16.png';
import Img17 from '../images/Img17.png';
import Img18 from '../images/Img18.png';
import Img19 from '../images/Img19.png';

const Placements = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem', 
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '28px'
      }}>
        <Box sx={{
          boxSizing: 'border-box',
          height: '57px',
          background: '#FF7900',
          borderRadius: '28px 28px 0px 0px'
        }}>
          <Box>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: '700',
              fontSize: '20px',
              color: '#FFFFFF',
              padding: '12px',
              marginLeft: '0.5rem'
            }}>Placements</Typography>
          </Box>
        </Box>
        <Box sx={{
          height: '280px',
          borderRadius: "0px 0px 28px 28px",
          marginBottom: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Stack direction="row" spacing={4} sx={{marginTop: '1rem'}}>
            <Stack sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: '500',
              fontSize: '12px',
              color: '#210366'
            }}>
              <Typography variant='inherit' sx={{fontWeight: '700', color: '#7B90FF'}}>₹8,000,000</Typography>
              <Typography variant='inherit' sx={{marginLeft: '-1rem'}}>Highest Package</Typography>
            </Stack>
            <Box sx={{height: '50px', width: '3px', backgroundColor: '#7B90FF'}} />
            <Stack sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: '500',
              fontSize: '12px',
              color: '#210366',
              paddingLeft: '15px'
            }}>
              <Typography variant='inherit' sx={{fontWeight: '700', color: '#7B90FF'}}>₹3,380,000</Typography>
              <Typography variant='inherit' sx={{marginLeft: '-1rem'}}>Average Package</Typography>
            </Stack>
          </Stack>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '600',
            fontSize: '20px',
            color: '#210366',
            marginTop: '0.5rem'  
          }}>Our Clients</Typography>
          <Stack spacing={2} sx={{marginTop: '1rem', paddingRight: '300px'}}>
            <Stack spacing={2} direction="row" sx={{width: '40px', height: '60px'}}>
              <img src={Img14} alt='' />
              <img src={Img15} alt=''/>
              <img src={Img16} alt=''/>
            </Stack>
            <Stack spacing={2} direction="row" sx={{width: '40px', height: '60px'}}>
              <img src={Img17} alt=''/>
              <img src={Img18} alt=''/>
              <img src={Img19} alt=''/>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Placements;
