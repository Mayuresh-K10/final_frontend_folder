import {  Typography, Box } from "@mui/material";
import React from "react";
import OutlookIimTable  from "./OutlookIimTable";
const OutlookIimParameter = () => {
  return (
    <Box
    sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem solid",
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
          width: 739,
          height: 23,
          color: "#210366",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
           wordWrap: "break-word",
        }}
      >
        IIM Bangalore Outlook I-Care MBA Ranking 2022 ParameterWiseScore
      </Typography>
      </Box>
      <Typography
        sx={{
          width: 924,
          height: 14,
          color: "#210366",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        The list of parameters and their respective scores in Outlook I-Care MBA
        Ranking 2022 for IIM Bangalore are as mentioned below:-
        <br />
      </Typography>
      
    
    <OutlookIimTable/>
      </Box>
  );
};

export default OutlookIimParameter;
