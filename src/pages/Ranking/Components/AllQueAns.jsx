import { Box, Typography } from "@mui/material";
import React from "react";
import questions from "../Data.js";
import QueAns from "./QueAns.jsx";
const AllQuesAns = () => {
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
      <Typography variant='h5' sx={{
        color: "#000080",
        fontWeight: "bold",
        fontSize: "1.2rem",
        paddingTop: '0.5rem',
        fontFamily: "Poppins, sans-serif",


      }} > IIM Bangalore: 210 Answered questions</Typography>
      {questions.map((answer, index) => {
        return <QueAns key={index} {...answer} />;
      })}
    </Box>
  );
};

export default AllQuesAns;