import React from 'react';
import { Box, Button } from "@mui/material";
import MyButton from "./MyButton";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const CollegeArticleCard = () => {
  const buttons = [
    {
      label: "BE/B.Tech Exams",
      link: "#",
    },
    {
      label: "Medical (UG) Exams",
      link: "#",
    },
    {
      label: "State Exam B.e/B.Tech",
      link: "#",
    },
    {
      label: "Placement Test",
      link: "#",
    },
    {
      label: "CBSE Class XII",
      link: "#",
    },

  ];

  return (
    <>
      <Box sx={{ margin: "0.5rem", }}>
        {
          buttons.map((button, index) => (
              <MyButton key={index} label={button.label} link={
                button.link
              } />
            ))}
        
          <Button
            variant="text"
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              fontWeight: 600,
              textAlign: "center",
              borderRadius: "1.3rem",
              padding: "0.2rem 1.5rem",
              margin: "1rem 0.4rem 0 0 ",
              borderColor: "#7B90FF",
              borderWidth: "0.1rem",
              borderStyle: "solid",
              color: "#210366",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#7B90FF",
                color: "white",
              },
            }}
            endIcon={<ArrowRightIcon />}>
            JEE Main
          </Button>
       
      </Box >
    </>
  )
}

export default CollegeArticleCard; 