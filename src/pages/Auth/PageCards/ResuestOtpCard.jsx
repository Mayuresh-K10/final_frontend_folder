import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../components/LeftCard";
const ResuestOtpCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "900px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "1rem",
        gap: "1rem",
        '@media (max-width:800px)': {
          display : 'flex',
          flexDirection: 'column',
          justifyContent : 'center',
          alignItems : 'center',
          padding : '0',
          maxWidth : '100%',
        }
      }}
    >
      <LeftCard />
    </Box>
  );
};

export default ResuestOtpCard;
