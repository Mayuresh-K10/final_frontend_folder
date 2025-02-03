import { Box, Typography } from '@mui/material';
import React from 'react';

const Data = () => {
  const BlueButton = styled(Box)({
    marginTop: "40px",
    width: "1021px",
    height: "701px",
    top: "1787px",
    left: "216px",
    padding: "0px 0px 0px 40px",
    borderRadius: "28px",
    gap: "10px",
    background: "#EEECFE",
  });

  return (
    <BlueButton>
      <Typography
        sx={{
          color: "#7B90FF",
          fontFamily: "Inter",
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "21px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        IIM Bangalore Placements 2023
      </Typography>

      <Box
        sx={{
          marginTop: "40px",
          width: "963px",
          height: "620px",
          padding: "0px 0px 0px 40px",
          gap: "147px",
          display: 'flex',
          gap: "200px",
        }}
      >
        <Box
          sx={{
            width: "388px",
            height: "620px",
            display: "flex",
          }}
        >
        </Box>
      </Box>
    </BlueButton>
  );
};

export default Data;
