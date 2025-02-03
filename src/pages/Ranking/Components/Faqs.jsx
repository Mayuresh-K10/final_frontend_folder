import { Box, Typography } from "@mui/material";
import React from "react";
import  FaqsSet  from './FaqsSet';

const Faqs = () => {
  return (
    <Box
    sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        marginTop: 2,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    }}
>
    <Box>
      <Typography
        sx={{
          width: 488,
          height: 23,
          color: "#210366",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
           wordWrap: "break-word",
        }}
      >
        IIM Bangalore Ranking FAQs
      </Typography>
       <FaqsSet/> 
    </Box>
    </Box>
  );
};

export default Faqs
