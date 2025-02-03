import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ label, link, isAdmissionButton }) => {
  return (
    <Button
      variant="text"
      sx={{
        fontSize: '0.9rem',
        textTransform: 'none',
        fontWeight: 600,
        textAlign: 'center',
        borderRadius: '12px',
        padding: '0.2rem 1.5rem',
        margin: '1rem 1rem 0 0 ',
        border: "2px solid #7B90FF",
        color: isAdmissionButton ? 'white' : '#210366',
        backgroundColor: isAdmissionButton ? '#7B90FF' : 'white',
        '&:hover': {
          backgroundColor: '#FBA862',
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        },
      }}
      href={link}
    >
      {label}
    </Button>
  );
};

export default MyButton;
