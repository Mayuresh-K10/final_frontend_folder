import React from 'react';
import { Box, Typography } from '@mui/material';

const CanadaFAQsCard = (props) => {
  return (
    <Box sx={{
      marginTop: '1rem',
      marginLeft: '1rem',
      padding: '0.7rem 0rem 0rem 2rem',
      width: '100%',
      height: '50px',
      border: '1px solid #7B90FF33',
      borderRadius: '12px',
    }}>
      <Typography sx={{
        font: 'Inter',
        fontStyle: 'bold',
        fontWeight: '600',
        fontSize: '14px',
        color: '#333333'
      }}>{props.question}</Typography>
    </Box>
  )
}

export default CanadaFAQsCard;
