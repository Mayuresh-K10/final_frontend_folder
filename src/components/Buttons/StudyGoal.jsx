import { Box, Typography } from '@mui/material';
import React from 'react';
import { Image } from '../../utils/Image';

const StudyGoal = (props) => {
  return (
    <Box
      sx={{
        border: "2px solid #553cdf",
        cursor: "pointer",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "120px",
        width: "120px",
        borderRadius: "16px",
        transition: "background-color 0.3s ease",
        "&:hover": {
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"
        },
      }}
    >
      <Image src={props.img} alt={props.dt} style={{ objectFit: 'cover', height: '60px', width: '60px' }} />
      <Typography>
        {props.dt}
      </Typography>
    </Box>
  );
}

export default StudyGoal;