import React from "react";
import Layout from "./components/Layout";
import { Container, Box } from "@mui/material";
import AllAmountCard from "./components/AllAmountCard";
import AllScholarshipCard from "./components/AllScholarshipCard";

import AllSimilarCard from "./components/AllSimilarCard";
import Layout2 from "./components/Layout2";

import Rating from "./components/Rating";

export default function Scholarships() {
  return (
    <Container
      maxWidth="70%"
      sx={{
        width: "70%",
        margin: "20px",
        padding: "5px",
        boxSizing: "border-box",
        marginLeft: "-70px",
        "@media (max-width:600px)": {
          margin: "0px",
          maxWidth: "100%",
          width: "fit-content",
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          width: "100%",
          "@media (max-width:600px)": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "3.3rem",
            "@media (max-width:600px)": {
              marginLeft: "40px",
            },
          }}
        >
          <Layout />
          <Layout2 />
          <Box
            sx={{
              display: "flex",
              gap: "3.5rem",
              "@media (max-width:600px)": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                marginLeft: "-6rem",
              },
            }}
          >
            {" "}
            <AllSimilarCard />{" "}
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: "-24rem",
            "@media (max-width:600px)": {
              marginRight: "-32.4rem",
            },
          }}
        >
          <AllAmountCard />
          <AllScholarshipCard />
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "15rem",
          "@media (max-width:600px)": { marginLeft: "0.5rem" },
        }}
      >
        <Rating />
      </Box>
    </Container>
  );
}
