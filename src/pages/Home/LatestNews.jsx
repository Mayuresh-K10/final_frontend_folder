import React from "react";
import { Box, Container } from "@mui/material";
import MyHeading from "../../components/Headings/MyHeading";
import MyButton from "../../components/Buttons/MyButton";
import ParentComponent from "./ParentComponent";

const LatestNews = () => {
  // console.log("LatestNews render");

  const heading = "Latest News & Stories";
  const buttons = [
    {
      label: "Exam Alert",
      link: "/news",
    },
    {
      label: "College Alert",
      link: "/news",
    },
    {
      label: "Admission Alert",
      link: "/news",
    },
  ];

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "5rem" }}>
        <MyHeading headingName={heading} />

        <Box sx={{ margin: "2rem 0" }}>
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
          <ParentComponent />
        </Box>
      </Container>
    </>
  );
};

export default LatestNews;
