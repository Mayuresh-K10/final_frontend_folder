import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PageIcon from "../Icons/PageIcon";
import ArrowRight from "../Icons/ArrowRight";

const PageTitle = (props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: "3rem",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <PageIcon />
      <Box
        sx={{ marginTop: "3rem", display: "flex", flexDirection: "row" }}
      ></Box>
      <Box sx={{ paddingTop: "0.7rem" }}>
        <ArrowRight />
      </Box>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0em",
          textAlign: "left",
          marginLeft: "0.4rem",
          color: "#210366",
          paddingTop: "0.8rem",
        }}
      >
        {props.title}
      </Typography>
    </Container>
  );
};

export default PageTitle;
