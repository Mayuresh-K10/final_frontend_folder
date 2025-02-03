import React from 'react';
import HeadText from './HeadText';
import { Box } from '@mui/material';
import border from './border.png';

const InterestHeading = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '2rem',
            paddingBottom: '2rem',
        }}>
            <HeadText headText="Choose courses by Level" justify="center"/>
            <Box sx={{
                width: '200px',
                height: 'auto',
                marginTop:'-1rem',
                marginX:"auto",
            }}>
                <img src={border} alt="Border" style={{ width: '100%', height: 'auto' }} />
            </Box>
         
            
        </Box>
    );
};

export default InterestHeading;
