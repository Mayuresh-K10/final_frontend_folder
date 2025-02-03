import React from "react";
import { Box, Typography } from "@mui/material";
import RatingBox from "./RatingBox";

const RatingFooter = () => {
    return (
        <Box
        sx={{
          display: "flex",
          paddingTop:"2rem",
          paddingBottom:"2rem",
          flexDirection: "column",
          margin: "auto",
          textAlign: "center",
          '@media (max-width:800px)': {
            margin : '1%',
            justifyContent : 'center',
            alignItems : 'center',
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            lineHeight: "3rem",
            letterSpacing: "0em",
            color: "#2F1370",
            fontWeight: "bold",
            marginBottom: "1rem",
            '@media (max-width:800px)': {
              fontSize : '1rem',
              lineHeight : '1rem',
            },
          }}
        >
          How likely are you to recommend collegecue to a friend or a colleague?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            marginBottom: "",
            '@media (max-width:800px)': {
              gap : '1rem',
              justifyContent :'center',
              alignItems : 'center',
            },
            '@media (max-width:500px)': {
              gap : '0.4rem',
            },
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            '@media (max-width:800px)': {
              justifyContent : 'space-between',
              gap : '32vw',
            },
          }}
        >
          <Typography
            sx={{
              color: "rgba(33, 3, 102, 1)",
              fontFamily: "Poppins",
              fontSize: "1rem",
              marginLeft: "-1.7rem",
              lineHeight: "3rem",
              letterSpacing: "0em",
            }}
          >
            Not so likely
          </Typography>
          <Typography
            sx={{
              color: "rgba(33, 3, 102, 1)",
              fontFamily: "Poppins",
              fontSize: "1.25rem",
              lineHeight: "3rem",
              marginRight: "-2.5rem",
              letterSpacing: "0em",
              fontWeight: "bold",
            }}
          >
            Highly likely
          </Typography>
        </Box>
      </Box>
    );
}

export default RatingFooter;