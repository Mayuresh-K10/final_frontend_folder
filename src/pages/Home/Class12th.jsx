import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";

const Class12th = () => {
  const heading = "CBSE 12th Exam";
  const buttons = [
    {
      label: "CBSE Class 12",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th result",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Previous Year Paper",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Syllabus",
      link: "/exam",
    },
    {
      label: "NCERT Solutions Class 12th Physics",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Exam Date",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Admit card",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Student Testimonials",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Question Bank",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Hall Ticket",
      link: "/exam",
    },
    {
      label: "CBSE Previous year Toppers",
      link: "/exam",
    },
    {
      label: "CBSE Toppers",
      link: "/exam",
    },
    {
      label: "CBSE Question Pattern",
      link: "/exam",
    },
    {
      label: "CBSE Class 12th Notes",
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
      <Container>
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

export default Class12th;
