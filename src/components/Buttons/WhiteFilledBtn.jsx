import React from 'react';
import Button from '@mui/material/Button';
  
const WhiteFilledBtn = ({ label, link }) => {
  return (
      <Button
        variant="contained"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '1.1rem',
          textTransform : 'none',
          fontWeight: 600,
          lineHeight: '1.3rem',
          letterSpacing: '0em',
          textAlign: 'center',
          padding: '0.7rem 2rem',
          margin: '1rem 1rem 0 0 ',
          color: '#7B90FF',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#7B90FF',
            color: 'white',
          },
        }}
        href={link}
      >
        {label}
      </Button>
  );
};

export default WhiteFilledBtn;
