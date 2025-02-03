import { Typography, Box } from "@mui/material";
import React from "react";

const GetAns = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
      variant="h1"
        sx={{
          color: "#210366",
          fontSize: "2rem",
          fontWeight: "700",
          wordWrap: "break-word",
          marginY: "3rem ",
        }}
      >
        Get Answers on Test Preperation, Admissions & Campus Life
      </Typography>
    </Box>
  );
};

export default GetAns;
