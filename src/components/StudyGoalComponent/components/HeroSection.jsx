import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CircleSpikeOrange from "../../../Assets/HeroImages/Circle-Spike-orange.svg";
import Book from "../../../Assets/HeroImages/banner-book.png";
import Plane from "../../../Assets/HeroImages/banner-plane.png";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#313893",
          height: "auto",
          marginBottom: "2rem",
        }}
      >
        <Container>
          <Box
            sx={{
              width: "100%",
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                textAlign: "center",
                fontSize: "3.5rem",
                paddingY: "20vh",
              }}
            >
              Our Suggestion in On Your Study goal
            </Typography>
          </Box>
          <Box>
            <img
              src={CircleSpikeOrange}
              alt="@BharatTech"
              style={{
                position: "absolute",
                top: "10%",
                right: "5%",
                animation: "Rotate 7s linear infinite",
              }}
            />
            <img
              src={CircleSpikeOrange}
              alt="@BharatTech"
              style={{
                position: "absolute",
                bottom: "10%",
                left: "5%",
                animation: "Rotate 7s linear infinite",
              }}
            />
            <img
              src={Plane}
              alt="@BharatTech"
              style={{
                position: "absolute",
                bottom: "10%",
                right: "5%",
                animation: "jump 6s linear infinite",
              }}
            />
            <img
              src={Book}
              alt="@BharatTech"
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                animation: "jump 5s linear infinite",
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
