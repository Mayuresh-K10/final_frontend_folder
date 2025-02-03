import { Box, Container, Typography } from "@mui/material";
import React from "react";
import questions from "../Review/OffersData.js";

import CourseOffers from "./CourseOffers.jsx";
const AllCourseOffers = () => {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      padding: "0px ",
      paddingTop: "2rem",
    }}>
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
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


      }} > Courses Offered By IIM Bangalore, Bangalore</Typography>
        {questions.map((answer, index) => {
          return <CourseOffers key={index} {...answer} />;
        })}
      </Box>
    </Container>
  );
};

export default AllCourseOffers;