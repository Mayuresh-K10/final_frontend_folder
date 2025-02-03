import {  Typography,Box } from "@mui/material";
import React from "react";

const OutlookIim = () => {
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
      <Typography
        sx={{
          width: 486,
          height: 23,
          color: "#210366",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
         
          wordWrap: "break-word",
        }}
      >
        IIM Bangalore Outlook I-Care MBA Ranking 2022
      </Typography>
      
      <Typography
        sx={{
          width: 924,
          height: 16,
          color: "#210366",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
             wordWrap: "break-word",
        }}
      >
        IIM Bangalore is ranked as the 2nd best B-School in Outlook I-Care MBA
        Ranking 2022 among Top 100 MBA Colleges in India.
      </Typography>
    </Box>
  );
};

export default OutlookIim;
