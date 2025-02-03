import React from "react";
import { Box,  Typography } from "@mui/material";
import "./css/studyAbroad.css";
import heroImg from "./images/HeroIamges/studyHero.png";
import patterns from "./images/HeroIamges/banner-book.png";
import bannarCap from "./images/HeroIamges/banner-cap.png";
import blob from "./images/HeroIamges/bliob.svg";


const SAHeroSection = () => { 
  return (
    <>
      <Box
        sx={{
          maxheight: "100vh",
          height: "auto",
          position: "relative",
          zIndex: "2",
          overflow: "hidden",
          backgroundColor: "#313893",
          paddingTop:"3rem",
        }}
      >
        <Box
          sx={{
            height: "auto",
            zIndex: "2",
            width: "100%", 
            display: "flex",
            justifyContent: "space-around", 
            alignItems: "center",
            flexWrap: "wrap", 
            '@media (max-width:600px)':{
              flexDirection:'column',
              marginX:'auto',
              maxWidth:'100%'
            }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap:"15px",
              height: "auto", 
              color: "#ffffff",
              width: "100%", 
              maxWidth: "40rem", 
              flexBasis: "45%",
              padding: "2rem",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "2.8rem",
                fontWeight: "700",
                color: "#FFFFFF ",
                "@media (max-width : 770px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              Find Study Abroad Universities and Programs
            </Typography>
            <Typography sx={{color:"#F8FAFB", fontSize:"1.5rem"}}>
              Discover Your Global Potential: Step into Your Future with Study
              Abroad!
            </Typography>
          </Box>
          <Box
            sx={{
              height: "auto", 
              color: "#fff",
              width: "100%", 
              maxWidth: "40rem", 
              textAlign: "center", 
              flexBasis: "45%", 
              '@media(max-width:600px)':{
                maxWidth:'70%',
                marginX:'auto'
              }
            }}
          >
            <Box style={{ position: "relative", width: "100%" }}>
              <img
                src={patterns}
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-18%",
                  zIndex: -1,
                  objectFit: "cover",
                  maxWidth: "40%",
                  animation: "jump 3s linear infinite",
                }}
              />
              <img
                src={blob}
                alt=""
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  objectFit: "cover",
                  animation: "Rotate 15s linear infinite",
                }}
              />
              <img
                src={bannarCap}
                alt="@Bharat-Tech"
                style={{
                  position: "absolute",
                  top: "80%",
                  right: "0",
                  zIndex: -1,
                  objectFit: "cover",
                  animation: "jump 2s linear infinite",
                }}
              />
              <img
                src={heroImg}
                alt="@BharatTech"
                style={{
                  zIndex: 1,
                  objectPosition: "center",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SAHeroSection;
