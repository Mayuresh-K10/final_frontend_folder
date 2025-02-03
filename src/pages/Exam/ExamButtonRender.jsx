import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ExamButtonRender = () => {
  const buttons = [
    "JEE Main",
    "NEET",
    "CAT",
    "GATE",
    "CLAT",
    "JEE Advanced",
    "COMEDK UGET",
    "AP EAPCET",
    "WBJEE",
    "KCET",
  ];

  return (
    <Container>
      <Box
        sx={{
          marginLeft: "-5px",
          marginRight: "5rem",
          marginTop: "-4rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "flex-start",
        }}
      >
        {buttons.map((label, index) => (
          <Typography
            key={index}
            variant="body1"
            component="p"
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              fontWeight: "bold",
              color: "rgb(43,116,149)",
              cursor: "pointer",
            }}
          >
            {label}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default ExamButtonRender;
