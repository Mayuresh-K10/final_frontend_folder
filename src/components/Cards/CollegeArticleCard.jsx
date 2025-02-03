import React from 'react';
import { Box } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";

const CollegeArticleCard = () => {
  const buttons = [
    {
        label: "Why Study Abroad?",
        link: "#",
    },
    {
        label: "Test Prep",
        link: "#",
    },
    {
        label: "Application",
        link: "#",
    },
    {
        label: "Funding",
        link: "#",
    },
    {
        label: "Visa",
        link: "#",
    },
    {
        label: "Travel & Stay",
        link: "#",
    },
    {
        label: "Post Degree",
        link: "#",
    },
  ];

  return (
    <>
      <Box sx={{ margin: "0", marginBottom: "4rem", marginTop: "2rem", marginLeft: "1rem" }}>
        {buttons.map((button, index) => (
        <MyButton key={index} label={button.label}  />
        ))}
      </Box>
    </>
  )
}

export default CollegeArticleCard;
