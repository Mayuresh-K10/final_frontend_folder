import React, { useState } from "react";

import { Container, Box, Typography } from "@mui/material";
import BoldHeading from "../../components/Headings/BoldHeading";
import PopularTags from "./components/PopularTags";
import AllTopReviewCards from "./components/AllTopReviewCards";
import Hero from "../StudyAbroad/Hero";
import AllReviewCards from "./components/AllReviewCards";
import FilterButton from "../../components/Buttons/FilterButton";
import { Helmet } from "react-helmet";
import AdSenseComponent from "../../utils/AdSenseComponent";

const Review = () => {
  const colorData = [
    { A: "#2196F3" },
    { B: "#4CAF50" },
    { C: "#FF5722" },
    { D: "#2196F3" },
    { E: "#9C27B0" },
    { F: "#F44336" },
    { G: "#FFEB3B" },
    { H: "#009688" },
    { I: "#673AB7" },
    { J: "#FF9800" },
    { K: "#03A9F4" },
    { L: "#E91E63" },
    { M: "#8BC34A" },
    { N: "#FFC107" },
    { O: "#795548" },
    { P: "#00BCD4" },
    { Q: "#607D8B" },
    { R: "#FF4081" },
    { S: "#CDDC39" },
    { T: "#FF5722" },
    { U: "#009688" },
    { V: "#F44336" },
    { W: "#3F51B5" },
    { X: "#4CAF50" },
    { Y: "#9C27B0" },
    { Z: "#2196F3" },
  ];

  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const getbgColor = (latter) => {
    const foundColor = colorData.find(
      (colorObject) => Object.keys(colorObject)[0] === latter
    );
    return foundColor[latter] || "#000000";
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Read reviews and feedback from students and alumni about universities, courses, faculty, infrastructure, and overall experience."
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-3919517798801147"
        ></meta>
      </Helmet>
      <Hero />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "0px ",
        }}
      >
        <Box
          sx={{
            "@media (max-width:600px)": {
              marginLeft: "1rem",
              marginRight: "1rem",
            },
          }}
        >
          <Typography
        variant="h1"
        sx={{
          fontSize: "2.5rem",
          lineHeight: "3rem",
          letterSpacing: "0em",
          fontWeight: "bold",
          marginBottom: "1rem",
          paddingY:"3.5rem",
        }}
      >
        Filter By
      </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <FilterButton>This Month</FilterButton>
            <FilterButton>This week</FilterButton>
            <FilterButton>This Quater</FilterButton>
          </Box>
        </Box>
        <Box
          sx={{
            "@media (max-width:600px)": {
              marginLeft: "1rem",
              marginRight: "1rem",
            },
          }}
        >
          <BoldHeading>Most Popular Tags</BoldHeading>
          <PopularTags />
        </Box>
        <Box>
          <Box
            sx={{
              "@media (max-width:600px)": {
                marginLeft: "1rem",
                marginRight: "1rem",
              },
            }}
          >
            <BoldHeading>Top Reviews</BoldHeading>
          </Box>
          <AllTopReviewCards getbgColor={getbgColor} />
        </Box>
        <Box sx={{width:'100%', height:'auto'}}>
          <AdSenseComponent />
        </Box>
        <Box sx={{ marginBottom: "4rem" }}>
          <Box
            sx={{
              display: "flex",
              "@media (max-width:600px)": {
                marginLeft: "1rem",
                marginRight: "1rem",
              },
            }}
          >
            <BoldHeading>{dataFromChild} Reviews discovered</BoldHeading>
          </Box>
          <AllReviewCards
            getbgColor={getbgColor}
            onData={handleDataFromChild}
          />
        </Box>
      </Container>
    </>
  );
};

export {Review};
