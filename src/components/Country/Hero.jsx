import React from "react";
import { Box, Typography } from "@mui/material";
import globe from "./Images/icons/Patterns.svg";
import TopCollegeStepper from "../../pages/StudyAbroad/TopCollegeStepper";

import earth from "./Images/banner/study.png";
import needle from "./Images/icons/needle-underline.svg";
const Hero = ({ country }) => {
  return (
    <Box
      sx={{
        bgcolor: "#313893",
        height: "auto",
        position: "relative",
        zIndex: "2",
        width: "100%",
        paddingTop: "1.5rem",
      }}
    >
      <Box
        sx={{
          height: "auto",
          zIndex: "2",
          width: "100%", // Ensure the container takes full width
          display: "flex",
          justifyContent: "space-around", // Center items horizontally
          alignItems: "center", 
          // Allow flex items to wrap
          "@media (max-width: 800px)": {
            justifyContent: 'center',
            flexDirection:'column'
          },
        }}
      >


        <Box
          sx={{
            maxWidth: "30rem",
            marginLeft:'2rem',
           
            "@media (max-width: 800px)": {
              maxWidth: '100%',
              marginX: 'auto',
              paddingLeft: '2rem',
              paddingRight: '2rem'
            },
          }}
        >
          <Typography
          variant="h1"
            sx={{
              fontSize: "5rem",
              fontWeight: "700",
              textAlign: "left",
              color: "#a27fff",
              "@media (max-width: 800px)": {
                fontSize: "2.5rem",
                textAlign: "center",
              },
            }}
          >
            Study in <span style={{ color: "#F8DE22" }}>{country}</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "4rem",
              '@media (max-width:800px)': {
                display: 'none'
              }

            }}
          >
            <img src={needle} alt="" style={{ width: "20rem" }} />
          </Box>

          <Typography
            variant="subtitle1"
            color="#FFFFFF"
            sx={{
              textAlign: "left",
              fontSize: "3rem",
              "@media (max-width: 770px)": {
                fontSize: "1.5rem",
                textAlign: "center",
              },
            }}
          >
            Build a dream career
          </Typography>
          <Typography
            variant="subtitle2"
            color="#FFFFFF"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              textWrap: 'wrap',
              width: 'fit',
              "@media (max-width: 770px)": {
                fontSize: "1rem",
                textAlign: "center",
              },
            }}
          >
            International students prefer to study in {country}. One of the
            most well-liked international education hubs, the nation is home
            to over a million international students.
          </Typography>
          <TopCollegeStepper country={country} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingTop: "1.5rem",
            "@media (max-width: 800px)": {
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                maxWidth: '80%',
                marginX: 'auto'
              },
          
            
          }}
        >
          
            <img
              src={earth}
              alt="study in abroad"
              style={{
                width: "100%", 
                maxWidth: "26rem", 
                objectFit: "cover", 
              }}
              loading="lazy" 
              srcSet={`${earth} 1024w, ${earth} 640w`} 
              sizes="(max-width: 768px) 80vw, 50vw"
            />
         
        </Box>
        <Box
          sx={{
            "@media (max-width : 800px)": {
              display: "none",
            },
          }}
        >
          <img
            src={globe}
            alt=""
            style={{
              position: "absolute",
              top: 60,
              right: "16%",
              zIndex: -1,
            }}
          />
        </Box>
      </Box>

    </Box>
  );
};

export default Hero;
