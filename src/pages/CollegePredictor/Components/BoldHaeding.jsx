import { Typography } from "@mui/material";
import React from "react";

const BoldHeading = ({ children}) => {
  return (
    <>
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
         paddingTop:"5rem",
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default BoldHeading;
