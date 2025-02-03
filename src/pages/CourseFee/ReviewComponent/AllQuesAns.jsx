import { Box, Container, Typography } from "@mui/material";
import React from "react";
import questions from "../Review/DataQa.js";
import QueAns from "./QueAns.jsx";
const AllQuesAns = () => {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      padding: "0px ",
      paddingTop: "2rem !important",
    }}>
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",

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


      }} > 210 Answered questions</Typography>
        {questions.map((answer, index) => {
          return <QueAns key={index} {...answer} />;
        })}
      </Box>
    </Container>
  );
};

export default AllQuesAns;