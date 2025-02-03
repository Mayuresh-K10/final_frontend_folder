import React from "react";
import { Box, Typography } from "@mui/material";
import CareerTable from "./CareerTable";
import ProgTable from "./ProgTable";
import DiversityTable from "./DiversityTable";
import FacultyTable from "./FacultyTable";
import InterTable from "./InterTable";

const FtGlobalRanking = () => {
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
        IIM Bangalore FT Global MBA Ranking 2023
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
        IIM Bangalore has secured 52nd position in FT Global MBA Rankings 2022.
        The main categories that decide the overall ranking include Career
        Progression, Programme Assessment, Diversity Assessment, Faculty
        Expertise and International Opportunities.
      </Typography>
      <CareerTable/>
      <ProgTable/>
      <DiversityTable/>
      <FacultyTable/>
      <InterTable/>
    </Box>
  
  );
};

export default FtGlobalRanking;
