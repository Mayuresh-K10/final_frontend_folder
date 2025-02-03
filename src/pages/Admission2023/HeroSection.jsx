import React from "react";
import { Box,  Typography } from "@mui/material";
import img from "./Images/banner2.jpg";


const HeroSection = () => {
  
 

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6363795518207283) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.59156162464986) 100%), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <Typography
        variant="h1"
         style={{ fontSize: "50px", marginTop: "14rem", fontWeight: "bold", color: "white", textAlign:'center',
          '@media(max-width:800px)':{
            marginTop:'6rem',
            textAlign:'center',
            fontSize:'40px'
          }
         }}>
          GET ADMISSION IN BEST COLLEGES
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;