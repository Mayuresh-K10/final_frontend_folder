import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";

const Class10th = () => {
  const heading = "CBSE 10th Exam ";
  const buttons = [
    {
      label: "CBSE Class 10",
      link: "/exam",
    },
    {
      label: "CBSE Class 10th result",
      link: "/exam",
    },
    {
      label: "CBSE Class 10th Exam Date",
      link: "/exam",
    },
    {
      label: "CBSE Class 10th Syllabus",
      link: "/exam",
    },
    {
      label: "CBSE",
      link: "/exam",
    },
    {
      label: "CBSE Class 10th Admit card",
      link: "/exam",
    },
    {
      label: "CBSE Class 10th Previous Year Paper",
      link: "/exam",
    },
    {
      label: "NCERT Solutions Class 10th Science",
      link: "/exam",
    },
    {
      label: "CBSE Class 10th Question Bank",
      link: "/exam",
    },
    {
      label: "CBSE Class 10th Previous Year Toppers",
      link: "/exam",
    },
    {
      label: "CBSE 10th Student Testimonials",
      link: "/exam",
    },
  ];

  return (
    <Box
      sx={{
        border: "2px solid lightgray",
        borderRadius: "18px",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#210366",
            fontWeight: 700,
            fontSize: "1.3rem",
            marginTop: "5px",
          }}
        >
          {heading}
        </Typography>
        <Box
          sx={{
            height: "400px",
            margin: "0.9rem 0",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "10px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#7B90FF",
              borderRadius: "6px",
            },
          }}
        >
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Class10th;
