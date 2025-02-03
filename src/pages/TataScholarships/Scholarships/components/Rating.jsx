import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import RatingBox from "./RatingBox";
function Rating() {
  return (

    <Box sx={{
      width: '999px',
      height: '195px',
      top: '4542px',
      left: '222px',
      borderRadius: '28px',
      marginTop: '2rem',
      marginBottom: '2rem',
      '@media (max-width:600px)':{
        width:'fit-content',
        marginBottom:'8rem'
      }
    }}>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "90px",
          letterSpacing: "0em",
          color: "#210366",
          textAlign: "center",
          '@media (max-width:600px)':{
            fontSize:"10px",  
          }
        }}
      >
        How likely are you to recommend
        Collegecue.com to a friend or a colleague?
      </Typography>
      <Container>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            marginBottom: "",
            '@media (max-width:600px)':{
              display:'grid',
              gridTemplateColumns:'auto auto auto auto auto',
              gap:"20px"
            }
          }}
        >
          <RatingBox>1</RatingBox>
          <RatingBox>2</RatingBox>
          <RatingBox>3</RatingBox>
          <RatingBox>4</RatingBox>
          <RatingBox>5</RatingBox>
          <RatingBox>6</RatingBox>
          <RatingBox>7</RatingBox>
          <RatingBox>8</RatingBox>
          <RatingBox>9</RatingBox>
          <RatingBox>10</RatingBox>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: '14pxa',
            fontWeight: "500",
            lineHeight: "17px",
            letterSpacing: " 0em",
            textAlign: "center",
            '@media (max-width:600px)':{
              fontSize:"8px",  
            }
          }}
        >
          Not so likely
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: '14pxa',
            fontWeight: "500",
            lineHeight: "17px",
            letterSpacing: " 0em",
            textAlign: "center",
            '@media (max-width:600px)':{
              fontSize:"8px",  
            }
          }}
        >
          Highly likely
        </Typography>
      </Box>
    </Box>
  );
}

export default Rating;