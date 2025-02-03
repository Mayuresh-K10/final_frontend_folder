import { Box, Typography } from "@mui/material";
import React from "react";
import IirfTable from "./IirfTable";
const Iirf = () => {
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
        IM Bangalore IIRF Ranking 2023
      </Typography>

      <Typography
        sx={{
          width: 924,
          height: 41,
          color: "#210366",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        IIM Bangalore has been ranked as the second best institute among
        B-Schools of India by IIRF Ranking 2023. The list of parameters and
        their respective scores as follows:-
      </Typography>
      <IirfTable />
    </Box>

  );
};

export default Iirf;
