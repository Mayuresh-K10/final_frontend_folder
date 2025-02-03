import React from "react";
import { Box, Container, Typography } from "@mui/material";

export const QuestionAnswerCard = () => {
  return (
    <Box
      sx={{
        height: "400px",
        width: "65%",
        background: "gray",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "0.8rem",
            color: "#2F1370",
          }}
        >
          B .Tech Computer Science and Engineering
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "0.8rem",
            color: "#2F1370",
          }}
        >
          CutOff
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "0.8rem",
            color: "#2F1370",
          }}
        >
          NIT Trichy Tiruchirappalli
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          width: "100%",
          fontSize: "1rem",
          color: "#2F1370",
        }}
      >
        My JEE main rank is 1000. Can I get computer Science in NIT Trichy? y
        JEE main rank is 1000. Can I get computer Science in NIT Trichy? y JEE
        main rank is 1000. Can I get computer Science in NIT Trichy?{" "}
      </Typography>
    </Box>
  );
};
