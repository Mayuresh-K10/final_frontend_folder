import React from "react";
import { Box } from "@mui/material";
import { Typography, CardContent } from "@mui/material";
import Dropdown from "../../components/Cards/LeftDropDownMenuCard";

const LeftCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        padding: "1%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height : "fit-content",
        boxShadow: " 0px 0px 40px 0px rgba(123, 144, 255, 0.15)",
        '@media (max-width:800px)': {
          width : '75%',
          maxWidth : '75%',
          justifyContent : 'center',
          alignItems : 'center',
        },
        '@media (min-width:800px)': {
          width : '25%',
          maxWidth : '25%',
        }
      }}
    >
      <CardContent>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "900",
            lineHeight: "15px",
            textAlign: "left",
            color: "#210366",
          }}
        >
          Found 6715 Institutes
        </Typography>
      </CardContent>
      <Dropdown />
    </Box>
  );
};

export default LeftCard;
