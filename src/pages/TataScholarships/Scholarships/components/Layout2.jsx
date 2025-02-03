import { Box,  Typography } from '@mui/material'
import React from 'react'

export default function Layout2() {
  return (
    <Box>
      <Box>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontSize: '36px',
          fontWeight: '600',
          marginTop: '2rem',
          color: '#210366',
          '@media (max-width:600px)':{
            fontSize:"20px",
            marginLeft:"3rem"
          }
        }}>
          Similar Scholarships
        </Typography>
      </Box>
    </Box>
  )
}
