import React from "react";
import BoldHeading from "../Components/BoldHaeding";
import Imag from "../Assets/Group 48095703.png";
import { Box, Container, Typography } from "@mui/material";
const FooterCard = () => {
  return (
    <Container maxWidth="xl" sx={{ marginY: "3rem" }}>
      <BoldHeading>How to use collegecue admission predictor?</BoldHeading>
      <Typography
        variant="h3"
        sx={{
          fontSize: "1rem",
          lineHeight: "2rem",
          letterSpacing: "0em",
          color: "#2F1370",
          fontWeight: "500",
          marginY: "1rem",
        }}
      >
        Done with your Exam? Well, we know you are not quite done yet! The
        anxiety of results must be keeping you up at nights. Not anymore folks-
        Get your expected rank and colleges with our Rank Predictor. Know where
        you’ll land with your expected rank and plan your battles ahead.
      </Typography>
      <BoldHeading>
        Follow these steps to check your rank with our College Predictor
      </BoldHeading>
      <Box sx={{
        width: '100%',
      }}>
        <img width='100%' src={Imag} alt="ghjf" />
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Poppins",
          fontSize: "1rem",
          lineHeight: "2rem",
          letterSpacing: "0em",
          color: "#2F1370",
          fontWeight: "500",
          marginBottom: "1rem",
        }}
      >
        Choose your Exam from the list and enter necessary details such as your
        name, registration number, preferred location. Enter your expected marks
        in the next step and let us do the rest for you. Lay back in your chair
        and let the page load. Who knows, your dream colleges could be in the
        list.
      </Typography>
    </Container>
  );
};

export default FooterCard;
