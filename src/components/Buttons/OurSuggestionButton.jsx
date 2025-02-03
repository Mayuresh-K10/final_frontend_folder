import React from 'react';
import Button from '@mui/material/Button';

const OurSuggestionButton = ({ label, link }) => {
  return (
      <Button
        variant="contained"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          textTransform : 'none',
          fontWeight: 600,
          color: '#210366',
          lineHeight: '1.3rem',
          letterSpacing: '0em',
          textAlign: 'center',
          borderRadius: '12px',
          margin: '0.5rem 0.5rem 0 0 ',
          padding: '0.5rem 1.5rem',
          background: 'rgba(123, 142, 255, 0.3)',
            whiteSpace: 'nowrap',
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

export default OurSuggestionButton;
