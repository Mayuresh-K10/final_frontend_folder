import { Box,  Typography } from "@mui/material";
import React from "react";

const ParameterWiseScore = () => {
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
          width: 580,
          height: 23,
          color: "#210366",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        IIM Bangalore NIRF Ranking 2022 Parameter-Wise Scores
      </Typography>

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
        Have a look at the parameter-wise scores for IIM Bangalore NIRF Ranking
        2022:-
      </Typography>
    </Box>
  );
};

export default ParameterWiseScore;
