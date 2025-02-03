import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";

const TopCourses = () => {
  const heading = "Courses";

  const buttons = [
    {
      label: "BE/B.Tech",
      link: "/choose-courses",
    },

    {
      label: "B.Sc",
      link: "/choose-courses",
    },

    {
      label: "M.Sc",
      link: "/choose-courses",
    },
    {
      label: "ME/M.Tech",
      link: "/choose-courses",
    },

    {
      label: "Polytechnic",
      link: "/choose-courses",
    },

    {
      label: "M.Phil/Ph.D in Science",
      link: "/choose-courses",
    },
    {
      label: "B.Com",
      link: "/choose-courses",
    },
    {
      label: "BBA/BBM",
      link: "/choose-courses",
    },

    {
      label: "M.Phil/Ph.D Arts",
      link: "/choose-courses",
    },

    {
      label: "M.Phil/PH.D in Engineering",
      link: "/choose-courses",
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
        <Box>
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
        </Box>
      </Container>
    </Box>
  );
};

export default TopCourses;
