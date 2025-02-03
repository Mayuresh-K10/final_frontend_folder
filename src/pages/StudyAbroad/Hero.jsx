import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Review from "../../Assets/HeroImages/ReviewHero.jpg";
import Start from "../../Assets/HeroImages/star.png";
import Dots from "../../Assets/HeroImages/DOTS-bg-hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: "#313893",
        height: "75vh",
        position: "relative",
        zIndex: "2",
        width: "100%",
        overflow: "hidden",
        maxWidth:'100%',
        marginX:'auto'
      }}
    >
      <Container>
        <Box
          sx={{
            display: " flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "90%",
            gap: "10px",
            paddingY: "2rem",
            "@media (max-width : 770px)": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "space-evenly",
              height: "fit-content",
              padding: "2rem",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "4rem",
              fontWeight: "700",
              textAlign: "center",
              color: "white",
              width: "50%",
              "@media (max-width : 770px)": {
                fontSize: "2rem",
              },
            }}
          >
            Find reviews for over 25000 Colleges
          </Typography>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              src={Review}
              alt="@BharatTech"
              style={{
                width: "30vw",
                height: "auto",
                borderRadius: "50%",
                border: "10px solid #FF4005",
              }}
            />
            <img
              src={Dots}
              alt="@BharatTech"
              style={{
                width: "500px",
                height: "auto",
                position: "absolute",
                top: "25%",
                left: "25%",
                zIndex: "-1",
                animation: "Rotate 15s linear infinite",
              }}
            />
          </Box>
        </Box>
        <Box>
          <img
            src={Start}
            alt="@BharatTech"
            style={{
              width: "60px",
              height: "auto",
              position: "absolute",
              top: "10%",
              right: "14%",
              transform: "translate(-50%, -50%)",
              animation: "Rotate 10s linear infinite",
            }}
          />
          <img
            src={Start}
            alt="@BharatTech"
            style={{
              width: "60px",
              height: "auto",
              position: "absolute",
              bottom: "30%",
              right: "10%",
              transform: "translate(-50%, -50%)",
              animation: "Rotate 10s linear infinite",
            }}
          />
          <img
            src={Start}
            alt="@BharatTech"
            style={{
              width: "60px",
              height: "auto",
              position: "absolute",
              bottom: "15%",
              left: "12%",
              transform: "translate(-50%, -50%)",
              animation: "Rotate 10s linear infinite",
            }}
          />
          <img
            src={Start}
            alt="@BharatTech"
            style={{
              width: "60px",
              height: "auto",
              position: "absolute",
              top: "30%",
              left: "10%",
              transform: "translate(-50%, -50%)",
              animation: "Rotate 10s linear infinite",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
