import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PracticeQues from "./PracticeQues.jsx";

import image from "../Image/practice6.jpg";
const AllQuesAns = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#2F1370",
            fontWeight: "600",
            fontSize: "3rem",
            paddingTop: "6.25rem",
            justifyContent: "flex-start",
          }}
        >
          {" "}
          List of Practice Questions{" "}
        </Typography>
        <Box
          sx={{
            width: "25rem",
            height: "20rem",

            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <img src={image} alt="List of practice question" loading="lazy" />
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ backgroundColor: "white", padding: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "auto",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <PracticeQues />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllQuesAns;
