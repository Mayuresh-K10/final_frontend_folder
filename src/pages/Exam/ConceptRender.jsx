import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MyButton from "./../../components/Buttons/MyButton";

const ConceptRender = () => {
  const buttons = [
    {
      label: "Mathematics",
    },
    {
      label: "Physics",
    },
    {
      label: "Biology",
    },
    {
      label: "Chemistry",
    },
  ];

  return (
    <>
      <Box sx={{ marginTop: "4rem" }}>
        <Typography
          variant="h5"
          sx={{
            color: "#210366",
            fontSize: "2.25rem",
            paddingTop: "1rem",
            fontWeight: 700,
            textAlign : "center",
          }}
        >
          Concept Articles
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.1rem",
            marginTop: "2rem",
          }}
        >
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default ConceptRender;
